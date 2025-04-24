import { useState } from "react";
import { ColecctionCrumbs } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import { useQuery } from "react-query";
import { Catalog } from "../Types/BooksTypes";
import { getUserColection } from "../Services/BooksServices";
import UseDebounce from "../../../hooks/UseDebounce";
import { Label, Select, TextInput } from "flowbite-react";
import OptCategories from "../Components/OptsCategories";
import ColectionList from "../Components/Views/ColectionList";
import NoResults from "../../../components/NoResults";
import Loader from "../../../components/Loader";

const AdvanceSearchColection = () => {
  const [page, setPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("AdvancePage");
    return savedPage ? Number(savedPage) : 1;
  });

  const onPageChange = (page: number) => {
    setPage(page);
    sessionStorage.setItem("AdvancePage", page.toString());
  };

  const [searchTitle, setSearchTitle] = useState<string>("");
  const [searchAuthor, setSearchAuthor] = useState<string>("");
  const [searchSigna, setSearchSigna] = useState<string>("");
  const [searchISBN, setSearchISBN] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [SearchEditorial, setSearchEditorial] = useState<string>("");
  const title = UseDebounce(searchTitle, 3000);
  const author = UseDebounce(searchAuthor, 3000);
  const signa = UseDebounce(searchSigna, 3000);
  const ISBN = UseDebounce(searchISBN, 3000);
  const Editorial = UseDebounce(SearchEditorial, 3000);

  const { data: catalog, isLoading } = useQuery<Catalog, Error>(
    ["SearchColection", page, title, author, signa, category, ISBN],
    () =>
      getUserColection(
        page,
        15,
        title,
        author,
        "",
        "1",
        signa,
        category,
        ISBN,
        Editorial
      ),
    {
      staleTime: 5000,
    }
  );

  const MaxPage = Math.ceil((catalog?.count ?? 0) / 15);

  return (
    <>
      <ColecctionCrumbs text="Búsqueda Avanzada" />
      <main className=" w-full px-5 grid grid-cols-4 gap-5 max-lg:grid-cols-1">
        <section className="col-span-1 w-full">
          <span className=" text-center font-bold ">
            Criterios de búsqueda avanzada
          </span>
          <div>
            <Label value="Autor" />
            <TextInput
              placeholder="Ej. Ulate Olivar"
              onChange={(event) => setSearchAuthor(event.target.value)}
            />
          </div>
          <div>
            <Label value="Título" />
            <TextInput
              placeholder="Ej. Aliento de barro y fuego"
              onChange={(event) => setSearchTitle(event.target.value)}
            />
          </div>
          <details className=" max-lg:block hidden">
            <summary>Mas filtros</summary>
            <div>
              <Label value="Código de signatura" />
              <TextInput
                placeholder="Ej. CR.M.100..."
                onChange={(event) => setSearchSigna(event.target.value)}
              />
            </div>
            <div>
              <Label value="Código de ISBN" />
              <TextInput
                placeholder="Ej. 3497823409328"
                onChange={(event) => setSearchISBN(event.target.value)}
              />
            </div>
            <div>
              <Label value="Editorial" />
              <TextInput
                placeholder="Ej. Club de Libros"
                onChange={(event) => setSearchEditorial(event.target.value)}
              />
            </div>
            <div>
              <Label value="Categoría de estante" />
              <Select onChange={(event) => setCategory(event.target.value)}>
                <OptCategories />
              </Select>
            </div>
          </details>
          <div className=" max-lg:hidden">
            <div>
              <Label value="Código de signatura" />
              <TextInput
                placeholder="Ej. CR.M.100..."
                onChange={(event) => setSearchSigna(event.target.value)}
              />
            </div>
            <div>
              <Label value="Código de ISBN" />
              <TextInput
                placeholder="Ej. 3497823409328"
                onChange={(event) => setSearchISBN(event.target.value)}
              />
            </div>
            <div>
              <Label value="Editorial" />
              <TextInput
                placeholder="Ej. Club de Libros"
                onChange={(event) => setSearchEditorial(event.target.value)}
              />
            </div>
            <div>
              <Label value="Categoría de estante" />
              <Select onChange={(event) => setCategory(event.target.value)}>
                <OptCategories />
              </Select>
            </div>
          </div>
          {catalog && catalog.count < 15 && (
            <span> Existen {catalog.count} registros para su búsqueda </span>
          )}
          {catalog && catalog.count > 15 && (
            <span> Por favor, complete al menos un criterio de búsqueda para mayor presición </span>
          )}
        </section>
        <section
          className="h-[80vh] w-full overflow-y-scroll custom-bar col-span-3 px-8 max-lg:pr-9 max-lg:pl-0 max-lg:h-full
        "
        >
          {!isLoading && catalog && catalog.count > 0 && (
            <>
              <ColectionList
                inf={false}
                colection={catalog}
                onPageChange={onPageChange}
                totalPages={MaxPage}
                currentPage={page}
              />
            </>
          )}

          {isLoading && 
           <div className=" w-full flex items-center justify-center">
           <Loader />
         </div>
          }
          {!isLoading && (!catalog || catalog.count == 0) && <NoResults />}
        </section>
      </main>
    </>
  );
};

export default AdvanceSearchColection;

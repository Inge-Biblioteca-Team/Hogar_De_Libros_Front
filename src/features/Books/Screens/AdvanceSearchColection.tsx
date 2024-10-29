import { useState } from "react";
import { ColecctionCrumbs } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import { useQuery } from "react-query";
import { Catalog } from "../Types/BooksTypes";
import { getColection } from "../Services/BooksServices";
import UseDebounce from "../../../hooks/UseDebounce";
import { Label, Select, TextInput } from "flowbite-react";
import OptCategories from "../Components/OptsCategories";
import ColectionList from "../Components/Views/ColectionList";

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

  const { data: catalog } = useQuery<Catalog, Error>(
    ["SearchColection", page, title, author, signa, category, ISBN],
    () =>
      getColection(
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

      <section className=" fixed left-3 flex  flex-col gap-7 top-[22%] w-96 ">
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
          <Label value="Titulo" />
          <TextInput
            placeholder="Ej. Aliento de barro y fuego"
            onChange={(event) => setSearchTitle(event.target.value)}
          />
        </div>
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
            placeholder="Ej. ClubdeLibros"
            onChange={(event) => setSearchEditorial(event.target.value)}
          />
        </div>
        <div>
          <Label value="Categoría de estante" />
          <Select onChange={(event) => setCategory(event.target.value)}>
            <OptCategories />
          </Select>
        </div>
        {catalog && catalog.count < 15 && (
          <span> Existen {catalog.count} registros para su búsqueda </span>
        )}
        {catalog && catalog.count > 15 && (
          <span> Por favor complete al menos un criterios de búsqueda </span>
        )}
      </section>
      <section className=" absolute top-[22%] right-40 h-[75vh] w-[120vh] overflow-y-scroll custom-bar px-10 py-10">
        {catalog && catalog.count > 0 ? (
          <ColectionList colection={catalog} onPageChange={onPageChange} totalPages={MaxPage} currentPage={page} />
        ) : (
          <div className=" flex items-center justify-center h-96 font-bold text-2xl">Lo sentimos, no existen libros</div>
        )}
      </section>
    </>
  );
};

export default AdvanceSearchColection;

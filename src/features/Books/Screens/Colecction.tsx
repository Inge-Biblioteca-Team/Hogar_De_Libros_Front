import { Button, ButtonGroup, Select, TextInput } from "flowbite-react";
import { ColecctionCrumbs } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import OptCategories from "../Components/OptsCategories";
import { BsGrid3X3GapFill, BsListUl } from "react-icons/bs";
import { LiaSearchengin } from "react-icons/lia";
import { getUserColection } from "../Services/BooksServices";
import { useQuery } from "react-query";
import { Catalog } from "../Types/BooksTypes";
import { useState } from "react";
import ColectionGrid from "../Components/Views/ColectionGrid";
import ColectionList from "../Components/Views/ColectionList";
import CustomUsersPagination from "../../../components/CustomUsersPagination";
import UseDebounce from "../../../hooks/UseDebounce";
import Loader from "../../OPAC/Assets/LoaderOPAC.gif";
import NoResults from "../../../components/NoResults";

const Colecction = () => {
  const [page, setPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("CurentCatalogPage");
    return savedPage ? Number(savedPage) : 1;
  });
  const [limit, setLimit] = useState<number>(15);

  const onPageChange = (page: number) => {
    setPage(page);
    sessionStorage.setItem("CurrentCatalogPage", page.toString());
  };

  const [category, setCategory] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const sTitle = UseDebounce(title, 1000);

  const { data: catalog, isLoading } = useQuery<Catalog, Error>(
    ["colection", page, limit, sTitle, category],
    () => getUserColection(page, limit, sTitle, "", "", "1", "", category),
    {
      staleTime: 5000,
    }
  );
  const [view, setView] = useState<string>("List");

  const MaxPage = Math.ceil((catalog?.count ?? 0) / limit);

  return (
    <>
      <ColecctionCrumbs text="Búsqueda por título" />
      <main className=" flex flex-col  w-full justify-center items-center gap-3">
        <section className="w-5/6 lg:w-4/5 lg:flex lg:justify-between">
          <div className="flex flex-col gap-2 lg:flex-row">
            <Select onChange={(event) => setCategory(event.target.value)}>
              <OptCategories />
            </Select>
            <TextInput
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Búsqueda por título"
              rightIcon={LiaSearchengin}
            />
          </div>
          <ButtonGroup className="flex justify-end lg:pt-0 pt-2 gap-2">
            <Button
              color={`${view === "List" ? "blue" : "gray"}`}
              title="Lista"
              onClick={() => {
                setView("List"), setLimit(15);
              }}
            >
              <BsListUl size={25} />
            </Button>
            <Button
              color={`${view !== "List" ? "blue" : "gray"}`}
              title="Cuadricula"
              onClick={() => {
                setView("Grid"), setLimit(12);
              }}
            >
              <BsGrid3X3GapFill size={25} />
            </Button>
          </ButtonGroup>
        </section>
        {isLoading ? (
          <div className=" w-full flex items-center justify-center">
            <figure>
              <img width={400} src={Loader} alt="...Cargando" />
              <figcaption className=" text-center">...Cargando</figcaption>
            </figure>
          </div>
        ) : catalog?.count && catalog.count > 0 ? (
          <section className="w-4/5">
            {view == "List" && <ColectionList colection={catalog} />}
            {view == "Grid" && <ColectionGrid colection={catalog} />}
            <CustomUsersPagination
              limit={limit}
              page={page}
              onPageChange={onPageChange}
              totalPages={MaxPage}
              total={catalog.count}
            />
          </section>
        ) : (
          <NoResults />
        )}
      </main>
    </>
  );
};

export default Colecction;

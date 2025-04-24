import { Select, TextInput, ButtonGroup, Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ChlildrenColecctionCrumbs } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import CustomUsersPagination from "../../../components/CustomUsersPagination";
import UseDebounce from "../../../hooks/UseDebounce";
import ColectionGrid from "../../Books/Components/Views/ColectionGrid";
import ColectionList from "../../Books/Components/Views/ColectionList";
import { getColection } from "../Services/ChildrenServices";
import { BsGrid3X3GapFill, BsListUl } from "react-icons/bs";
import { LiaSearchengin } from "react-icons/lia";
import { Catalog } from "../../Books/Types/BooksTypes";
import OptsCateogryChildren from "../Components/OptsCateogryChildren";
import Loader from "../../OPAC/Assets/LoaderOPAC.gif";
import NoResults from "../../../components/NoResults";

const ChildrenColection = () => {
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
    ["Children-catalog", page, limit, sTitle, category],
    () => getColection(page, limit, sTitle, "", "", "", "", category),
    {
      staleTime: 5000,
    }
  );
  const [view, setView] = useState<string>("List");

  const MaxPage = Math.ceil((catalog?.count ?? 0) / limit);

  useEffect(() => {
    setPage(1);
  }, [sTitle, category]);

  return (
    <>
      <ChlildrenColecctionCrumbs text="Búsqueda por título" />
      <main className=" flex flex-col w-full justify-center items-center gap-3">
        <section
          className="w-11/12 flex justify-between items-end 
        max-md:flex-col max-md:items-stretch"
        >
          <div className="flex gap-2 max-md:flex-col">
            <Select onChange={(event) => setCategory(event.target.value)}>
              <OptsCateogryChildren />
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
        <section className=" w-11/12">
          {catalog && catalog.count > 0 && (
            <>
              {view == "List" && <ColectionList colection={catalog} inf />}
              {view == "Grid" && <ColectionGrid colection={catalog} inf />}
              <CustomUsersPagination
                limit={limit}
                page={page}
                onPageChange={onPageChange}
                totalPages={MaxPage}
                total={catalog.count}
              />
            </>
          )}
          {isLoading && (
            <div className=" w-full flex items-center justify-center">
              <Loader />
            </div>
          )}
          {!isLoading && (!catalog || catalog.count == 0) && <NoResults />}
        </section>
      </main>
    </>
  );
};

export default ChildrenColection;

import { Select, TextInput, ButtonGroup, Button } from "flowbite-react";
import { useState } from "react";
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

  const { data: catalog } = useQuery<Catalog, Error>(
    ["Children-catalog", page, limit, sTitle, category],
    () => getColection(page, limit, sTitle, "", "", "", "", category),
    {
      staleTime: 5000,
    }
  );
  const [view, setView] = useState<string>("List");

  const MaxPage = Math.ceil((catalog?.count ?? 0) / limit);

  return (
    <>
      <ChlildrenColecctionCrumbs text="Búsqueda por título" />
      <main className=" flex flex-col w-full justify-center items-center gap-3">
        <section className=" w-4/5 flex justify-between">
          <div className=" flex gap-2">
            <Select
              className="max-sm:hidden"
              onChange={(event) => setCategory(event.target.value)}
            >
              <OptsCateogryChildren />
            </Select>
            <TextInput
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Búsqueda por título"
              rightIcon={LiaSearchengin}
            />
          </div>
          <ButtonGroup className=" max-sm:hidden">
            <Button
              color={"gray"}
              title="Lista"
              onClick={() => {
                setView("List"), setLimit(15);
              }}
            >
              <BsListUl size={25} />
            </Button>
            <Button
              color={"gray"}
              title="Cuadricula"
              onClick={() => {
                setView("Grid"), setLimit(12);
              }}
            >
              <BsGrid3X3GapFill size={25} />
            </Button>
          </ButtonGroup>
        </section>
        {catalog?.count && catalog.count > 0 ? (
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
          <div className="w-full h-96  flex items-center justify-center">
            <span className=" text-2xl font-bold">
              Lo sentimos, no hay resultados
            </span>
          </div>
        )}
      </main>
    </>
  );
};

export default ChildrenColection;

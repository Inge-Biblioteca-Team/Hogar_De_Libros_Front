import { Button, Select, TextInput } from "flowbite-react";
import {
  BreadCrumbManage,
  LoansAndCirculationCrumbs,
} from "../../../components/Breadcrumbs/BreadCrumbsItems";
import { useEffect, useState } from "react";
import MDNewBook from "../Components/Modals/MDNewBook";
import { getColection } from "../Services/ChildrenServices";
import { useQuery } from "react-query";
import UseDebounce from "../../../hooks/UseDebounce";
import { Catalog } from "../Types/BooksChildrensTypes";
import CustomPagination from "../../../components/CustomPagination";
import { MdTitle, MdPersonSearch } from "react-icons/md";
import BookChildrenTable from "../Components/BookChildrenTable";
import { LuClipboardSignature } from "react-icons/lu";
import NoResults from "../../../components/NoResults";
import { Pagination } from "flowbite-react";
import Loader from "../../OPAC/Assets/LoaderOPAC.gif";

const ManageChildrenBooks = ({ loans }: { loans?: boolean }) => {
  const [open, setOpen] = useState(false);
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [searchAuthor, setSearchAuthor] = useState<string>("");
  const [searchSigna, setSearchSigna] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const title = UseDebounce(searchTitle, 2000);
  const author = UseDebounce(searchAuthor, 2000);
  const Signa = UseDebounce(searchSigna, 2000);

  const [page, setPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("CCatalogPage");
    return savedPage ? Number(savedPage) : 1;
  });
  const [limit, setLimit] = useState<number>(5);

  const { data: Catalog, isLoading } = useQuery<Catalog, Error>(
    ["Children-colection", page, limit, title, author, Signa, status],
    () => getColection(page, limit, title, author, "", status, Signa),
    {
      staleTime: 50000,
    }
  );

  const onPageChange = (page: number) => {
    setPage(page);
    sessionStorage.setItem("CCatalogPage", page.toString());
  };

  useEffect(() => {
    setPage(1);
  }, [title, author, Signa, status]);

  const MaxPage = Math.ceil((Catalog?.count ?? 0) / limit);

  return (
    <>
      {loans ? (
        <LoansAndCirculationCrumbs text="Libros infantiles" />
      ) : (
        <BreadCrumbManage text="Libros infantiles" />
      )}
      <main className="flex items-center justify-center w-full flex-col gap-4">
        <section className="w-4/5 md:w-full md:pl-4 md:pr-4 sm:items-center flex lg:flex-row flex-col justify-between lg:items-end max-sm:w-full max-sm:px-2 gap-4 lg:gap-0">
          <div className="flex md:w-full lg:flex-row flex-col gap-3">
            <TextInput
              onChange={(event) => setSearchTitle(event.target.value)}
              rightIcon={MdTitle}
              placeholder="Búsqueda por título"
            />
            <TextInput
              onChange={(event) => setSearchAuthor(event.target.value)}
              rightIcon={MdPersonSearch}
              placeholder="Búsqueda por autor"
            />
            <TextInput
              onChange={(event) => setSearchSigna(event.target.value)}
              rightIcon={LuClipboardSignature}
              placeholder="Código de signatura"
            />
            <Select onChange={(event) => setStatus(event.target.value)}>
              <option value="">Estado</option>
              <option value="1">Disponible</option>
              <option value="0">Baja</option>
            </Select>
          </div>
          <Button
            className="md:w-full lg:w-44"
            color={"blue"}
            onClick={() => setOpen(true)}
          >
            Añadir nuevo libro
          </Button>
        </section>
        <section className="w-4/5 md:w-full md:pl-4 md:pr-4 max-sm:w-full max-sm:px-2">
          {isLoading ? (
            <div className=" w-full flex items-center justify-center">
              <figure>
                <img width={400} src={Loader} alt="... Cargando" />
                <figcaption className=" text-center">... cargando</figcaption>
              </figure>
            </div>
          ) : Catalog && Catalog.count > 0 ? (
            <>
              <BookChildrenTable catalog={Catalog} />
              <div className="block max-sm:hidden">
                <CustomPagination
                  page={page}
                  onPageChange={onPageChange}
                  totalPages={MaxPage}
                  setCurrentLimit={setLimit}
                  total={Catalog.count}
                />
              </div>

              <div className="sm:hidden  flex justify-center ">
                <Pagination
                  layout="navigation"
                  currentPage={page}
                  totalPages={MaxPage}
                  onPageChange={onPageChange}
                />
              </div>
            </>
          ) : (
            <NoResults />
          )}
        </section>
      </main>
      <MDNewBook open={open} setOpen={setOpen} />
    </>
  );
};

export default ManageChildrenBooks;

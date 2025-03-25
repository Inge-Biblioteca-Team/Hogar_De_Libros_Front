import { Button, Select, TextInput } from "flowbite-react";
import {
  BreadCrumbManage,
  LoansAndCirculationCrumbs,
} from "../../../components/Breadcrumbs/BreadCrumbsItems";
import { useState } from "react";
import MDNewBook from "../Components/Modals/MDNewBook";
import { useQuery } from "react-query";
import UseDebounce from "../../../hooks/UseDebounce";
import { Catalog } from "../Types/BooksTypes";
import CustomPagination from "../../../components/CustomPagination";
import { MdTitle, MdPersonSearch } from "react-icons/md";
import BookTable from "../Components/BookTable";
import { LuClipboardSignature } from "react-icons/lu";
import { getColection } from "../Services/BooksServices";
import { Pagination } from "flowbite-react";
import Loader from "../../OPAC/Assets/LoaderOPAC.gif";

const ManageBooks = ({ loans }: { loans?: boolean }) => {
  const [open, setOpen] = useState(false);
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [searchAuthor, setSearchAuthor] = useState<string>("");
  const [searchSigna, setSearchSigna] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const title = UseDebounce(searchTitle, 1000);
  const author = UseDebounce(searchAuthor, 1000);
  const signa = UseDebounce(searchSigna, 1000);

  const [page, setPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("CatalogPage");
    return savedPage ? Number(savedPage) : 1;
  });
  const [limit, setLimit] = useState<number>(5);

  const { data: Catalog, isLoading } = useQuery<Catalog, Error>(
    ["colection", page, limit, title, author, status, signa],
    () => getColection(page, limit, title, author, "", status, signa),
    {
      staleTime: 50000,
    }
  );

  const onPageChange = (page: number) => {
    setPage(page);
    sessionStorage.setItem("CatalogPage", page.toString());
  };

  const MaxPage = Math.ceil((Catalog?.count ?? 0) / limit);

  return (
    <>
      {loans ? (
        <LoansAndCirculationCrumbs text="Libros" />
      ) : (
        <BreadCrumbManage text="Libros" />
      )}
      <main className=" flex items-center justify-center w-full flex-col gap-4">
        <section className="w-4/5 md:w-full md:pl-4 md:pr-4 sm:items-center flex lg:flex-row flex-col justify-between lg:items-end max-sm:w-full max-sm:px-2 gap-4 lg:gap-0">
          <div className="flex md:w-full lg:flex-row flex-col gap-3">
            <TextInput
              onChange={(event) => (
                setSearchTitle(event.target.value), setPage(1)
              )}
              rightIcon={MdTitle}
              placeholder="Búsqueda por titulo"
            />
            <TextInput
              onChange={(event) => (
                setSearchAuthor(event.target.value), setPage(1)
              )}
              rightIcon={MdPersonSearch}
              id="Autor"
              placeholder="Búsqueda por autor"
            />
            <TextInput
              onChange={(event) => (
                setSearchSigna(event.target.value), setPage(1)
              )}
              rightIcon={LuClipboardSignature}
              placeholder="Código de signatura"
            />
            <Select
              onChange={(event) => (setStatus(event.target.value), setPage(1))}
            >
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
            
            <div className="w-full flex items-center justify-center">
              <figure>
                <img width={400} src={Loader} alt="...Cargando" />
                <figcaption className="text-center">...Cargando</figcaption>
              </figure>
            </div>
          ) : Catalog ? (
            <>
              <div className=" ">
                <BookTable catalog={Catalog} />
              </div>
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
            <p className="text-center">No hay datos disponibles.</p>
          )}
        </section>
      </main>
      <MDNewBook open={open} setOpen={setOpen} />
    </>
  );
};

export default ManageBooks;

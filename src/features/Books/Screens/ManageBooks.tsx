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
import { MdTitle, MdPersonSearch } from "react-icons/md";
import BookTable from "../Components/BookTable";
import { LuClipboardSignature } from "react-icons/lu";
import { getColection } from "../Services/BooksServices";
import Loader from "../../../components/Loader";
import DesktopPagination from "../../../components/DesktopComponents/DesktopPagination";
import MobilePagination from "../../../components/MobileComponents/MobilePagination";
import NoResults from "../../../components/NoResults";

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
        <section
          className="w-full flex justify-between px-3 gap-4 max-md:flex-col 
        "
        >
          <div
            className="flex gap-3
           max-md:flex-col items-end max-md:items-stretch"
          >
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
            className="dark:bg-[#2d2d2d] dark:focus:ring-neutral-800 dark:hover:bg-neutral-800"
            color={"blue"}
            onClick={() => setOpen(true)}
          >
            Añadir nuevo libro
          </Button>
        </section>

        <section className=" w-full px-3">
          {isLoading && (
            <div className="w-full flex items-center justify-center">
              <Loader />
            </div>
          )}
          {!isLoading && Catalog && Catalog.count > 0 && (
            <BookTable catalog={Catalog} />
          )}
          {!isLoading && (!Catalog || Catalog.count == 0) && <NoResults />}
          <DesktopPagination
            page={page}
            onPageChange={onPageChange}
            totalPages={MaxPage}
            setCurrentLimit={setLimit}
          />

          <MobilePagination
            page={page}
            onPageChange={onPageChange}
            totalPages={MaxPage}
            setCurrentLimit={setLimit}
          />
        </section>
      </main>
      <MDNewBook open={open} setOpen={setOpen} />
    </>
  );
};

export default ManageBooks;

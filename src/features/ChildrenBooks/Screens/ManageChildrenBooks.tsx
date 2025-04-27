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
import { MdTitle, MdPersonSearch } from "react-icons/md";
import BookChildrenTable from "../Components/BookChildrenTable";
import { LuClipboardSignature } from "react-icons/lu";
import NoResults from "../../../components/NoResults";
import Loader from "../../../components/Loader";
import DesktopPagination from "../../../components/DesktopComponents/DesktopPagination";
import MobilePagination from "../../../components/MobileComponents/MobilePagination";

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
        <section className="w-full flex justify-between gap-4 px-3 max-md:flex-col">
          <div className="flex max-md:flex-col gap-3 items-end max-md:items-stretch">
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
            className="dark:bg-[#2d2d2d] dark:focus:ring-neutral-800 dark:hover:bg-neutral-800"
            color={"blue"}
            onClick={() => setOpen(true)}
          >
            Añadir nuevo libro
          </Button>
        </section>
        <section className="w-full px-3">
          {isLoading && (
            <div className=" w-full flex items-center justify-center">
              <Loader />
            </div>
          )}
          {!isLoading && Catalog && Catalog.count > 0 && (
            <BookChildrenTable catalog={Catalog} />
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

export default ManageChildrenBooks;

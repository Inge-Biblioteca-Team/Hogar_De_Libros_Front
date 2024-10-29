import { Button, Select, TextInput } from "flowbite-react";
import { BreadCrumbManage } from "../../../components/Breadcrumbs/BreadCrumbsItems";
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

const ManageBooks = () => {
  const [open, setOpen] = useState(false);
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [searchAuthor, setSearchAuthor] = useState<string>("");
  const [searchSigna, setSearchSigna] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const title = UseDebounce(searchTitle, 3000);
  const author = UseDebounce(searchAuthor, 3000);
  const signa = UseDebounce(searchSigna, 3000);

  const [page, setPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("CatalogPage");
    return savedPage ? Number(savedPage) : 1;
  });
  const [limit, setLimit] = useState<number>(5);

  const { data: Catalog } = useQuery<Catalog, Error>(
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
      <BreadCrumbManage text="Libros" />
      <main className=" flex items-center justify-center w-full flex-col gap-4">
        <section className="w-4/5 flex justify-between items-end max-sm:w-full max-sm:px-2">
          <div className="flex gap-3">
            <TextInput
              onChange={(event) => (
                setSearchTitle(event.target.value), setPage(1)
              )}
              rightIcon={MdTitle}
              placeholder="Búsqueda por titulo"
            />
            <TextInput
              className=" max-sm:hidden"
              onChange={(event) => (
                setSearchAuthor(event.target.value), setPage(1)
              )}
              rightIcon={MdPersonSearch}
              placeholder="Búsqueda por autor"
            />
            <TextInput
              className=" max-sm:hidden"
              onChange={(event) => (
                setSearchSigna(event.target.value), setPage(1)
              )}
              rightIcon={LuClipboardSignature}
              placeholder="Código de signatura"
            />
            <Select
              className=" max-sm:hidden"
              onChange={(event) => (setStatus(event.target.value), setPage(1))}
            >
              <option value="">Estado</option>
              <option value="1">Disponible</option>
              <option value="0">Baja</option>
            </Select>
          </div>
          <Button color={"blue"} onClick={() => setOpen(true)}>
            Añadir nuevo libro
          </Button>
        </section>
        <section className="w-4/5 max-sm:w-full max-sm:px-2">
          {Catalog && (
            <>
              <BookTable catalog={Catalog} />
              <CustomPagination
                page={page}
                onPageChange={onPageChange}
                totalPages={MaxPage}
                setCurrentLimit={setLimit}
                total={Catalog.count}
              />
            </>
          )}
        </section>
      </main>
      <MDNewBook open={open} setOpen={setOpen} />
    </>
  );
};

export default ManageBooks;

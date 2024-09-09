import { useState } from "react";
import { useQuery } from "react-query";
import { GetAdvanceSearch } from "../services/SvBooks";
import { BookApiResponse } from "../type/Book";
import { Breadcrumb, Label, TextInput } from "flowbite-react";
import BookCardList from "../components/Cards/BookCardList";
import BookPagination from "../components/BookPagination";
import {
  HomeCrumb,
  BooksCrumb,
  LastCrumb,
} from "../../../components/BreadCrumb";
import UseDebounce from "../../../hooks/UseDebounce";

const AdvancedSearch = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [searchAuthor, setSearchAuthor] = useState<string>("");
  const [searchISBN, setSearchISBN] = useState<string>("");
  const [searcPublishedYear, setSearcPublishedYear] = useState<string>("");
  const [searchEditorial, setSearcEditorial] = useState<string>("");

  const Title = UseDebounce(searchTitle, 1000);
  const ISBN = UseDebounce(searchISBN, 1000);
  const Author = UseDebounce(searchAuthor, 1000);
  const PublishedYear = UseDebounce(searcPublishedYear, 1000);
  const Editorial = UseDebounce(searchEditorial, 1000);

  const { data: books } = useQuery<BookApiResponse>(
    [
      "BookPerParam",
      page,
      limit,
      Title,
      Author,
      ISBN,
      PublishedYear,
      Editorial,
    ],
    () =>
      GetAdvanceSearch(
        page,
        limit,
        Title,
        Author,
        ISBN,
        PublishedYear,
        Editorial
      ),
    {
      staleTime: 600,
    }
  );

  const MaxPage = Math.ceil((books?.count ?? 0) / limit);

  return (
    <>
      <Breadcrumb className="custom-breadcrumb fixed">
        <HomeCrumb />
        <BooksCrumb />
        <LastCrumb CurrentPage="Busqueda Avanzada" />
      </Breadcrumb>
      <section className="flex flex-col w-full py-6 ">
        <div className="flex justify-center">
          <div className="flex flex-col w-1/4 p-4 space-y-4 fixed left-0 top-52 ">
            <strong className=" text-xl text-center">Criterios De Busqueda</strong>
            <div>
              <Label htmlFor="Title">Título</Label>
              <TextInput
                id="Title"
                name="Title"
                type="text"
                placeholder="Ingrese el título"
                onChange={(e) => setSearchTitle(String(e.target.value))}
              />
            </div>
            <div>
              <Label htmlFor="Author">Autor</Label>
              <TextInput
                id="Author"
                name="Author"
                type="text"
                placeholder="Ingrese el autor"
                onChange={(e) => setSearchAuthor(String(e.target.value))}
              />
            </div>
            <div>
              <Label htmlFor="PublicationYear">Año de Publicación</Label>
              <TextInput
                id="PublicationYear"
                name="PublicationYear"
                type="text"
                placeholder="Ingrese el año de publicación"
                onChange={(e) => setSearcPublishedYear(String(e.target.value))}
              />
            </div>
            <div>
              <Label htmlFor="Editorial">Editorial</Label>
              <TextInput
                id="Editorial"
                name="Editorial"
                type="text"
                placeholder="Ingrese la editorial"
                onChange={(e) => setSearcEditorial(String(e.target.value))}
              />
            </div>
            <div>
              <Label htmlFor="ISBN">ISBN</Label>
              <TextInput
                id="ISBN"
                name="ISBN"
                type="text"
                placeholder="Ingrese el ISBN"
                onChange={(e) => setSearchISBN(String(e.target.value))}
              />
            </div>
            <div className=" flex flex-col">
              <Label htmlFor="ItemsPerPage">Item por pagina</Label>
              <select
                onChange={(e) => setLimit(Number(e.target.value))}
                className=" rounded-md border-white bg-gray-50 focus:ring-cyan-300 focus:border-cyan-300"
                title="Items Por pagina"
                id="PerPage"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </select>
            </div>
          </div>
          <div className="w-3/4 pl-56">
            {
              <div className="grid grid-cols-1 gap-5">
                {books?.data.map((book) => (
                  <BookCardList key={book.BookCode} Book={book} />
                ))}
              </div>
            }
            <BookPagination
              currentPage={page}
              onPageChange={setPage}
              totalPages={MaxPage}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AdvancedSearch;

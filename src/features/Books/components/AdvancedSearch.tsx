import React, { useState } from "react";
import BookList from "../components/BookList";
import { useQuery } from "react-query";
import { GetAllBooks } from "../services/SvBooks";
import { Book } from "../type/Book";
import { Alert, Button, TextInput, Label } from "flowbite-react";
import BookPagination from "../components/BookPagination";

const AdvancedSearch = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [searchFilters, setSearchFilters] = useState({
    Title: "",
    Author: "",
    PublicationYear: "",
    Editorial: "",
    ISBN: "",
  });
  const [filteredBooks, setFilteredBooks] = useState<Book[] | undefined>(undefined);

  const {
    data: books,
    error,
    isLoading,
  } = useQuery<Book[], Error>(
    ["BookCatalog", page, limit],
    () => GetAllBooks(page, limit),
    {
      keepPreviousData: true,
      onSuccess: (data) => {
        if (!filteredBooks) {
          setFilteredBooks(data); 
        }
      },
    }
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const results = books?.filter(
      (book) =>
        (!searchFilters.Title ||
          book.Title) &&
        (!searchFilters.Author ||
          book.Author) &&
        (!searchFilters.PublicationYear ||
          book.PublicationYear.toString() === searchFilters.PublicationYear) &&
        (!searchFilters.Editorial ||
          book.Editorial) &&
        (!searchFilters.ISBN || book.ISBN.includes(searchFilters.ISBN))
    );

    setFilteredBooks(results);
  };

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error: {error.message}</span>;

  return (
    <section className="flex flex-col w-full">
      <h1 className="text-3xl font-black text-center mb-4" style={{ fontFamily: "Arial Black" }}>
        Búsqueda Avanzada
      </h1>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-1/4 p-4 space-y-4 border-r border-gray-200"
        >
          <div>
            <Label htmlFor="Title">Título</Label>
            <TextInput
              id="Title"
              name="Title"
              type="text"
              value={searchFilters.Title}
              onChange={handleInputChange}
              placeholder="Ingrese el título"
            />
          </div>
          <div>
            <Label htmlFor="Author">Autor</Label>
            <TextInput
              id="Author"
              name="Author"
              type="text"
              value={searchFilters.Author}
              onChange={handleInputChange}
              placeholder="Ingrese el autor"
            />
          </div>
          <div>
            <Label htmlFor="PublicationYear">Año de Publicación</Label>
            <TextInput
              id="PublicationYear"
              name="PublicationYear"
              type="text"
              value={searchFilters.PublicationYear}
              onChange={handleInputChange}
              placeholder="Ingrese el año de publicación"
            />
          </div>
          <div>
            <Label htmlFor="Editorial">Editorial</Label>
            <TextInput
              id="Editorial"
              name="Editorial"
              type="text"
              value={searchFilters.Editorial}
              onChange={handleInputChange}
              placeholder="Ingrese la editorial"
            />
          </div>
          <div>
            <Label htmlFor="ISBN">ISBN</Label>
            <TextInput
              id="ISBN"
              name="ISBN"
              type="text"
              value={searchFilters.ISBN}
              onChange={handleInputChange}
              placeholder="Ingrese el ISBN"
            />
          </div>
          <Button type="submit">Buscar</Button>
        </form>
        <div className="w-3/4 p-4">
          {filteredBooks && filteredBooks.length > 0 ? (
            <>
              <BookList books={filteredBooks} />
              <BookPagination page={page} setPage={setPage} limit={limit} />
            </>
          ) : (
            <Alert color="warning" rounded>
              No se encontraron resultados para los filtros aplicados.
            </Alert>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdvancedSearch;




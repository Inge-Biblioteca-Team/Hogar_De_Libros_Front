import { Breadcrumb } from "flowbite-react";

import {
  HomeRoute,
  ManageRoute,
  BooksRoute,
  CurrentRoute,
} from "../components/Redirections";
import { Book } from "../type/Book";
import { GetByBookCode } from "../services/SvBooks";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import FormEditBook from "../components/Forms/FomEditBook";
const EditBookInformation = () => {
  const { BookCode } = useParams<{ BookCode?: string }>();

  const { data: book } = useQuery<Book, Error>(
    ["bookObjetive", BookCode],
    () => {
      if (!BookCode) {
        throw new Error("Error No existe ID de libro para buscar");
      }
      return GetByBookCode(BookCode);
    },
    {
      staleTime: 60000,
    }
  );

  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeRoute />
        <ManageRoute />
        <BooksRoute />
        <CurrentRoute CurrentPage={"Editar"} />
        {book?.Title ? <CurrentRoute CurrentPage={book?.Title} /> : null}
      </Breadcrumb>
      {book && <FormEditBook book={book} category="books" />}
    </>
  );
};

export default EditBookInformation;

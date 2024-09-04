import { Breadcrumb } from "flowbite-react";
import {
  HomeRoute,
  ManageRoute,
  CurrentRoute,
} from "../../components/Redirections";
import { Book } from "../../type/Book";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { ManageCrumbObj } from "../../../../components/BreadCrumb";
import FormEditBook from "../../components/Forms/FomEditBook";
import { GetChildrenBByBookCode } from "../../services/SvChildBooks";
const EditCBookInformation = () => {
  const { BookCode } = useParams<{ BookCode?: string }>();

  const { data: book } = useQuery<Book, Error>(
    ["bookObjetive", BookCode],
    () => {
      if (!BookCode) {
        throw new Error("Error No existe ID de libro para buscar");
      }
      return GetChildrenBByBookCode(BookCode);
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
        <ManageCrumbObj Objetive="Libros Infantiles" LK="LibrosI" />
        <CurrentRoute CurrentPage={"Editar"} />
        {book?.Title ? <CurrentRoute CurrentPage={book?.Title} /> : null}
      </Breadcrumb>
      {book && <FormEditBook book={book} category="book-children"/>}
    </>
  );
};

export default EditCBookInformation;

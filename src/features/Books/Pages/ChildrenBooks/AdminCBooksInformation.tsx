import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { GetByBookCode } from "../../services/SvBooks";
import { Book } from "../../type/Book";
import { Breadcrumb } from "flowbite-react";
import { HomeCrumb, LastCrumb, ManageCrumb, ManageCrumbObj } from "../../../../components/BreadCrumb";
import BooksBodyInfo from "../../components/Forms/BooksBodyInfo";

const AdminCBooksInformation = () => {
  const { BookCode } = useParams<{ BookCode?: string }>();

  const { data: book } = useQuery<Book, Error>(
    ["OneBook", BookCode],
    () => {
      if (!BookCode) {
        throw new Error("Error No existe ID de libro para buscar");
      }
      return GetByBookCode(BookCode);
    },
    { enabled: !!BookCode, staleTime: 60000 }
  );

  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeCrumb/>
        <ManageCrumb/>
        <ManageCrumbObj Objetive="Libros Infantiles" LK="LibrosI"/>
        {book?.Title && <LastCrumb CurrentPage={book?.Title} />}
      </Breadcrumb>
        {book &&<BooksBodyInfo book={book} />}
    </>
  );
};

export default AdminCBooksInformation;

import { Table } from "flowbite-react";
import BookChildrenRow from "./BookRow";
import { Catalog } from "../Types/BooksTypes";
import NoResults from "../../../components/NoResults";

const BookTable = ({ catalog }: { catalog: Catalog }) => {
  return (
    <>
      {catalog.count > 0 ? (
        <Table className=" w-full text-center min-h-[30rem] " hoverable>
          <Table.Head>
            <Table.HeadCell>Título</Table.HeadCell>
            <Table.HeadCell className=" max-sm:hidden" >Autor</Table.HeadCell>
            <Table.HeadCell className=" max-sm:hidden" >ISBN</Table.HeadCell>
            <Table.HeadCell className="md:hidden max-sm:hidden">Código De Signatura</Table.HeadCell>
            <Table.HeadCell className="md:hidden max-sm:hidden" >Código De inscripción</Table.HeadCell>
            <Table.HeadCell>Estado</Table.HeadCell>
            <Table.HeadCell className=" max-sm:hidden"></Table.HeadCell>
          </Table.Head>
          <Table.Body className=" h-96">
            {catalog.data.map((Book) => (
              <BookChildrenRow book={Book} key={'Bo'+Book.BookCode} />
            ))}
          </Table.Body>
        </Table>
      ) : (
        <NoResults />
      )}
    </>
  );
};

export default BookTable;

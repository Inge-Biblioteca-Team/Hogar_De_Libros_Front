import { Table } from "flowbite-react";
import BookChildrenRow from "./BookChildrenRow";
import { Catalog } from "../Types/BooksChildrensTypes";
import NoResults from "../../../components/NoResults";

const BookChildrenTable = ({ catalog }: { catalog: Catalog }) => {
  return (
    <>
      {catalog.count > 0 ? (
        <Table className=" text-center min-h-[30rem]" hoverable>
          <Table.Head>
            <Table.HeadCell>Título</Table.HeadCell>
            <Table.HeadCell className=" max-sm:hidden">Autor</Table.HeadCell>
            <Table.HeadCell className=" max-sm:hidden">ISBN</Table.HeadCell>
            <Table.HeadCell className=" max-sm:hidden">Código De Signatura</Table.HeadCell>
            <Table.HeadCell className=" max-sm:hidden">Código de inscripción</Table.HeadCell>
            <Table.HeadCell>Estado</Table.HeadCell>
            <Table.HeadCell className=" max-sm:hidden"></Table.HeadCell>
          </Table.Head>
          <Table.Body className="h-96">
            {catalog.data.map((Book) => (
              <BookChildrenRow book={Book} key={'BK'+Book.BookCode} />
            ))}
          </Table.Body>
        </Table>
      ) : (
        <NoResults />
      )}
    </>
  );
};

export default BookChildrenTable;

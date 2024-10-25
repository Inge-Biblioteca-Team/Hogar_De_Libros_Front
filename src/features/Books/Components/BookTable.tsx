import { Table } from "flowbite-react";
import BookChildrenRow from "./BookRow";
import { Catalog } from "../Types/BooksTypes";
import NoResults from "../../../components/NoResults";

const BookTable = ({ catalog }: { catalog: Catalog }) => {
  return (
    <>
      {catalog.count > 0 ? (
        <Table className=" text-center" hoverable style={{height:"35rem"}}>
          <Table.Head>
            <Table.HeadCell>Título</Table.HeadCell>
            <Table.HeadCell>Autor</Table.HeadCell>
            <Table.HeadCell>ISBN</Table.HeadCell>
            <Table.HeadCell>Código De Signatura</Table.HeadCell>
            <Table.HeadCell>Código De inscripción</Table.HeadCell>
            <Table.HeadCell>Estado</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Head>
          <Table.Body className="h-96">
            {catalog.data.map((Book) => (
              <BookChildrenRow book={Book} key={Book.BookCode} />
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

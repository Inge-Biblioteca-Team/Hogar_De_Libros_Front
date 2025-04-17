import { Table } from "flowbite-react";
import BookChildrenRow from "./BookChildrenRow";
import { Catalog } from "../Types/BooksChildrensTypes";

const BookChildrenTable = ({ catalog }: { catalog: Catalog }) => {
  return (
    <Table
      hoverable
      className="text-center min-h-[30rem] text-black dark:text-white"
    >
      <Table.Head className="dark:[&>tr>th]:!bg-neutral-800 dark:text-white">
        <Table.HeadCell>Título</Table.HeadCell>
        <Table.HeadCell>Autor</Table.HeadCell>
        <Table.HeadCell className=" max-lg:hidden">ISBN</Table.HeadCell>
        <Table.HeadCell className=" max-lg:hidden">Código De Signatura</Table.HeadCell>
        <Table.HeadCell className=" max-md:hidden">Código de inscripción</Table.HeadCell>
        <Table.HeadCell>Estado</Table.HeadCell>
        <Table.HeadCell className=" max-md:hidden"></Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {catalog.data.map((Book) => (
          <BookChildrenRow book={Book} key={"BK" + Book.BookCode} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default BookChildrenTable;

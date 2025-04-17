import { Table } from "flowbite-react";
import BookChildrenRow from "./BookRow";
import { Catalog } from "../Types/BooksTypes";

const BookTable = ({ catalog }: { catalog: Catalog }) => {
  return (
    <>
      <Table
        hoverable
        className="text-center min-h-[30rem] text-black dark:text-white"
      >
        <Table.Head className="dark:[&>tr>th]:!bg-neutral-800 dark:text-white">
          <Table.HeadCell className="">Título</Table.HeadCell>
          <Table.HeadCell className="">Autor</Table.HeadCell>
          <Table.HeadCell className=" max-lg:hidden">ISBN</Table.HeadCell>
          <Table.HeadCell className=" max-lg:hidden">
            Código De Signatura
          </Table.HeadCell>
          <Table.HeadCell className=" max-md:hidden">
            Código De inscripción
          </Table.HeadCell>
          <Table.HeadCell className="">Estado</Table.HeadCell>
          <Table.HeadCell className=" max-md:hidden"></Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {catalog.data.map((Book) => (
            <BookChildrenRow book={Book} key={"Bo" + Book.BookCode} />
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default BookTable;

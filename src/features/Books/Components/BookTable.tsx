import { Table } from "flowbite-react";
import BookChildrenRow from "./BookRow";
import { Catalog } from "../Types/BooksTypes";
import NoResults from "../../../components/NoResults";

const BookTable = ({ catalog }: { catalog: Catalog }) => {
  return (
    <>
      {catalog.count > 0 ? (
        <Table className=" w-full text-center min-h-[30rem] " hoverable>
          <Table.Head className="dark:bg-neutral-900 dark:text-white">
            <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 xl:w-1/6">Título</Table.HeadCell>
            <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 xl:w-1/6 max-sm:hidden" >Autor</Table.HeadCell>
            <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 xl:w-1/6 max-sm:hidden" >ISBN</Table.HeadCell>
            <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 2xl:table-cell xl:w-1/6 xl:table-cell md:hidden max-sm:hidden">Código De Signatura</Table.HeadCell>
            <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 2xl:table-cell  xl:w-1/6 xl:table-cell md:hidden max-sm:hidden" >Código De inscripción</Table.HeadCell>
            <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 xl:w-1/6  ">Estado</Table.HeadCell>
            <Table.HeadCell className="dark:bg-neutral-900"></Table.HeadCell>
          </Table.Head>
          <Table.Body className="dark:bg-[#2d2d2d] dark:text-white h-96">
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

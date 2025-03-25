import { Table } from "flowbite-react";
import BookChildrenRow from "./BookChildrenRow";
import { Catalog } from "../Types/BooksChildrensTypes";
import NoResults from "../../../components/NoResults";

const BookChildrenTable = ({ catalog }: { catalog: Catalog }) => {
  return (
    <>
      {catalog.count > 0 ? (
        <Table className=" text-center min-h-[30rem] " hoverable>
          <Table.Head className="dark:bg-neutral-900 dark:text-white">
            <Table.HeadCell className="dark:bg-neutral-900 xl:h-1/6 2xl:w-1/6">Título</Table.HeadCell>
            <Table.HeadCell className="dark:bg-neutral-900 xl:h-1/6 2xl:w-1/6 max-sm:hidden">Autor</Table.HeadCell>
            <Table.HeadCell className="dark:bg-neutral-900 xl:h-1/6 2xl:w-1/6 max-sm:hidden">ISBN</Table.HeadCell>
            <Table.HeadCell className="dark:bg-neutral-900 xl:h-1/6 xl:table-cell 2xl:w-1/6 2xl:table-cell md:hidden max-sm:hidden">Código De Signatura</Table.HeadCell>
            <Table.HeadCell className="dark:bg-neutral-900 xl:h-1/6 xl:table-cell 2xl:w-1/6 2xl:table-cell md:hidden max-sm:hidden">Código de inscripción</Table.HeadCell>
            <Table.HeadCell className="dark:bg-neutral-900 xl:h-1/6 2xl:w-1/6 2xl:table-cell">Estado</Table.HeadCell>
            <Table.HeadCell className="dark:bg-neutral-900 xl:h-1/6 2xl:w-1/6 md:hidden max-sm:hidden"></Table.HeadCell>
          </Table.Head>
          <Table.Body className="dark:bg-[#2d2d2d] dark:text-white h-96">
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

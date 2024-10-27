import { Table } from "flowbite-react";
import { Book } from "../Types/BooksChildrensTypes";
import AccionsBTN from "../../../components/BTNS/AccionsBTN";
import { useState } from "react";
import MDDownBook from "./Modals/MDDownBook";
import MDEditChildrenBook from "./Modals/MDEditChildrenBook";
import ViewChildrenBook from "./Modals/ViewChildrenBook";

const BookChildrenRow = ({ book }: { book: Book }) => {
  const [openV, setOpenV] = useState<boolean>(false);
  const [openD, setOpenD] = useState<boolean>(false);
  const [openE, setOpenE] = useState<boolean>(false);

  return (
    <>
      <Table.Row>
      <Table.Cell>
          <div className=" line-clamp-2">{book.Title}</div>
        </Table.Cell>
        <Table.Cell className=" max-sm:hidden">
          <div className=" line-clamp-2">{book.Author}</div>
        </Table.Cell>
        <Table.Cell className=" max-sm:hidden">{book.ISBN}</Table.Cell>
        <Table.Cell>
          {book.SignatureCode ? book.SignatureCode : "N/A"}
        </Table.Cell>
        <Table.Cell className=" max-sm:hidden">
          {book.InscriptionCode ? book.InscriptionCode : "N/A"}{" "}
        </Table.Cell>
        <Table.Cell>{book.Status ? "Disponible" : "Baja"}</Table.Cell>
        <Table.Cell>
          <AccionsBTN
            Status={book.Status}
            setOpenS={setOpenV}
            setOpenE={setOpenE}
            setOpenD={setOpenD}
          />
        </Table.Cell>
      </Table.Row>
      <MDDownBook open={openD} setOpen={setOpenD} Id={book.BookCode} />
      <MDEditChildrenBook open={openE} setOpen={setOpenE} book={book} />
      <ViewChildrenBook open={openV} setOpen={setOpenV} book={book} />
    </>
  );
};

export default BookChildrenRow;

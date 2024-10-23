import { Table } from "flowbite-react";
import { Book } from "../Types/BooksTypes";
import AccionsBTN from "../../../components/BTNS/AccionsBTN";
import { useState } from "react";
import MDDownBook from "./Modals/MDDownBook";
import MDEditChildrenBook from "./Modals/MDEditBook";
import ViewChildrenBook from "./Modals/ViewBook";

const BookRow = ({ book }: { book: Book }) => {
  const [openV, setOpenV] = useState<boolean>(false);
  const [openD, setOpenD] = useState<boolean>(false);
  const [openE, setOpenE] = useState<boolean>(false);

  return (
    <>
      <Table.Row>
        <Table.Cell>{book.Title}</Table.Cell>
        <Table.Cell>{book.Author}</Table.Cell>
        <Table.Cell>{book.ISBN}</Table.Cell>
        <Table.Cell>
          {book.SignatureCode ? book.SignatureCode : "N/A"}
        </Table.Cell>
        <Table.Cell>
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

export default BookRow;

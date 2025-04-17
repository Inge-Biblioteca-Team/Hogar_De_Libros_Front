import { Table } from "flowbite-react";
import { Book } from "../Types/BooksTypes";
import { useState } from "react";
import MDDownBook from "./Modals/MDDownBook";
import MDEditChildrenBook from "./Modals/MDEditBook";
import ViewChildrenBook from "./Modals/ViewBook";
import BTNAccions from "../../../components/DesktopComponents/BTNAccions";
import MobilePopOverOptions from "../../../components/MobileComponents/MobilePopOverOptions";

const BookRow = ({ book }: { book: Book }) => {
  const [openV, setOpenV] = useState<boolean>(false);
  const [openD, setOpenD] = useState<boolean>(false);
  const [openE, setOpenE] = useState<boolean>(false);
  const [popoverVisible, setPopoverVisible] = useState(false);

  const handleRowClick = () => {
    setPopoverVisible(true);
  };
  return (
    <>
      <Table.Row
        className="dark:border-zinc-700 dark:bg-[#2d2d2d]"
        onClick={handleRowClick}
      >
        <Table.Cell>
          <div className=" line-clamp-2">{book.Title}</div>
        </Table.Cell>
        <Table.Cell>
          <MobilePopOverOptions
            openTrigger={popoverVisible}
            setopenTrigger={setPopoverVisible}
            setOpen1={setOpenV}
            setOpen2={setOpenE}
            setOpen3={setOpenD}
            status={book.Status}
            text={book.Author}
          />
        </Table.Cell>
        <Table.Cell className="max-lg:hidden">{book.ISBN}</Table.Cell>
        <Table.Cell className="max-lg:hidden">
          {book.signatureCode ? book.signatureCode : "N/A"}
        </Table.Cell>
        <Table.Cell className="max-md:hidden">
          {book.InscriptionCode ? book.InscriptionCode : "N/A"}{" "}
        </Table.Cell>
        <Table.Cell className="">
          {book.Status ? "Disponible" : "Baja"}
        </Table.Cell>
        <Table.Cell className="max-md:hidden">
          <BTNAccions
            setOpen1={setOpenV}
            setOpen2={setOpenE}
            setOpen3={setOpenD}
            status={book.Status}
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

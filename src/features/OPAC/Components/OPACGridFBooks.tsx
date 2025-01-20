
import { Catalog } from "../../Books/Types/BooksTypes";
import OPACBookCard from "./OPACBookCard";

const OPACGridFBooks = ({ colection }: { colection: Catalog }) => {
  return (
    <>
      <div className=" flex flex-wrap gap-4 items-center justify-center">
        {colection.data.map((book) => (
          <OPACBookCard key={"Book" + book.BookCode} book={book} />
        ))}
      </div>
    </>
  );
};

export default OPACGridFBooks;

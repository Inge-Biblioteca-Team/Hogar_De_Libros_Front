
import { Catalog } from "../../Types/BooksTypes";
import ListCard from "./ListCard";

const ColectionList = ({ colection }: { colection: Catalog }) => {
  return (
    <>
      <div className=" flex flex-col w-full gap-3">
        {colection.data.map((book) => (
          <ListCard key={book.BookCode} book={book} />
        ))}
      </div>
    </>
  );
};

export default ColectionList;

import { Catalog } from "../../Types/BooksTypes";
import GridCard from "./GridCard";

const ColectionGrid = ({ colection, inf }: { colection: Catalog, inf:boolean }) => {
  return (
    <>
      <div className=" flex flex-wrap gap-4 items-center justify-center">
        {colection.data.map((book) => (
          <GridCard key={'Book'+book.BookCode} book={book} inf={inf} />
        ))}
      </div>
    </>
  );
};

export default ColectionGrid;

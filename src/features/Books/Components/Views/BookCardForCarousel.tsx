import { Book } from "../../Types/BooksTypes";

const BookCardForCarousel = ({ Book }: { Book: Book }) => {
  return (
    <div className=" w-full gap-8 justify-between bg-white flex rounded-md h-full space-x-2 ">
      <img src={Book.Cover} alt="" className="w-2/4" />
      <span className="!bg-white w-3/4 m-3">
        <h3 className="text-2xl font-bold max-md:text-base mr-16 max-md:line-clamp-4">
          {Book.Title} {Book.Author && "escrito por"}
        </h3>
        <div className=" text-lg max-md:text-sm mr-16">
          <strong className="max-md:line-clamp-3 ">{Book.Author}</strong>
          <p className="text-gray-600">
            <span className="!bg-white">Editorial: {Book.Editorial}</span>
            <br />
            {Book.PublishedYear !== 0 && (
              <>
                <span className="!bg-white">
                  Año de publicación: {Book.PublishedYear}
                </span>
                <br />
              </>
            )}
            <span className="!bg-white">Categoria: {Book.ShelfCategory}</span>
            <br />
            {Book.ISBN && <span>ISBN: {Book.ISBN} </span>}
          </p>
        </div>
      </span>
    </div>
  );
};

export default BookCardForCarousel;

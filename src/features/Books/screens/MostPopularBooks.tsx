import BtnShowMore from "../components/BtnShowMore";
import { usePopularBooks } from "../hooks/usePopularBooks";

const MostPopularBooks = () => {
  const { popularBooks } = usePopularBooks();

  return (
    <>
      <section className=" w-full flex flex-col items-center justify-center pt-9">
        <h2 className=" text-3xl">Libros mas solicitados</h2>
        <div className="flex w-full gap-5 items-center justify-center">
          {popularBooks()}
        </div>
        <BtnShowMore/>
      </section>
    </>
  );
};

export default MostPopularBooks;

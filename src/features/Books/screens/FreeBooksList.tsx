import BtnShowMore from "../components/BtnShowMore";
import { useFreeBooks } from "../hooks/useFreeBooks";

const FreeBooksList = () => {
  const { FreeBooks } = useFreeBooks();

  return (
    <>
      <section className=" w-full flex flex-col items-center justify-center pt-9">
        <h2 className=" text-3xl">Libros De Regalo</h2>
        <div className="flex w-full gap-5 items-center justify-center">
          {FreeBooks()}
        </div>
        <BtnShowMore/>
      </section>
    </>
  );
};

export default FreeBooksList;

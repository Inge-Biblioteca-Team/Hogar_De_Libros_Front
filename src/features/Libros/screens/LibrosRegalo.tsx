import BotonVerMas from "../../../components/BotonVerMas";
import { useLibrosRegalo } from "../hooks/useLibrosRegalo";

const LibrosRegalo = () => {
  const { LibrosXRegalo } = useLibrosRegalo();

  return (
    <>
      <section className=" w-full flex flex-col items-center justify-center pt-9">
        <h2 className=" text-3xl">Libros De Regalo</h2>
        <div className="flex w-full gap-5 items-center justify-center">
          {LibrosXRegalo()}
        </div>
        <BotonVerMas/>
      </section>
    </>
  );
};

export default LibrosRegalo;

import BotonVerMas from "../../../components/BotonVerMas";
import { useLibrosRelevantes } from "../hooks/useLibrosRelevantes";

const LibrosMasPrestados = () => {
  const { LibrosRelevantes } = useLibrosRelevantes();

  return (
    <>
      <section className=" w-full flex flex-col items-center justify-center pt-9">
        <h2 className=" text-3xl">Libros mas solicitados</h2>
        <div className="flex w-full gap-5 items-center justify-center">
          {LibrosRelevantes()}
        </div>
        <BotonVerMas/>
      </section>
    </>
  );
};

export default LibrosMasPrestados;

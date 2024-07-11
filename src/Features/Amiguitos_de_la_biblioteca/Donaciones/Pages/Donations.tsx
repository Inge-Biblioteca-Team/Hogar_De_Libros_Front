import DonationsForm from "../Components/Formulario";
import Requeriments from "../Components/Requisitos";


function Donations() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl">Donaciones</h1>
        <h2 className="text-lg mt-5">¿Qué son las donaciones?</h2>
        <div className=" mt-5 max-w-md mx-auto">
          <p className="text-center">
            Como manera de ayuda hacia la biblioteca se podrán hacer donaciones
            exclusivamente de libros para que la comunidad siempre tenga nuevas
            opciones de lectura para su aprendizaje. Los libros que serán
            donados tendrán que cumplir con ciertos requisitos para poder ser
            aceptados.
          </p>
        </div>
        <div className="flex justify-between w-full max-w-4xl mt-6  items-start">
          <div className="w-1/2  pr-4">
            <Requeriments />
          </div>
          <div className="w-1/2 pl-4">
            <DonationsForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Donations;

import BtnMoreInfo from "./BtnMoreInfo";
import GeneralComputerInfo from "./GeneralComputerInfo";

const GeneralInfo = () => {
  const computerCount = 20; //Se cambia por un conteo de los equipos inventariados, con un estado activo

  return (
    <div className=" flex gap-5 w-4/5">
      <GeneralComputerInfo />
      <div className="w-4/5 flex justify-center flex-col">
        <h3>Acceso a Computadoras</h3>
        <p>
          La biblioteca cuenta con {computerCount} computadoras las cuales están
          a disposición de los usuarios de la biblioteca.
          <br />
          Si necesitas hacer uso de estas, puedes acercarte a la biblioteca y
          preguntar sobre disponibilidad y requerimientos, o puedes acceder en
          línea dando click en el siguiente botón para ver los términos y
          condiciones del uso de estos equipos, así como su disponibilidad en
          tiempo real.
        </p>
        <BtnMoreInfo />
      </div>
    </div>
  );
};

export default GeneralInfo;

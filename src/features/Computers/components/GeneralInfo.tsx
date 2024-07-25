import BtnMoreInfo from "./BtnMoreInfo";
import GeneralComputerInfo from "./GeneralComputerInfo";

const GeneralInfo = () => {
  const computerCount = 20; //Se cambia por un conteo de los equipos inventariados, con un estado activo

  return (
    <div className=" flex gap-5 w-4/5 ">
      <GeneralComputerInfo />
      <div className="w-4/5 flex justify-center flex-col max-sm:text-sm max-sm:w-full max-sm:text-center max-sm:items-center">
        <strong>Acceso a Computadoras</strong>
        <p>
          La biblioteca cuenta con <strong>{computerCount}</strong> computadoras las cuales están
          a disposición de los usuarios de la biblioteca.
          <span className=" hidden max-sm:block">Los equipos cuentan con: <strong>Firma Digital,Acceso Gratiuto a Internet, Puertos USB y paquete Microsoft completo</strong> </span>
          <br />
          Si necesitas hacer uso de estas, puedes acercarte a la biblioteca y
          preguntar sobre disponibilidad y requerimientos, o puedes acceder en
          línea dando click en el siguiente botón para ver los términos y
          condiciones del uso de estos equipos, así como su <strong>
          disponibilidad en tiempo real.</strong>
        </p>
        <BtnMoreInfo />
      </div>
    </div>
  );
};

export default GeneralInfo;

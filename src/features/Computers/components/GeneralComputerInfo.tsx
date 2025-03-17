import { Card } from "flowbite-react";

const GeneralComputerInfo = () => {
  return (
    <Card className="m-4 h-60 md:h-full lg:h-full lg:m-0 max-lg:w-full max-sm:m-0  ">
      <figure className=" max-lg:w-full ">
        <img
          src="https://informaciondeinformatica308.wordpress.com/wp-content/uploads/2013/10/computadora-de-escritorio.jpg"
          alt=""
          className="h-28 md:h-48 w-full lg:h-36 "
        />
        <figcaption>
          <p className=" text-xs sm:text-sm">Características del equipo:</p>
          <ul className=" list-inside list-disc ml-5 text-xs sm:text-sm">
            <li>Acceso a Internet</li>
            <li>Paquete Microsoft 365</li>
            <li>Periféricos: Monitor, teclado y mouse</li>
            <li>Puertos USB y Salida de audio 3.5mm</li>
            <li>Firma Digital</li>
          </ul>
        </figcaption>
      </figure>
    </Card>
  );
};

export default GeneralComputerInfo;

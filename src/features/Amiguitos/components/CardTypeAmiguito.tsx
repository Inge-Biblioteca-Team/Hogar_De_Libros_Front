import { useState } from "react";
import { Button } from "flowbite-react";
import FormColaborador from "../../Collaborators/Components/Modals/FormColaborador";
import MainFormAmigos from "./Forms/MainFormAmigos";
import FormDonaciones from "../../Donations/Components/Modals/FormDonaciones";

const CardTypeAmiguito = () => {
  const [isOpenD, setIsOpenD] = useState(false);
  const [isOpenA, setIsOpenA] = useState(false);
  const [isOpenC, setIsOpenC] = useState(false);

  return (
    <>
     <figure className="rounded-md xl:h-full 2xl:h-full bg-white w-full shadow-lg flex flex-col justify-center items-center pb-5 max-sm:p-0 lg:h-[450px]">
        <img
          className="h-40 md:w-full md:h-2/4 w-80 mb-2 border-t border-transparent rounded-t-md object-cover max-sm:h-32 max-sm:rounded-md"
          src={
            "https://i0.wp.com/asociaciones.org/wp-content/uploads/2024/03/donacion-web.jpg"
          }
          alt={"Donaciones"}
        />
        <figcaption
          className="text-lg break-words max-w-80 px-4 h-full flex flex-col items-center justify-between"
        >
          <strong className="mb-1 lg:mb-0 max-sm:text-sm lg:max-sm:min-w-20">
            {"Donaciones"}
          </strong>
          <p className="max-sm:text-xs mb-2 max-sm:block lg:max-sm:hidden text-center">
            <span>
              {"¿Tienes libros que ya no utilizas? Puedes donarlos a la biblioteca para que otra persona pueda compartir tu pasión por la lectura. Más información aquí abajo."}
            </span>
            <br />
          </p>
          <Button className="md:w-32" color={"blue"} onClick={() => setIsOpenD(true)}>
            Donar
          </Button>
        </figcaption>
      </figure>

      <figure className="rounded-md xl:h-full 2xl:h-full bg-white w-full shadow-lg flex flex-col justify-center items-center pb-5 max-sm:p-0 lg:h-[450px]">
        <img
          className="h-40 md:w-full md:h-2/4 w-80 mb-2 border-t border-transparent rounded-t-md object-cover max-sm:h-32 max-sm:rounded-md"
          src={
            "https://universoabierto.org/wp-content/uploads/2019/05/7464d163b1c27c4d75f62ea6c6c0982e.jpg?w=625"
          }
          alt={"Amigos de la biblioteca"}
        />
        <figcaption
          className="text-lg break-words max-w-80 px-4 md:h-2/4 flex flex-col items-center justify-between"
        >
          <strong className="mb-1 lg:mb-0 max-sm:text-sm lg:max-sm:min-w-20">
            {"Amigos de la biblioteca"}
          </strong>
          <p className="max-sm:text-xs mb-2 max-sm:block lg:max-sm:hidden text-center">
            <span>
              {"Un programa de voluntariado dedicado a apoyar las actividades y servicios de nuestra biblioteca local. Nuestra misión es promover la lectura recreativa y la cultura a través de la participación comunitaria y el apoyo voluntario."}
            </span>
            <br />
          </p>
          <Button className="md:w-32" color={"blue"} onClick={() => setIsOpenA(true)}>
            Únete ahora
          </Button>
        </figcaption>
      </figure>

      <figure className="rounded-md xl:h-full 2xl:h-full bg-white w-full shadow-lg flex flex-col justify-center items-center pb-5 max-sm:p-0 lg:h-[450px]">
        <img
          className="h-40 w-80 md:w-full md:h-3/4 mb-2 border-t border-transparent rounded-t-md object-cover max-sm:h-32 max-sm:rounded-md"
          src={
            "https://www.comunidadbaratz.com/wp-content/uploads/2022/02/Agenda-de-actividades-en-AbsysNet.jpg"
          }
          alt={"Colaboraciones"}
        />
        <figcaption
          className="text-lg break-words max-w-80 px-4 h-full flex flex-col items-center justify-between"
        >
          <strong className="mb-1 lg:mb-0 max-sm:text-sm lg:max-sm:min-w-20">
            {"Colaboraciones"}
          </strong>
          <p className="max-sm:text-xs mb-2 max-sm:block lg:max-sm:hidden text-center">
            <span>
              {"¿Tienes alguna actividad en mente pero no sabes cómo ponerla en marcha? Puedes comunicarte con nosotros para realizar una propuesta. Será un gusto colaborar contigo. También recibimos pasantes y estudiantes que necesitan horas de trabajo comunal."}
            </span>
            <br />
          </p>
          <Button className="md:w-32" color={"blue"} onClick={() => setIsOpenC(true)}>
            Participar
          </Button>
        </figcaption>
      </figure>
      
      <FormColaborador open={isOpenC} setOpen={setIsOpenC} />
      <MainFormAmigos open={isOpenA} setOpen={setIsOpenA} />
      <FormDonaciones open={isOpenD} setOpen={setIsOpenD} />
    </>
  );
};

export default CardTypeAmiguito;

import { useState } from "react";
import { Button } from "flowbite-react";
import FormColaborador from "../../Collaborators/Components/Modals/FormColaborador";
import MainFormAmigos from "./Forms/MainFormAmigos";
import FormDonaciones from "../../Donations/Components/Modals/FormDonaciones";
import donation from "/src/Assets/donation.webp"
import joven_libros from "/src/Assets/joven_libros.webp"
import libros_studio from "/src/Assets/libros_studio.webp"


const CardTypeAmiguito = () => {
  const [isOpenD, setIsOpenD] = useState(false);
  const [isOpenA, setIsOpenA] = useState(false);
  const [isOpenC, setIsOpenC] = useState(false);

  return (
    <>
      <div className="dark:bg-[#2d2d2d] bg-white rounded-md text-lg">
        <img
          className="h-[20rem] w-full rounded-t-md"
          src={donation}
          alt={"Donaciones"}
        />
        <div className=" m-3 text-center flex items-center justify-between flex-col min-h-[30vh]">
          <p>
            <strong className=" text-xl">{"Donaciones"}</strong>
            <br />
            <span>
              {
                "¿Tienes libros que ya no utilizas? Puedes donarlos a la biblioteca para que otra persona pueda compartir tu pasión por la lectura. Más información aquí abajo."
              }
            </span>
          </p>
          <Button className="dark:bg-neutral-900 dark:hover:bg-neutral-800" color={"blue"} onClick={() => setIsOpenD(true)}>
            Donar
          </Button>
        </div>
      </div>

      <div className="dark:bg-[#2d2d2d] bg-white rounded-md text-lg">
        <img
          className="h-[20rem] w-full rounded-t-md"
          src={joven_libros}
          alt={"Amigos de la biblioteca"}
        />
        <div className=" m-3 text-center flex items-center justify-between flex-col min-h-[30vh]">
          <p>
            <strong className=" text-xl">{"Amigos de la biblioteca"}</strong>
            <br />
            <span>
              {
                "¿Tienes alguna actividad en mente pero no sabes cómo ponerla en marcha? Puedes comunicarte con nosotros para realizar una propuesta. Será un gusto colaborar contigo. También recibimos pasantes y estudiantes que necesitan horas de trabajo comunal."
              }
            </span>
          </p>
          <Button className="dark:bg-neutral-900 dark:hover:bg-neutral-800" color={"blue"} onClick={() => setIsOpenA(true)}>
            Únete ahora
          </Button>
        </div>
      </div>

      <div className="dark:bg-[#2d2d2d] bg-white rounded-md text-lg">
        <img
          className="h-[20rem] w-full rounded-t-md"
          src={libros_studio}
          alt={"Colaboraciones"}
        />
        <div className=" m-3 text-center flex items-center justify-between flex-col min-h-[30vh]">
          <p>
            <strong className=" text-xl">{"Colaboraciones"}</strong>
            <br />
            <span>
              {
                "Un programa de voluntariado dedicado a apoyar las actividades y servicios de nuestra biblioteca local. Nuestra misión es promover la lectura recreativa y la cultura a través de la participación comunitaria y el apoyo voluntario."
              }
            </span>
          </p>
          <Button className="dark:bg-neutral-900 dark:hover:bg-neutral-800" color={"blue"} onClick={() => setIsOpenC(true)}>
            Participar
          </Button>
        </div>
      </div>
      <FormColaborador open={isOpenC} setOpen={setIsOpenC} />
      <MainFormAmigos open={isOpenA} setOpen={setIsOpenA} />
      <FormDonaciones open={isOpenD} setOpen={setIsOpenD} />
    </>
  );
};

export default CardTypeAmiguito;

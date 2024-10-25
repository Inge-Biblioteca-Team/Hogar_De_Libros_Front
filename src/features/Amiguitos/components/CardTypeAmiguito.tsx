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
      <figure className="rounded-md bg-white w-full shadow-lg flex flex-col justify-center items-center pb-3 max-sm:p-0">
        <img
          className="h-64 w-80 mb-2 border-t border-transparent rounded-t-md object-cover
                  max-sm:h-48 max-sm:rounded-md"
          src={
            "https://i0.wp.com/asociaciones.org/wp-content/uploads/2024/03/donacion-web.jpg"
          }
          alt={"Donaciones"}
        />
        <figcaption
          className=" text-lg break-words max-w-80 px-4 h-80
      max-sm:h-32 max-sm:justify-end flex flex-col items-baseline justify-between"
        >
          <strong className="max-sm:text-sm max-sm:min-w-20">
            {"Donaciones"}
          </strong>
          <p className=" max-sm:hidden">
            <span>
              {
                "¿Tienes libros que ya no utilizas? Podes dónalos a la biblioteca para que otra persona pueda compartir tu pasión por la lectura. Mas información aquí abajo."
              }
            </span>
            <br />
          </p>

          <Button color={"blue"} onClick={() => setIsOpenD(true)}>
            Participar
          </Button>
        </figcaption>
      </figure>
      <figure className=" bg-white rounded-md w-full shadow-lg flex flex-col justify-center items-center pb-3 max-sm:p-0">
        <img
          className="h-64 w-80 mb-2 border-t border-transparent rounded-t-md object-cover
                  max-sm:h-48 max-sm:rounded-md"
          src={
            "https://universoabierto.org/wp-content/uploads/2019/05/7464d163b1c27c4d75f62ea6c6c0982e.jpg?w=625"
          }
          alt={"Amigos de la biblioteca"}
        />
        <figcaption
          className=" text-lg break-words max-w-80 px-4 h-80
      max-sm:h-32 max-sm:justify-end flex flex-col items-baseline justify-between"
        >
          <strong className="max-sm:text-sm max-sm:min-w-20">
            {"Amigos de la biblioteca"}
          </strong>
          <p className=" max-sm:hidden">
            <span>
              Un programa de voluntariado dedicado a apoyar las actividades y
              servicios de nuestra biblioteca local. Nuestra misión es promover
              la lectura recreativa y la cultura a través de la participación
              comunitaria y el apoyo voluntario.
            </span>
            <br />
          </p>
          <Button color={"blue"} onClick={() => setIsOpenA(true)}>
            Participar
          </Button>
        </figcaption>
      </figure>
      <figure className="rounded-md bg-white w-full shadow-lg flex flex-col justify-center items-center pb-3 max-sm:p-0">
        <img
          className="h-64 w-80 mb-2 border-t border-transparent rounded-t-md object-cover
                  max-sm:h-48 max-sm:rounded-md"
          src={
            "https://www.comunidadbaratz.com/wp-content/uploads/2022/02/Agenda-de-actividades-en-AbsysNet.jpg"
          }
          alt={"Colaboraciones"}
        />
        <figcaption
          className=" text-lg break-words max-w-80 px-4 h-80
      max-sm:h-32 max-sm:justify-end flex flex-col items-baseline justify-between"
        >
          <strong className="max-sm:text-sm max-sm:min-w-20">
            {"Colaboraciones"}
          </strong>
          <p className=" max-sm:hidden">
            <span>
              {
                "¿Tienes alguna actividad en mente pero no sabes cómo ponerla en marcha? Puedes comunicarte con nosotros para realizar una propuesta. Será un gusto colaborar contigo. También recibimos pasantes y estudiantes que necesitan horas de trabajo comunal."
              }
            </span>
            <br />
          </p>
          <Button color={"blue"} onClick={() => setIsOpenC(true)}>
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

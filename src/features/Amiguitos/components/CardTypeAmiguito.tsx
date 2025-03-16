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
      <div className="bg-white rounded-md text-lg">
        <img
          className="h-[20rem] w-full rounded-t-md"
          src={
            "https://i0.wp.com/asociaciones.org/wp-content/uploads/2024/03/donacion-web.jpg"
          }
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
          <Button className="" color={"blue"} onClick={() => setIsOpenD(true)}>
            Donar
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-md text-lg">
        <img
          className="h-[20rem] w-full rounded-t-md"
          src={
            "https://universoabierto.org/wp-content/uploads/2019/05/7464d163b1c27c4d75f62ea6c6c0982e.jpg?w=625"
          }
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
          <Button color={"blue"} onClick={() => setIsOpenA(true)}>
            Únete ahora
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-md text-lg">
        <img
          className="h-[20rem] w-full rounded-t-md"
          src={
            "https://www.comunidadbaratz.com/wp-content/uploads/2022/02/Agenda-de-actividades-en-AbsysNet.jpg"
          }
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
          <Button color={"blue"} onClick={() => setIsOpenC(true)}>
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

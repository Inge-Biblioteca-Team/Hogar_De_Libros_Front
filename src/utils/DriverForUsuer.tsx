import { Sidebar } from "flowbite-react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { MdOutlineQuestionMark } from "react-icons/md";
import { useContext } from "react";
import UserContext from "../Context/UserContext/UserContext";

const DriverForUsuer = () => {
  const { currentUser } = useContext(UserContext);
  const userType = currentUser?.role;

  function startGuideShow() {
    userDrawnerDriver.drive();
  }
  const userDrawnerDriver = driver({
    showProgress: true,
    doneBtnText: "Finalizar",
    prevBtnText: "Anterior",
    nextBtnText: "Siguiente",
    steps: [
      {
        element: "#home",
        popover: {
          title: "Inicio",
          description:
            "Regresa a la página principal.",
        },
      },
      {
        element: "#full-catalog",
        popover: {
          title: "Catálogo completo",
          description:
            "Consulta todo el contenido bibliográfico disponible con varias opciones de búsqueda.",
        },
      },
      {
        element: "#event-schedule",
        popover: {
          title: "Cronograma de eventos",
          description:
            "Consulta los próximos eventos organizados por la biblioteca.",
        },
      },
      {
        element: "#course-schedule",
        popover: {
          title: "Cronograma de cursos",
          description: "Revisa los cursos disponibles y sus fechas.",
        },
      },
      {
        element: "#friends-collaborators",
        popover: {
          title: "Sé un amigo más",
          description: "Infórmate sobre cómo colaborar con la biblioteca.",
        },
      },
      {
        element: "#program-activities",
        popover: {
          title: "Actividades de programas",
          description:
            "Consulta las actividades activas de los distintos programas.",
        },
      },
      {
        element: "#computer-availability",
        popover: {
          title: "Disponibilidad de equipos",
          description:
            "Revisa qué equipos de cómputo están disponibles actualmente.",
        },
      },
      ...(userType &&
      (userType == "admin" ||
        userType === "creator" ||
        userType === "institucional")
        ? [
            {
              element: "#room-reservation",
              popover: {
                title: "Reserva de salas",
                description:
                  "Reserva salas para actividades, cursos u otras actividades.",
              },
            },
          ]
        : []),
    ],
  });
  return (
    <>
      <Sidebar.Item onClick={startGuideShow}>
        <span className=" flex items-center">
          Guía rápida <MdOutlineQuestionMark />
        </span>
      </Sidebar.Item>
    </>
  );
};

export default DriverForUsuer;

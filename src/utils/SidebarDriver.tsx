import { Sidebar } from "flowbite-react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { MdOutlineQuestionMark } from "react-icons/md";

const SidebarDriver = () => {
  function startGuideShow() {
    drawnerDriver.drive();
  }
  const drawnerDriver = driver({
    showProgress: true,
    doneBtnText: "Finalizar",
    prevBtnText: "Anterior",
    nextBtnText: "Siguiente",
    steps: [
      {
        element: "#USerMode",
        popover: {
          title: "Modo vista de usuario",
          description:
            "Visualiza la plataforma desde la perspectiva de un usuario externo, ideal para pruebas o revisiones.",
        },
      },      
      {
        element: "#inicio",
        popover: {
          title: "Inicio",
          description:
            "Regresa a la página principal donde se muestran las estadísticas generales y contadores del sistema.",
        },
      },
      {
        element: "#Advices",
        popover: {
          title: "Avisos importantes",
          description:
            "Gestiona los avisos de la biblioteca: crea, edita o elimina comunicados relevantes para los usuarios.",
        },
      },
      {
        element: "#loansOPT",
        popover: {
          title: "Préstamos y circulación",
          description:
            "Administra las solicitudes de préstamo de libros, equipos de cómputo y salas de estudio.",
        },
      },
      {
        element: "#loanHistory",
        popover: {
          title: "Historial de préstamos",
          description:
            "Consulta el historial completo de préstamos realizados por los usuarios, incluyendo libros, equipos y salas.",
        },
      },
      {
        element: "#Resources",
        popover: {
          title: "Gestión de recursos",
          description:
            "Agrega, edita o desactiva recursos disponibles como libros, mobiliario, artistas locales, salas y equipos de cómputo.",
        },
      },
      {
        element: "#services",
        popover: {
          title: "Servicios",
          description:
            "Gestiona cursos, eventos, programas educativos y otras actividades que ofrece la biblioteca.",
        },
      },
      {
        element: "#MgUsuer",
        popover: {
          title: "Gestión de usuarios",
          description:
            "Modifica información de usuarios, cambia roles, activa o desactiva cuentas según sea necesario.",
        },
      },
      {
        element: "#Colabs",
        popover: {
          title: "Colaboradores",
          description:
            "Administra la información y participación de entidades externas que colaboran con la biblioteca.",
        },
      },
      {
        element: "#Donaciones",
        popover: {
          title: "Donaciones",
          description:
            "Gestiona las solicitudes y el historial de donaciones recibidas por la biblioteca.",
        },
      },
      {
        element: "#friends",
        popover: {
          title: "Amigos de la biblioteca",
          description:
            "Administra la red de amigos de la biblioteca y mantén actualizada su información de contacto y participación.",
        },
      },
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

export default SidebarDriver;

import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { Button } from "flowbite-react";
import { MdOutlineQuestionMark } from "react-icons/md";

const Driver = () => {
  function startGuideShow() {
    driverObj.drive();
  }

  const driverObj = driver({
    showProgress: true,
    doneBtnText: "Finalizar",
    prevBtnText: "Anterior",
    nextBtnText: "Siguiente",
    steps: [
      {
        element: "#Stats",
        popover: {
          title: "Gráfico de estadísticas mensuales",
          description:
            "Aquí puedes ver estadísticas sobre el conteo de préstamos y actividades.",
        },
      },
      {
        element: "#CopyBTN",
        popover: {
          title: "Copiar gráfico",
          description:
            "Si necesitas compartir el gráfico, puedes copiarlo dando clic aquí.",
        },
      },
      {
        element: "#Counter",
        popover: {
          title: "Contadores",
          description:
            "Estos son los contadores de activos, préstamos y actividades.",
        },
      },
      {
        element: "#Counter > :nth-child(2)",
        popover: {
          title: "Contadores y submenu",
          description: "Cada contador cuenta con un submenu.",
        },
        onDeselected: () => {
          const button = document.querySelector(
            "#Counter > :nth-child(2) button"
          );
          if (button && button instanceof HTMLButtonElement) {
            button.click();
          }
        },
      },
      {
        element: "#BookSubMenu",
        popover: {
          title: "Contenido del submenu",
          description:
            "Dentro de cada submenu encontrarás opciones de navegación en el sistema, hasta generación de reportes.",
        },
        onDeselected: () => {
          const button = document.querySelector(
            "#Counter > :nth-child(2) button"
          );
          if (button && button instanceof HTMLButtonElement) {
            button.click();
          }
        },
      },
      {
        element: "#EventCalendar",
        popover: {
          title: "Calendario de eventos",
          description: "Aquí puedes ver los eventos y cursos de esta semana.",
        },
      },
      {
        element: "#inBoxBtn",
        popover: {
          title: "Notificaciones de solicitudes",
          description:
            "Aquí puedes ver las notificaciones sobre solicitudes de préstamos, amigos, entre otros mensajes importantes.",
        },
      },
      {
        element: "#hamburger",
        popover: {
          title: "Menú de navegación",
          description:
            "Al dar clic, podrás desplegar el menú de navegación del sistema.",
        },
      },
    ],
  });
  return (
    <>
      <Button
        onClick={startGuideShow}
        id="StartTour"
        color="light"
        outline
        pill
        title="Guía rapida"
        className=" absolute bottom-2 right-4"
      >
        <MdOutlineQuestionMark />
      </Button>
    </>
  );
};

export default Driver;

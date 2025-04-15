import { Breadcrumb, Card } from "flowbite-react";
import { IoIosHome } from "react-icons/io";
import { formatToFullDate } from "../components/FormatTempo";
import CounterCard from "../components/CounterCard";
import { Link } from "react-router-dom";
import { ActivesCounts, Counts } from "../Types/GlobalTypes";
import { useQuery } from "react-query";
import { GetActivitiesCounts, GetGeneralCounts } from "../Services/Stats";
import Calendar from "../components/Calendar";
import LoanStadisticts from "../components/LoanStadisticts";
import { useState } from "react";
import ReportModal from "../components/Modals/ReportModal";
import Driver from "../utils/Driver";

const AdminHomePage = () => {
  const { data: Activitiescounts } = useQuery<Counts>(
    ["ActivitiesCounts"],
    () => GetActivitiesCounts(),
    {
      staleTime: 600,
    }
  );
  const { data: GeneralCounts } = useQuery<ActivesCounts>(
    ["GeneralCounts"],
    () => GetGeneralCounts(),
    {
      staleTime: 600,
    }
  );

  const [open, setOpen] = useState(false);
  const [reportType, setReportType] = useState<string>("");

  return (
    <>
      <div className="flex justify-between items-baseline mx-2 mt-2 text-xl">
        <Breadcrumb className="custom-breadcrumb">
          <Breadcrumb.Item icon={IoIosHome}>
            <span
              className="text-gray-600
            dark:text-white"
            >
              Inicio
            </span>
          </Breadcrumb.Item>
        </Breadcrumb>
        <span
          className=" text-gray-600
        max-sm:text-sm
        dark:text-white"
        >
          {" "}
          {formatToFullDate(new Date())}{" "}
        </span>
      </div>
      <main className="w-full flex flex-col items-center gap-3">
        <section
          className="grid grid-cols-6 w-11/12 gap-3 
        max-md:grid-cols-2 max-lg:grid-cols-4"
        >
          <div
            className="col-span-4 max-md:col-span-2 max-lg:col-span-2 max-2xl:col-span-6"
            id="Stats"
          >
            <LoanStadisticts />
          </div>
          <div
            className="grid grid-cols-2 gap-6 col-span-2 
            max-lg:grid-cols-2 
            max-lg:col-span-2  max-lg:text-sm 
            max-2xl:grid-cols-6 max-2xl:col-span-6"
            id="Counter"
          >
            <CounterCard
              counter={GeneralCounts?.Libros || 0}
              text="Libros en colección"
              children={
                <div className="p-3 flex flex-col gap-3">
                  <Link
                    className=" hover:text-Body"
                    to={"/HogarDeLibros/Catalogo/Completo"}
                  >
                    Ver catálogo completo
                  </Link>
                  <Link
                    className=" hover:text-Body"
                    to={"/HogarDeLibros/Recursos/Catalogo_General"}
                  >
                    Ir a gestión de catalogo
                  </Link>
                </div>
              }
            />
            <CounterCard
              counter={Activitiescounts?.PrestamosExitosos || 0}
              text="Préstamos de libro"
              children={
                <div
                  className="p-3 flex flex-col gap-3 items-start"
                  id="BookSubMenu"
                >
                  <Link
                    className=" hover:text-Body"
                    to={"/HogarDeLibros/Catalogo/Completo"}
                  >
                    Ver solicitudes pendientes de respuesta
                  </Link>
                  <Link
                    className=" hover:text-Body"
                    to={"/HogarDeLibros/Recursos/Catalogo_General"}
                  >
                    Ver solicitudes aprobadas
                  </Link>
                  <Link
                    className=" hover:text-Body"
                    to={"/HogarDeLibros/Recursos/Catalogo_General"}
                  >
                    Ver historial de préstamos
                  </Link>
                  <button
                    type="button"
                    className="hover:text-Body"
                    onClick={() => (setReportType("BL"), setOpen(true))}
                  >
                    Generar reporte
                  </button>
                </div>
              }
            />
            <CounterCard
              counter={GeneralCounts?.Usuarios || 0}
              text="Usuarios registrados"
              children={
                <div className="p-3 flex flex-col gap-3 items-start">
                  <Link
                    className=" hover:text-Body"
                    to={"/HogarDeLibros/Gestion_Usuarios"}
                  >
                    Ir a gestión de usuarios
                  </Link>
                  <button
                    type="button"
                    className="hover:text-Body"
                    onClick={() => (setReportType("US"), setOpen(true))}
                  >
                    Generar reporte
                  </button>
                </div>
              }
            />

            <CounterCard
              counter={GeneralCounts?.AsistenciaMes || 0}
              text="Asistencia del mes"
              children={
                <div className="p-3 flex flex-col gap-3">
                  <button
                    type="button"
                    className="hover:text-Body"
                    onClick={() => (setReportType("AS"), setOpen(true))}
                  >
                    Generar reporte
                  </button>
                </div>
              }
            />
            <CounterCard
              counter={Activitiescounts?.EquiposExitosos || 0}
              text="Préstamo de equipo"
              children={
                <div className="p-3 flex flex-col gap-3">
                  <Link
                    className=" hover:text-Body"
                    to={"/HogarDeLibros/Prestamos_Circulacion/Prestamo_Computo"}
                  >
                    Ir a disponibilidad de equipos
                  </Link>
                  <Link
                    className=" hover:text-Body"
                    to={"/HogarDeLibros/Historial/Equipo_Computo"}
                  >
                    Historial de préstamos
                  </Link>
                  <span className=" hover:text-Body">
                    <button
                      type="button"
                      onClick={() => (setReportType("WS"), setOpen(true))}
                    >
                      Generar reporte
                    </button>
                  </span>
                </div>
              }
            />

            <CounterCard
              counter={
                (Activitiescounts &&
                  Activitiescounts?.CursosExitosos +
                    Activitiescounts?.EventosExitosos) ||
                0
              }
              text="Actividades"
              children={
                <div className="p-3 flex flex-col gap-3 items-start">
                  <Link
                    className=" hover:text-Body"
                    to={"/HogarDeLibros/Servicios/Eventos"}
                  >
                    Ver lista de Eventos
                  </Link>
                  <Link
                    className=" hover:text-Body"
                    to={"/HogarDeLibros/Servicios/Cursos"}
                  >
                    Ver lista de cursos
                  </Link>
                  <Link
                    className=" hover:text-Body"
                    to={"/HogarDeLibros/Servicios/Programas"}
                  >
                    Ver programas
                  </Link>
                  <button
                    type="button"
                    onClick={() => (setReportType("EV"), setOpen(true))}
                  >
                    Reporte de Eventos
                  </button>
                  <button
                    type="button"
                    onClick={() => (setReportType("CO"), setOpen(true))}
                  >
                    Reporte de Cursos
                  </button>
                </div>
              }
            />
          </div>
        </section>
        <section className="flex w-11/12 justify-start gap-6 relative">
          <Card
            className="w-full h-[32vh] p0 rounded-sm
            dark:bg-neutral-900 "
            id="EventCalendar"
          >
            <Calendar />
          </Card>
          <Driver />
        </section>
      </main>
      <ReportModal open={open} setOpen={setOpen} reportType={reportType} />
    </>
  );
};

export default AdminHomePage;

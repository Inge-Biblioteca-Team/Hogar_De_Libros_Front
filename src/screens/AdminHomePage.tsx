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
      <div className=" flex md:w-full justify-between">
        <Breadcrumb className="custom-breadcrumb">
          <Breadcrumb.Item icon={IoIosHome}>
          <span className="dark:text-white text-xl mr-4 mt-2 text-gray-600 max-sm:text-sm">
           Inicio
          </span>
          </Breadcrumb.Item>
        </Breadcrumb>
        <span className="dark:text-white text-xl mr-4 mt-2 text-gray-600 max-sm:text-sm">
          {" "}
          {formatToFullDate(new Date())}{" "}
        </span>
      </div>
      <main className=" w-full flex flex-col items-center gap-3">
        <section className=" grid lg:grid-cols-6 md:grid-cols-1 md:w-full md:pr-4 md:pl-4 grid-cols-6 w-11/12 gap-3 max-sm:grid-cols-2">
          <div className="col-span-4 md:w-full max-sm:hidden">
            <LoanStadisticts />
          </div>
          <div className="grid   grid-cols-2 gap-6 col-span-2 ">
            <CounterCard
              counter={GeneralCounts?.Libros || 0}
              text="Libros en colección"
              children={
                <div className="p-3 flex flex-col gap-3">
                  <Link
                    className=" hover:text-Body"
                    to={"/HogarDeLibros/Catalogo/Completo"}
                  >
                    Ver catalogo completo
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
                <div className="p-3 flex flex-col gap-3 items-start">
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
                    Ver historial de prestamos
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
                <div className="p-3 flex flex-col gap-3">
                  <Link
                    className=" hover:text-Body"
                    to={"/HogarDeLibros/Catalogo/Completo"}
                  >
                    Ir a gestión de usuarios
                  </Link>
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
                    to={"/HogarDeLibros/Catalogo/Completo"}
                  >
                    Ir a disponibilidad de equipos
                  </Link>
                  <Link
                    className=" hover:text-Body"
                    to={"/HogarDeLibros/Catalogo/Completo"}
                  >
                    Historial de prestamos
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
                <div className="p-3 flex flex-col gap-3">
                  <Link
                    className=" hover:text-Body"
                    to={"/HogarDeLibros/Catalogo/Completo"}
                  >
                    Ver lista de Eventos
                  </Link>
                  <Link
                    className=" hover:text-Body"
                    to={"/HogarDeLibros/Catalogo/Completo"}
                  >
                    Ver lista de cursos
                  </Link>
                  <Link
                    className=" hover:text-Body"
                    to={"/HogarDeLibros/Catalogo/Completo"}
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
        <section className=" flex xl:w-full 2xl:w-full xl:pr-4 xl:pl-4 2xl:pl-4 2xl:pr-4 w-11/12 justify-start gap-6">
          <Card className=" w-full h-[32vh] p0 rounded-sm">
            <Calendar />
          </Card>
        </section>
      </main>
      <ReportModal
        open={open}
        setOpen={setOpen}
        reportType={reportType}
      />
    </>
  );
};

export default AdminHomePage;

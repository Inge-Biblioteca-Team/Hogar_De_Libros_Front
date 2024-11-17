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

  return (
    <>
      <div className=" flex justify-between">
        <Breadcrumb className="custom-breadcrumb">
          <Breadcrumb.Item icon={IoIosHome}>Inicio</Breadcrumb.Item>
        </Breadcrumb>
        <span className=" text-xl mr-4 mt-2 text-gray-600 max-sm:text-sm">
          {" "}
          {formatToFullDate(new Date())}{" "}
        </span>
      </div>
      <main className=" w-full flex flex-col items-center gap-3">
        <section className=" grid grid-cols-6 w-11/12 gap-3 max-sm:grid-cols-2">
          <div className="col-span-4 max-sm:hidden">
            <LoanStadisticts />
          </div>
          <div className="grid grid-cols-2 gap-6 col-span-2 ">
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
                <div className="p-3 flex flex-col gap-3">
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
              counter={GeneralCounts?.Amigos || 0}
              text="Amigos"
              children={
                <div className="p-3 flex flex-col gap-3">
                  <Link
                    className=" hover:text-Body"
                    to={"/HogarDeLibros/Catalogo/Completo"}
                  >
                    Ir a solicitudes de amigos
                  </Link>
                  <Link
                    className=" hover:text-Body"
                    to={"/HogarDeLibros/Catalogo/Completo"}
                  >
                    Ir a amigos de la biblioteca
                  </Link>
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
                </div>
              }
            />
          </div>
        </section>
        <section className=" flex w-11/12 justify-start gap-6">
          <Card className=" w-full h-[32vh] p0 rounded-sm">
            <Calendar />
          </Card>
        </section>
      </main>
    </>
  );
};

export default AdminHomePage;

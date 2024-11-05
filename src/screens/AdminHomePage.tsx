import { Breadcrumb, Card } from "flowbite-react";
import { IoIosHome } from "react-icons/io";
import { formatToFullDate } from "../components/FormatTempo";
import CounterCard from "../components/CounterCard";
import { Link } from "react-router-dom";
import { GiBookshelf } from "react-icons/gi";
import LoanStadisticts from "../components/LoanStadisticts";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { GrServices } from "react-icons/gr";
import { FaDatabase } from "react-icons/fa6";
import RedirectCard from "../components/RedirectCard";
const AdminHomePage = () => {
  return (
    <>
      <div className=" flex justify-between">
        <Breadcrumb className="custom-breadcrumb">
          <Breadcrumb.Item icon={IoIosHome}>Inicio</Breadcrumb.Item>
        </Breadcrumb>
        <span className=" text-xl mr-4 mt-2 text-gray-600">
          {" "}
          {formatToFullDate(new Date())}{" "}
        </span>
      </div>
      <main className=" w-full flex flex-col items-center gap-3 ">
        <section className=" grid grid-cols-6 w-11/12 gap-8">
          <div className="col-span-4">
            <LoanStadisticts />
          </div>
          <div className=" flex flex-col gap-6">
            <CounterCard
              counter={0}
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
              counter={0}
              text="Solicitudes de préstamos"
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
              counter={0}
              text="Solicitudes de préstamos"
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
          </div>
          <div className="flex flex-col gap-6">
            <CounterCard
              counter={0}
              text="Amigos de la biblioteca"
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
              counter={0}
              text="Prestamos de equipos"
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
              counter={0}
              text="Actividades realizadas"
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
          <RedirectCard
            text="Recursos"
            Path="Recursos"
            icon={<FaDatabase />}
            List={
              <>
                <li>Artistas locales</li>
                <li>Equipo de computo</li>
                <li>Libros generales</li>
                <li>Libros infantiles</li>
                <li>Mobiliario</li>
                <li>Salas</li>
              </>
            }
          />
          <RedirectCard
            text="Servicios"
            Path="Servicios"
            icon={<GrServices />}
            List={
              <>
                <li>Cursos</li>
                <li>Eventos</li>
                <li>Programas</li>
              </>
            }
          />
          <RedirectCard
            text="Colecciones"
            Path="Catalogo"
            icon={<GiBookshelf />}
            List={
              <>
                <li>Catalogo infantil</li>
                <li>Catalogo General</li>
              </>
            }
          />
          <RedirectCard
            text="Avisos importantes"
            Path="Avisos"
            icon={<BsFillInfoSquareFill />}
            List={
              <>
                <li>Crear avisos</li>
                <li>Recordar próximas actividades</li>
                <li>Editar avisos</li>
              </>
            }
          />
          <Card className=" w-[32%] ml-2">
            <div className=" text-center">Próximamente</div>
          </Card>
        </section>
      </main>
    </>
  );
};

export default AdminHomePage;

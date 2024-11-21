import { Card, Label } from "flowbite-react";
import { MiddleCrumb } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import { useNavigate } from "react-router-dom";

const UserMiddlePage = () => {
  const navi = useNavigate();

  return (
    <>
      <MiddleCrumb label="Perfil" />
      <main className=" w-full flex items-center justify-center ">
        <section className=" grid grid-cols-4 gap-5 w-4/5 mt-32 max-sm:mt-3 max-sm:grid-cols-2">
          <Card
            className="h-96 w-80 max-sm:w-full transition-transform hover:scale-105 "
            onClick={() => navi("/HogarDeLibros/Perfil/MisPréstamos")}
          >
            <h3>Mis prestamos</h3>
            <Label value={`Total de prestamos: `} />
            <Label value={`Prestamos activos: `} />
            <Label value={`Prestamos pendientes de devolución: `} />
            <Label value={`Máximo de prestamos permitidos: `} />
          </Card>
          <Card
            className="h-96 w-80 max-sm:w-full transition-transform hover:scale-105"
            onClick={() => navi("/HogarDeLibros/Perfil/EditarPerfil")}
          >
            <h3>Mi perfil</h3>
            <Label value={`Nombre`} />
            <Label value={`Amigo?`} />
            <Label value={`Fecha de registro: `} />
            <Label value={`Teléfono: `} />
            <Label value={`Correo: `} />
            <Label value={`Dirección: `} />
          </Card>
          <Card
            className="h-96 w-80 max-sm:w-full transition-transform hover:scale-105"
            onClick={() => navi("/HogarDeLibros/Perfil/CursosMatriculados")}
          >
            <h3>Cursos matriculados</h3>
            <Label value={`Curso mas próximo: `} />
            <Label value={`Fecha: `} />
            <Label value={`Hora: `} />
            <Label value={`Requisitos: `} />
            <Label value={`Total de cursos matriculados: `} />
          </Card>
          <Card
            className="h-96 w-80 max-sm:w-full transition-transform hover:scale-105"
            onClick={() => navi("/HogarDeLibros/Perfil/MisReservaciones")}
          >
            <h3>Reserva de salas</h3>
            <Label value={`Próxima reserva: `} />
            <Label value={`Total de reservas: `} />
          </Card>
        </section>
      </main>
    </>
  );
};

export default UserMiddlePage;

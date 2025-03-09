import {
  faChalkboardUser,
  faChildren,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import OPACBanner from "./OPACBanner";
import OPACCard from "./OPACCard";
import OPACAsistencia from "./OPACAsistencia";
import { useState } from "react";

const OPACHPage = () => {
  const [openAsistencia, setOpenAsistencia] = useState(false);

  return (
    <section
      id="Home"
      className="flex w-full items-center justify-center flex-col gap-5"
    >
      <OPACBanner />
      <div className="m-2 lg:m-0  lg:w-11/12">
        <div className="grid max-sm:grid-cols-2 gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3
        ">
          <OPACCard
            Icon={faBookOpen}
            Title="catalogo de libros"
            Message="Explora la amplia cantidad de diversos libros"
            Path="/OPAC/Libros"
          />
          <OPACCard
            Icon={faChalkboardUser}
            Title="Equipos de cómputo"
            Message="Acceso a computadoras, la biblioteca cuenta con 20 computadoras las cuales están a disposición de los usuarios de la biblioteca."
            Path="/OPAC/Equipo-Computo"
          />
          <div onClick={() => setOpenAsistencia(true)}>
            <OPACCard
              Icon={faChildren}
              Title="Asistencia"
              Message="Tu participación es clave para mejorar la gestión de la biblioteca. ¡Registra tu asistencia y sé parte del cambio!"
             Path=""
            />
          </div>
        </div>
      </div>
      <OPACAsistencia open={openAsistencia} setOpen={setOpenAsistencia} />
    </section>
  );
};

export default OPACHPage;

import LandingBanner from "../components/LandingBanner";
import LandingHomeCards from "../components/LandingHomeCards";
import {
  faChalkboardUser,
  faChildren,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

const LandingHome = () => {
  return (
    <section
      id="Home"
      className="flex w-full items-center justify-center flex-col gap-5"
    >
        <LandingBanner/>
      <div className=" flex gap-5 h-52 w-4/5">
        <LandingHomeCards
          Icon={faBookOpen}
          Title="Prestamos"
          Message="Explora la amplia cantidad de diversos libros, solicita una sala para tus activadesde e incluso equipo tecnologico"
          Path="#"
        />
        <LandingHomeCards
          Icon={faChalkboardUser}
          Title="Cursos y Eventos"
          Message="Matricula en los diversos cursos y talleres brindados por nosotros y por los voluntariados de la biblioteca"
          Path="#"
        />
        <LandingHomeCards
          Icon={faChildren}
          Title="Amiguitos De la biblioteca"
          Message="Unete a nuestro programa de voluntariado donde podras ayudar a la biblioteca de diversas maneras."
          Path="#"
        />
      </div>
    </section>
  );
};

export default LandingHome;

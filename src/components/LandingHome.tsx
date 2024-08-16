import LandingBanner from "./LandingBanner";
import LandingHomeCards from "./LandingHomeCards";
import {
  faChalkboardUser,
  faChildren,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

const LandingHome = () => {
  return (
    <section
      id="Home"
      className="flex w-full items-center justify-center flex-col gap-5
      "
    >
        <LandingBanner/>
      <div className=" flex gap-5 h-52 w-4/5 max-sm:w-full max-sm:h-auto ">
        <LandingHomeCards
          Icon={faBookOpen}
          Title="Préstamos"
          Message="Explora la ámplia cantidad de diversos libros, solicita una sala para tus activadesde e incluso equipo tecnológico"
          Path="/Sistema"
        />
        <LandingHomeCards
          Icon={faChalkboardUser}
          Title="Cursos y Eventos"
          Message="Matricula en los diversos cursos y talleres brindados por nosotros y por los voluntariados de la biblioteca"
            Path="/Sistema"
        />
        <LandingHomeCards
          Icon={faChildren}
          Title="Amiguitos De la biblioteca"
          Message="Unete a nuestro programa de voluntariado donde podras ayudar a la biblioteca de diversas maneras."
            Path="/Sistema"
        />
      </div>
    </section>
  );
};

export default LandingHome;

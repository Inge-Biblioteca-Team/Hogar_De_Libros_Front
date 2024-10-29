import LandingBanner from "./LandingBanner";
import LandingHomeCards from "./LandingHomeCards";
import {
  faChalkboardUser,
  faChildren,
  faBookOpen,
  faHouseLaptop,
} from "@fortawesome/free-solid-svg-icons";

const LandingHome = () => {
  return (
    <section
      id="Home"
      className="flex w-full items-center justify-center flex-col gap-5
      "
    >
      <LandingBanner />
      <div className=" w-4/5">
        <div className=" grid grid-cols-4 gap-4 mt-10">
          <LandingHomeCards
            Icon={faBookOpen}
            Title="Préstamos"
            Message="Explora la amplia cantidad de diversos libros y equipos de cómputo"
            Path="/HogarDeLibros/Catalogo"
          />
          <LandingHomeCards
            Icon={faChalkboardUser}
            Title="Cursos y Eventos"
            Message="Matricula en los diversos cursos y talleres brindados por nosotros y por los voluntariados de la biblioteca"
            Path="/HogarDeLibros"
          />
          <LandingHomeCards
            Icon={faChildren}
            Title="Amigo de la biblioteca"
            Message="Unete a nuestro programa de voluntariado donde podras ayudar a la biblioteca de diversas maneras."
            Path="/HogarDeLibros"
          />
          <LandingHomeCards
            Icon={faHouseLaptop}
            Title="Sistema Hogar de libros"
            Message="Únete como usuario y recibe beneficios como la reserva de libros desde de tu casa consulta de nuestro catalogo entre otros."
            Path="/HogarDeLibros"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingHome;

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
      <div className=" m-2 lg:m-0 lg:w-4/5">
        <div className=" grid grid-cols-2 gap-4 mt-10 lg:grid-cols-4">
          <LandingHomeCards
            Icon={faBookOpen}
            Title="catalogo de libros"
            Message="Explora la amplia cantidad de diversos libros"
            Path="/HogarDeLibros/Catalogo"
          />
          <LandingHomeCards
            Icon={faChalkboardUser}
            Title="Cursos y eventos"
            Message="Matricula los diversos cursos y talleres brindados por nosotros y por los colaboradores de la biblioteca"
            Path="/HogarDeLibros"
          />
          <LandingHomeCards
            Icon={faChildren}
            Title="Amigo de la biblioteca"
            Message="Únete a nuestro programa de voluntariado donde podrás ayudar a la biblioteca de diversas maneras."
            Path="/HogarDeLibros"
          />
          <LandingHomeCards
            Icon={faHouseLaptop}
            Title="Sistema Hogar de libros"
            Message="Únete como usuario y recibe beneficios como la reserva de libros desde de tu casa, consulta de nuestro catalogo de libros entre otros."
            Path="/HogarDeLibros"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingHome;

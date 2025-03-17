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
      <div className="w-11/12">
        <div className=" w-full grid grid-cols-4 max-md:grid-cols-2 gap-3">
          <LandingHomeCards
            Icon={faBookOpen}
            Title="Catálogo de libros "
            Message="Explora la amplia cantidad de diversos libros"
            Path="/HogarDeLibros/Catalogo"
          />
          <LandingHomeCards
            Icon={faChalkboardUser}
            Title="Cursos y eventos"
            Message="Matricula los cursos y talleres que ofrecemos, tanto nosotros como nuestros colaboradores ."
            Path="/HogarDeLibros"
          />
          <LandingHomeCards
            Icon={faChildren}
            Title="Amigo de la biblioteca"
            Message="Únete a nuestro programa de voluntariado y contribuye a la biblioteca de diversas maneras."
            Path="/HogarDeLibros"
          />
          <LandingHomeCards
            Icon={faHouseLaptop}
            Title="Sistema Hogar de libros"
            Message="Únete como usuario y disfruta de beneficios como la reserva de libros desde casa, la consulta de nuestro catálogo y mucho más"
            Path="/HogarDeLibros"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingHome;

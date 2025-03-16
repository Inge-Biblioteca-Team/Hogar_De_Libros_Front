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
      <div className=" m-2 md:w-full md:pl-2 md:pr-2 w-full lg:m-0 pr-20 pl-20 lg:pl-20 lg:pr-20 max-sm:pr-2 max-sm:pl-2">
        <div className=" grid max-sm:grid-cols-2 gap-4 mt-10 md:grid-cols-2  lg:grid-cols-4">
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

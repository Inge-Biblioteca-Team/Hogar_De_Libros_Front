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
        <div className=" w-full grid grid-cols-4 gap-3">
          <LandingHomeCards
            Icon={faBookOpen}
            Title="Catálogo de libros"
            Message="Explora nuestra amplia colección de libros."
            Path="/HogarDeLibros/Catalogo"
          />
          <LandingHomeCards
            Icon={faChalkboardUser}
            Title="Cursos y eventos"
            Message="Inscríbete en los cursos y talleres ofrecidos por la biblioteca y sus colaboradores."
            Path="/HogarDeLibros"
          />
          <LandingHomeCards
            Icon={faChildren}
            Title="Amigos de la biblioteca"
            Message="Únete a nuestro programa de voluntariado,  donde podrás apoyar a la biblioteca de muchas formas."
            Path="/HogarDeLibros"
          />
          <LandingHomeCards
            Icon={faHouseLaptop}
            Title="Sistema Hogar de libros"
            Message="Únete como usuario y recibe beneficios como la reserva de libros desde tu casa, la consulta de nuestro catálogo de libros, entre otros"
            Path="/HogarDeLibros"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingHome;

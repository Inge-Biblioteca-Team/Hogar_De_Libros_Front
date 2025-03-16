import { useContext } from "react";
import UserContext from "../Context/UserContext/UserContext";
import { useNavigate } from "react-router-dom";

const LandingBanner = () => {
  const { isLogged } = useContext(UserContext);

  const navi = useNavigate();

  const handleClick = () => {
    if (isLogged) {
      navi("/HogarDeLibros");
    } else {
      navi("/IniciarSesion");
    }
  };
  return (
    <div
      className="w-full -mt-5 flex flex-col justify-center items-center bg-cover bg-center gap-6 h-96 text-slate-50 
       "
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.01),90%, #dfe2e6), url(${"https://sicultura-live.s3.amazonaws.com/public/media/nicoyafachada1.jpg"})`,
      }}
    >
      <h1 className="2xl:text-9xl lg:text-4xl max-sm:text-center">
        Bienvenidos a la Biblioteca Pública Municipal de Nicoya
      </h1>
      <p className="2xl:text-8xl lg:text-2xl max-sm:text-center">
      Adéntrate a un mundo de conocimiento y explora nuestro catálogo
      </p>
      <button
        className=" bg-Body p-3 rounded-md hover:scale-105 transition-transform md:text-base max-sm:text-sm"
        type="button"
        onClick={handleClick}
      >
        {isLogged ? "Entrar al sistema" : "Inicia sesión o regístrate ahora."}
      </button>
    </div>
  );
};

export default LandingBanner;

import { useContext } from "react";
import UserContext from "../Context/UserContext/UserContext";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import fachada from "../Assets/Fachada.webp"
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
      className="
      w-full flex flex-col justify-center items-center bg-cover bg-center gap-6 h-96 text-slate-50 "
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.01),90%, #dfe2e6), url(${fachada})`,
      }}
    >
    
      <h1
        className="
        text-5xl text-center
        max-sm:text-2xl
      "
      >
        Bienvenidos a la Biblioteca Pública Municipal de Nicoya
      </h1>
      <p className="text-2xl lg:text-3xl max-sm:text-lg max-sm:text-center">
        Descubra un mundo de conocimiento y explora nuestro catálogo
      </p>
      <Button
        className="dark:bg-neutral-900 dark:hover:bg-neutral-800"
        color={"blue"}
        size={"xl"}
        type="button"
        onClick={handleClick}
      >
        {isLogged ? "Entrar al sistema" : "Inicia sesión o regístrate ahora."}
      </Button>
    </div>
  );
};

export default LandingBanner;

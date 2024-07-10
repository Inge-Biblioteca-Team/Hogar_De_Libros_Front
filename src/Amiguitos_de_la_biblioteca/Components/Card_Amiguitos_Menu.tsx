import { useNavigate } from "react-router-dom";
import { IAmiguitosMenu } from "../Interfaces/Amiguitos_Menus.interface";

interface CardProps extends IAmiguitosMenu {}
function Card_Amiguitos_Menu({ Id, Imagen, Titulo, Descripcion }: CardProps) {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    switch (Id) {
      case "1":
        navigate("/Donaciones");
        break;
      case "2":
        navigate("/Programas&Actividades");
        break;
      case "3":
        navigate("/Colaboraciones");
        break;
    }
  };

  return (
    <div className="bg-slate-600 w-64 flex flex-col">
      <img className="w-64 h-32 mb-8" src={Imagen} />
      <div className="flex flex-col items-center justify-center flex-grow">
        <h3>{Titulo}</h3>
        <p>
          <span>{Descripcion}</span>
        </p>
      </div>
      <button
        className="bg-orange-600 border border-orange-600 rounded-md text-white p-1"
        type="button"
        onClick={handleButtonClick}
      >
        Ver más información
      </button>
    </div>
  );
}

export default Card_Amiguitos_Menu;

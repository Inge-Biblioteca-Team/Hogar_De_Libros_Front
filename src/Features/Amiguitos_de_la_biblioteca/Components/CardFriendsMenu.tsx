import { useNavigate } from "react-router-dom";
import { IFriendsMenu } from "../Interfaces/Friends-Menu.interface";


interface CardProps extends IFriendsMenu {}
function CardFriendsMenu({ Id, Imagen, Titulo, Descripcion }: CardProps) {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    switch (Id) {
      case "1":
        navigate("/Donations");
        break;
      case "2":
        navigate("/Volunteering");
        break;
      case "3":
        navigate("/Collaborations");
        break;
    }
  };

  return (
    <div className="bg-slate-600 w-64 flex flex-col border border-transparent rounded-md">
      <img
        className="w-64 h-32 mb-8 border-t border-transparent rounded-t-md "
        src={Imagen}
      />
      <div className="flex flex-col items-center justify-center flex-grow">
        <h3>{Titulo}</h3>
        <p>
          <span>{Descripcion}</span>
        </p>
      </div>
      <div className="flex justify-center mt-auto">
        <button
          className="bg-orange-600 border border-orange-600 rounded-md text-white p-1"
          type="button"
          onClick={handleButtonClick}
        >
          Ver más información
        </button>
      </div>
    </div>
  );
}

export default CardFriendsMenu;

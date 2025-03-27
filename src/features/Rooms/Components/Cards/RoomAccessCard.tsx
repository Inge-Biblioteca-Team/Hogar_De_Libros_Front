import { Card, Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";

const RoomAccessCard = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/HogarDeLibros/Reserva_Salas");
  };

  return (
    <Card className="dark:bg-[#2d2d2d] hover:scale-105 md:w-full transition-transform duration-300 max-w-sm mx-auto flex flex-col justify-between h-full">
      <div>
        <FontAwesomeIcon icon={faDoorOpen} size="2x" className="mb-2" />
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
          Salas
        </h5>
        <p className="dark:text-white font-normal text-gray-700 text-center">
          Espacios disponibles para tus actividades.
        </p>
      </div>

      <div className="mt-4 flex justify-center">
        <Button
          title="Ir a Salas"
          onClick={handleRedirect}
          color="blue"
          className="w-1/2"
        >
          Ir a Salas
        </Button>
      </div>
    </Card>
  );
};

export default RoomAccessCard;

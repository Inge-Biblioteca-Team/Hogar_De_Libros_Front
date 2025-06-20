import { Card, Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

const ComputerAccessCard = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/HogarDeLibros/Equipo_Disponible");
  };
  return (
    <Card className="dark:bg-[#2d2d2d] hover:scale-105 md:w-full  transition-transform duration-300 max-w-sm mx-auto flex flex-col justify-between h-full">
      <div>
        <FontAwesomeIcon icon={faDesktop} size="2x" className="mb-2" />
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
          Equipo de cómputo
        </h5>
        <p className="dark:text-white font-normal text-gray-700 text-center">
          Computadoras con internet para tus proyectos.
        </p>
      </div>
      <div className="mt-4 flex justify-center">
        <Button onClick={handleRedirect} color="blue" className="dark:bg-neutral-900 w-1/2">
          Ir a Equipos
        </Button>
      </div>
    </Card>
  );
};
export default ComputerAccessCard;
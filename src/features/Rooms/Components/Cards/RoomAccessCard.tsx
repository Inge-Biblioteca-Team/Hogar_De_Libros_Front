import { Card, Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'; 

const RoomAccessCard = () => {
  const navigate = useNavigate(); 

  const handleRedirect = () => {
    navigate('/HogarDeLibros/Reserva_Salas'); 
  };

  return (
    <Card className="max-w-sm mx-auto flex flex-col justify-between h-full">
      <div>
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
          Salas
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 text-justify">
        Espacios disponibles para tus actividades.  
        </p>
      </div>

      <div className="mt-4">
        <Button 
          onClick={handleRedirect} 
          color="blue" 
          className="w-full"
        >
          Ir a Salas <FaArrowRight className="inline ml-2" />
        </Button>
      </div>
    </Card>
  );
};

export default RoomAccessCard;
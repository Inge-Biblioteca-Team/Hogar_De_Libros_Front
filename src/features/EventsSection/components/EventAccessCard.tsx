import { Card, Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';


const EventAccessCard = () => {
  const navigate = useNavigate(); 

  const handleRedirect = () => {
    navigate('/HogarDeLibros/Cronograma_Eventos'); 
  };

  return (
    <Card className="dark:bg-[#2d2d2d] hover:scale-105 md:w-full  transition-transform duration-300 max-w-sm mx-auto flex flex-col justify-between h-full">
       <div>
       <FontAwesomeIcon icon={faCalendarAlt} size="2x" className="mb-2" />
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
        Eventos
      </h5>
      <p className="dark:text-white font-normal text-gray-700 dark:text-gray-400 text-justify">
      Participa en actividades inspiradoras con la lectura.
      </p>
      </div>
      <div className="mt-4 flex justify-center">
        <Button 
          onClick={handleRedirect} 
          color="blue" 
          className="w-1/2"
        >
          Ir a Eventos
        </Button>
      </div>
    </Card>
  );
};

export default EventAccessCard;
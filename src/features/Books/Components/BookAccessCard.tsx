import { Card, Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';


const BookAccessCard = () => {
  const navigate = useNavigate(); 

    const handleRedirect = () => {
      navigate('/HogarDeLibros/Catalogo'); 
    };

  return (
    <Card className="dark:bg-[#2d2d2d] hover:scale-105 md:w-full transition-transform duration-300 max-w-sm mx-auto flex flex-col justify-between h-full">
        <div>
        <FontAwesomeIcon icon={faBook} size="2x" className="mb-2" />
      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
        Catálogo de libros
      </h5>  
      <p className="dark:text-white font-normal text-gray-700 text-center">
        Explora nuestra colección de libros.
      </p>
      </div>

      <div className="mt-4 flex justify-center">
      <Button onClick={handleRedirect} 
      color="blue"
      className="w-1/2">
        Ir a libros
      </Button>
      </div>
    </Card>
  );
};

export default BookAccessCard;
import { Card, Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

const CardViewDonations = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/HogarDeLibros/DonacionesFormulario');
    };

    return (
        <Card
            imgAlt="Imagen representativa de la tarjeta"
            //   imgSrc="src\Assets\course.jpg"
            className="hover:scale-105 transition-transform duration-300"
        >

            <div className="flex justify-center">
                <img
                    src="src\Assets\course.jpg"
                    alt="Imagen representativa de la tarjeta"
                    className="h-56 w-76 object-cover rounded-md mb-4"
                />
            </div>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                ¡Realiza tus donaciones aquí!
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                Participa en nuestras actividades y realiza tus donaciones junto a otros amiguitos.
            </p>
            <div className="flex justify-center mt-4">
                <Button className="w-36 hover:scale-105 transition-transform duration-300" onClick={handleButtonClick}>
                    ¡Ir al Formulario!
                </Button>
            </div>
        </Card>
    );
};

export default CardViewDonations;
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './Strellas.css'

const Strellas: React.FC = () => {
    const [rating, setRating] = useState<number | null>(null);
    const [hover, setHover] = useState<number | null>(null);


    ///manejo de eventos 
    const handleStarClick = (currentRating: number) => {
        setRating(currentRating);
    };

    const handleMouseEnter = (currentRating: number) => {
        setHover(currentRating);
    };

    const handleMouseLeave = () => {
        setHover(null);
    };

    //renderizado usando iconos de react
    return (
        <div className="flex justify-center items-start h-screen bg-gray-100">
      <div className="w-1/2 text-center bg-gray p-8 rounded-lg shadow-lg">
        <div className="Star">
            {[...Array(5)].map((_, index) => {
                const currentRating = index + 1;
                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            value={currentRating}
                            onClick={() => handleStarClick(currentRating)}
                        />
                        <FaStar
                            className="Star"
                            size={50}
                            color={currentRating <= (hover ?? rating ?? 0) ? "#ffc107" : "#e4e5e9"}
                            onMouseEnter={() => handleMouseEnter(currentRating)}
                            onMouseLeave={handleMouseLeave}
                        />
                    </label>
                );
            })}
            <fieldset className="field-message">
                <label className="symbol-required message">Escribe tu reseña</label>
                <textarea maxLength={500} placeholder="¿Cuál es tu opinión?" cols={30} rows={20}></textarea>
            </fieldset>

            <button type="submit" className="btn-send">Enviar</button>
        </div>
        </div>
        </div>
    );
}

export default Strellas;
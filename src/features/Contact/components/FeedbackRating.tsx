import { Rating, Textarea } from "flowbite-react";
import { useState } from "react";

const FeedbackRating = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (value: React.SetStateAction<number>) => {
    setRating(value);
  };

  return (
    <form  className=" shadow-md rounded-md p-3 flex flex-col gap-3 w-1/3 max-sm:w-full max-sm:text-md">
      <fieldset>
        <legend>Tu opinion</legend>
        <Textarea required />
      </fieldset>
      <fieldset>
        <legend>Calificacion de Atencion</legend>
        <Rating>
          {[1, 2, 3, 4, 5].map((value) => (
            <Rating.Star
              key={value}
              filled={value <= rating}
              onClick={() => handleClick(value)}
            />
          ))}
        </Rating>
      </fieldset>
      <button
        type="submit"
        className="bg-Bottoms text-Text text-lg rounded-lg p-1 
        hover:bg-Bottoms-dark hover:scale-105
         max-sm:text-sm"
      >
        Enviar
      </button>
    </form>
  );
};

export default FeedbackRating;

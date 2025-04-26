
import { Rating, Spinner, Textarea } from "flowbite-react";
import { useState, useRef } from "react";
import { toast, Toaster } from "react-hot-toast";
import { sendFeedback } from "../../../Services/EmailJS";

const FeedbackRating = () => {
  const [rating, setRating] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = (value: number) => {
    setRating(value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    if (formRef.current) {
      sendFeedback(formRef.current)
        .then((result) => {
          console.log("Feedback enviado:", result.text);
          formRef.current?.reset();
          setIsLoading(false);
          toast.success("El mensaje ha sido enviado correctamente.");
        })
        .catch((error) => {
          console.error("Error al enviar el feedback:", error);
          setIsLoading(false);
          toast.error("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
        });
    }
  };

  return (
    <>
      <Toaster />
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="dark:bg-[#2d2d2d] bg-white shadow-md rounded-md p-3 
        flex flex-col gap-3 max-md:w-full 
        w-1/2  "
      >
        <fieldset>
          <legend>Tu opinión</legend>
          <Textarea
            required
            name="message"
            placeholder="Escribe tu opinión aquí"
          />
        </fieldset>
        <fieldset>
          <legend>Calificación de Atención</legend>
          <Rating>
            {[1, 2, 3, 4, 5].map((value) => (
              <Rating.Star
                key={value}
                name="rating"
                filled={value <= rating}
                onClick={() => handleClick(value)}
              />
            ))}
          </Rating>
        </fieldset>
        <input type="hidden" name="rating" value={rating} />
        <button
          type="submit"
          className="dark:bg-[#161616] bg-Bottoms text-Text text-lg rounded-lg p-1 hover:bg-Bottoms-dark  max-sm:text-sm"
          disabled={isLoading}
        >
          {isLoading ? (
            <><Spinner aria-label="Spinner button example" size="sm" /> <p className="pl-3">Cargando...</p></>
          ) : (
            "Enviar"
          )}
        </button>
      </form>
    </>
  );
};

export default FeedbackRating;
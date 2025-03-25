
import { useRef, useState } from "react";
import { Spinner, Textarea, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";
import { toast, Toaster } from "react-hot-toast";
import { sendEmail } from "../../../Services/EmailJS";

const ContactForm = () => {
  const refForm = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    if (refForm.current) {
      sendEmail(refForm.current)
        .then((result) => {
          console.log("Mensaje enviado:", result.text);
          refForm.current?.reset();
          setIsLoading(false);
          toast.success("El mensaje ha sido enviado correctamente.");
        })
        .catch((error) => {
          console.error("Error al enviar el mensaje:", error);
          setIsLoading(false);
          toast.error("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
        });
    }
  };

  return (
    <>
      <Toaster />
      <form
        ref={refForm} 
        onSubmit={handleSubmit} 
        className="bg-white shadow-md rounded-md lg:w-1/2 lg:h-full p-3 flex flex-col gap-3 md:w-full w-1/3 max-sm:w-full max-sm:text-sm"
      >
        <fieldset>
          <legend>Nombre y Apellidos</legend>
          <TextInput
            type="text"
            placeholder="Nombre Completo"
            icon={IoPerson}
            required
            name="name" 
            color={'gray'}
          />
          <legend>Correo:</legend>
          <TextInput
            type="email"
            icon={HiMail}
            placeholder="TuCorreo@example.com"
            required
            name="user_email"  
            />
        </fieldset>
        <fieldset>
          <legend>Motivo:</legend>
          <Textarea
            typeof="text"
            placeholder="Deja tu comentario"
            required
            rows={5}
            name="message" 
          />
        </fieldset>
        <button
          type="submit"
          className="bg-Bottoms text-Text text-lg rounded-lg p-1 hover:bg-Bottoms-dark hover:scale-105 max-sm:text-sm"
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

export default ContactForm;
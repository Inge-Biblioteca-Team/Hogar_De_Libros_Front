import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Textarea, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";

const ContactForm = () => {
  const refFrom = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    //Credenciales de emailjs
    //!Pasar a variables de entorno cuando se haga para la biblioteca y a un hook
    const serviceId = "service_i7aqcj8";
    const templateId = "template_4zz6ypr";
    const apiKey = "szLaujqSRL8H9BsZ1";

    if (refFrom.current) {
      //aca envia el formulario usando las credenciales y datos
      emailjs
        .sendForm(serviceId, templateId, refFrom.current, apiKey)
        .then((result) => console.log(result.text))
        .catch((error) => console.error(error));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" shadow-md rounded-md p-3 flex flex-col gap-3 w-1/3 max-sm:w-full
       max-sm:text-sm"
    >
      <fieldset>
        <legend>Nombre y Apellidos</legend>
        <TextInput
          type="text"
          placeholder="Nombre Completo"
          icon={IoPerson}
          required
        />
        <legend>Correo:</legend>
        <TextInput
          type="email"
          icon={HiMail}
          placeholder="TuCorreo@example.com"
          required
        />
      </fieldset>
      <fieldset>
        <legend>Motivo:</legend>
        <Textarea
          typeof="text"
          placeholder="Deja tu comentario"
          required
          rows={5}
        />
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

export default ContactForm;

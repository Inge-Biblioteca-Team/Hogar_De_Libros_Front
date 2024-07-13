import emailjs from "@emailjs/browser";
import { useRef } from "react";
import './Contactonos.css'


const Contactanos = () => {
    //referencia al formulariop
    const refFrom = useRef<HTMLFormElement>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        //Credenciales de emailjs
        const serviceId = "service_i7aqcj8";
        const templateId = "template_4zz6ypr";
        const apiKey = "szLaujqSRL8H9BsZ1";

        if (refFrom.current) {
            //aca envia el formulario usando las credenciales y datos
            emailjs.sendForm(serviceId, templateId, refFrom.current, apiKey)
                .then((result) => console.log(result.text))
                .catch((error) => console.error(error));
        }
    }; 

    //Renderizacion
    return (
        <form ref={refFrom} onSubmit={handleSubmit}>
            <div className="header-contact">
                <h2> Contactanos </h2>
                <p> Porfavor ingerse la información requerida el formulario </p>
            </div>
            <fieldset className="field-name">
                <label className="symbol-required name" htmlFor="username">Name</label>
                <input name="username" type="text" placeholder="Ejemplo: Juan" required />
            </fieldset>
            <fieldset className="field-email">
                <label className="symbol-required email" htmlFor="email">Email</label>
                <input placeholder="Ejemplo@gmail.com" type="email" name="email" id="email" required />
            </fieldset>
            <fieldset className="field-message">
                <label className="symbol-required message">Mensaje</label>
                <textarea maxLength={500} placeholder="Escribe tu mensaje" name="message" id="message" cols={30} rows={10}></textarea>
            </fieldset>
            <button type="submit" className="btn-send">Enviar</button>
        </form>
        );
}
export default Contactanos;
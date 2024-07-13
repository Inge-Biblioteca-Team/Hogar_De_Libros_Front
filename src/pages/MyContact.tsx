import Contactanos from "../Components/ContactoComponent/Contactanos";

const myContact =() =>{
    return(
        <>
        <section className="mt-6 flex justify-evenly flex-col items-center min-h-screen bg-gray-100" >
      <h2 className="text-2xl mb-8">Artistas</h2>
        <div className="flex justify-evenly items-start h-screen bg-gray-100">
      <div className="w-1/2 text-evenly bg-[#557ee9] p-8 rounded-lg shadow-lg">
        <h3 className="text-xl mb-6">
        Bienvenido a nuestra sección de contacto, donde nos encanta escuchar de ti. 
        ¿Tienes alguna pregunta, sugerencia o simplemente quieres decir hola? 
        Estamos aquí para ayudarte. Completa el formulario a continuación y nos pondremos 
        en contacto contigo lo antes posible. Tu opinión es muy importante para nosotros.
        </h3>
        </div>
        <Contactanos/>
    </div>

    </section>
    </>
    );
} 
export default myContact;
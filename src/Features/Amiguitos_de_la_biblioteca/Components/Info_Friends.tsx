import icono from "../assets/AL_Volutariado_LOGO_Positivo.png";

function Info_Friends() { //muestra la parte informativa de los amiguitos de la biblioteca
  return (
    <>
      <section className=" mt-20 flex flex-col items-center">
        <h2 className="text-2xl mb-8">Amiguitos de la biblioteca</h2>
        <div className="flex items-center mr-32">
          <img className="w-40 h-40 " src={icono} />
          <p className="text-center max-w-md">
            "Amiguitos de la Biblioteca" es un programa de voluntariado dedicado
            a apoyar las actividades y servicios de nuestra biblioteca local.
            Nuestra misión es promover la lectura recreativa y la cultura a
            través de la participación comunitaria y el apoyo voluntario.
          </p>
        </div>
      </section>
    </>
  );
}

export default Info_Friends;

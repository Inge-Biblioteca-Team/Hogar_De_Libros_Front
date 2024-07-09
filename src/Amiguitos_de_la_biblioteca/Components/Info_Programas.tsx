import icono from "../assets/AL_Volutariado_LOGO_Positivo.png";

function Info_Programas() {
  return (
    <>
      <section className="flex flex-col items-center">
        <h2 className="text-2xl mb-8">Amiguitos de la biblioteca</h2>
        
      <div className="flex items-center mr-32">
        <img className="w-40 h-40 " src={icono} />
        <p>
          <span>
            "Amiguitos de la Biblioteca" es un programa de voluntariado dedicado{" "}
            <br />
          </span>
          <span>
            a apoyar las actividades y servicios de nuestra biblioteca local.
            Nuestra <br />
          </span>
          <span>
            misión es promover la lectura recreativa y la cultura a través de la{" "}
            <br />
          </span>
          <span> participación comunitaria y el apoyo voluntario.</span>
        </p>
        </div>
      </section>
      
    </>
  );
}

export default Info_Programas;

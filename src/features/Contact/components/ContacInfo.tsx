const ContacInfo = () => {
  return (
    <aside className=" max-lg:w-full w-1/2">
      <p className="text-xl max-md:text-base">
        <span className="">
          Bienvenido a nuestra sección de contacto. Nos encanta escucharte.
          ¿Tienes alguna pregunta o sugerencia? Estamos aquí para
          ayudarte. Completa el formulario a continuación y nos pondremos en
          contacto contigo lo antes posible. Tu opinión es muy importante para
          nosotros.
        </span>{" "}
        <br />
        <span  className="">También puedes contactarnos vía</span>
        <br />
        <strong>Teléfono: </strong>
        <span>+506 2685-4213</span>
        <br />
        <strong>Whatsapp: </strong>
        <span>+506 7271-6041</span> <br />
        <strong>Correo: </strong><a>bpnicoya@sinabi.go.cr</a>
        <br />
        <strong>Facebook: </strong>{" "}
        <a
          target="blank"
          href="https://www.facebook.com/Biblionicoya?mibextid=JRoKGi"
        >
          Biblioteca Pública Municipal de Nicoya.
        </a>
        <br />
        <strong>En nuestras instalaciones: </strong>{" "}
        <a target="blank" href="https://maps.app.goo.gl/4Gjmf7esqqua8cxB9">
          Frente a las piscinas de ANDE, Nicoya, Costa Rica 59.
        </a>
        <span> De Lunes a Viernes de 8:00 am a 4:00 pm.</span>
        <br />
        <strong className=" hidden max-sm:block">También puedes llenar el formulario adjunto y nos contactaremos pronto.</strong>
      </p>
    </aside>
  );
};

export default ContacInfo;

//Cambiar a variables el telefono, direccion y redes sociales

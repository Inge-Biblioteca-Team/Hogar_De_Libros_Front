const GeneralComputerInfo = () => {
  return (
    <figure className="w-3/12 p-4 shadow-sm max-sm:hidden">
      <img
        src="https://informaciondeinformatica308.wordpress.com/wp-content/uploads/2013/10/computadora-de-escritorio.jpg"
        alt=""
      />
      <figcaption>
        <p className=" max-sm:text-sm">Características Del Equipo</p>
        <ul className=" list-inside list-disc ml-5 max-sm:text-xs max-sm:ml-0">
          <li>Acceso a Internet</li>
          <li>Paquete Microsoft 365: Word,Excel y mas</li>
          <li>Periféricos: Monitor, teclado y mouse</li>
          <li>Puertos USB y Salida de audio 3.5mm</li>
          <li>Firma Digital</li>
        </ul>
      </figcaption>
    </figure>
  );
};

export default GeneralComputerInfo;

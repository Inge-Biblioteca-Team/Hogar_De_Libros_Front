const GeneralComputerInfo = () => {
  return (
    <figure className="w-3/12 p-4 shadow-sm">
      <img
        src="https://informaciondeinformatica308.wordpress.com/wp-content/uploads/2013/10/computadora-de-escritorio.jpg"
        alt=""
      />
      <figcaption>
        <p>Caracteristicas Del Equipo</p>
        <ul className=" list-inside list-disc ml-5">
          <li>Acceso a Internet</li>
          <li>Paquete Microsoft 365: Word,Excel y mas</li>
          <li>Perefericos: Monitor, teclado y mouse</li>
          <li>Puertos USB y Salida de audio 3.5mm</li>
        </ul>
      </figcaption>
    </figure>
  );
};

export default GeneralComputerInfo;

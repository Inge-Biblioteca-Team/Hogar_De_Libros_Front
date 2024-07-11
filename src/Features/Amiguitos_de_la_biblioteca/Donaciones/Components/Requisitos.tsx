function Requeriments() {
  return (
    <section className=" bg-red-600 flex flex-col items-center">
      <h2 className="text-lg">Requisitos</h2>
      <div className="max-w-md mx-auto">
        <ul className="list-disc list-inside text-left">
          <li>Los libros deben estar en buen estado.</li>
          <li>
            Los libros que son de aprendizaje educativo deben tener a lo máximo
            4 años de antigüedad desde su salida.
          </li>
          <li>
            Los libros que contengan ácaros o estén en deterioro no se
            recibirán.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Requeriments;

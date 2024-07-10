function Colaboraciones() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl">Colaboraciones</h1>
        <h2 className="text-lg">¿Que son las colaboraciones?</h2>
        <p>
          <span>Como manera de ayuda hacia la biblioteca se</span>
          <br />
          <span>podran hacer donaciones exlusivamente de</span>
          <br />
          <span>libros para que la comunidad siempre tenga</span>
          <br />
          <span>nuevas opciones de lectura para su aprendizaje</span>
          <br />
          <span>cuyo lirbos que seran donados tendran que cumplir</span>
          <br />
          <span>con ciertos requisitos para poder ser aceptados</span>
        </p>
        <section className="flex flex-col items-center">
          <h2 className="text-lg">Requisitos</h2>
          <ul>
            <li>* Los libros deben estar en buen estado</li>
            <li>
              * Los libros que son de aprendizaje de educativo <br />
              deben de tener a lo maximo 4 años de antiguedad de su salida
            </li>
            <li>
              * Los libros que contengan acaros o en deterioro no se resiviran
            </li>
          </ul>
        </section>
        <section className="flex flex-col items-center">
          <h2 className="lg">Donar libros</h2>
          <span>Para dornar libros complete el siguiente formulario</span>
          <form className="max-w-md mx-auto mt-10 p-6 bg-gray-600 rounded-md shadow-md">
            <div>
              <label htmlFor="Autor"> Nombre de autor</label>
              <input type="text" id="Autor" />
            </div>
            <div>
              <label htmlFor="Titulo">Nombre del libro</label>
              <input type="text" id="Titulo" />
            </div>
            <div>
              <label htmlFor="Genero">Genero del libro</label>
              <input type="text" id="Genero" />
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export default Colaboraciones;

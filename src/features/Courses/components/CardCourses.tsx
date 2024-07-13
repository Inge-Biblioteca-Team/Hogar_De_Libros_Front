import { Course2 } from "../types/Courses";

const CardCourses = ({ Courses }: { Courses: Course2 }) => {
  return (
    <figure className="rounded-md w-full shadow-lg flex flex-col justify-center items-center pb-3">
      <img
        className="h-64 w-80 mb-8 border-t border-transparent rounded-t-md object-cover"
        src={Courses.Imagen}
        alt={Courses.Nombre}
      />
      <figcaption className=" text-lg break-words max-w-80 px-4">
        <h3>{Courses.Nombre}</h3>
        <p>
          <span>{Courses.Tipo}</span>
          <br />
          <span>Lugar:</span>
          <br />
          <span>Cupos:{Courses.Cupos}</span>
          <br />
          <span>Fecha y Hora:</span>
        </p>
        <button
          className="bg-Bottoms text-Text text-lg rounded-lg p-1.5 mt-5 mb-5
      hover:bg-Bottoms-dark hover:scale-105"
          type="button"
        >
          Matricular -&gt;{" "}
       
        </button>
      </figcaption>
    </figure>
  );
};
export default CardCourses;

import { Courses } from "../types/Courses";

const CardCourses = ({ Courses }: { Courses: Courses }) => {
  return (
    <figure
      className=" rounded-md w-full shadow-lg flex flex-col justify-center items-center pb-3
    "
    >
      <img
        className="h-64 w-80 mb-8 border-t border-transparent rounded-t-md object-fit
            max-sm:h-48 max-sm:rounded-md"
        src={Courses.image}
        alt={Courses.courseType}
      />
      <figcaption className=" text-lg break-words max-w-80 px-4 max-sm:text-sm">
        <strong>{Courses.courseType}</strong>
        <p>
          <span>{Courses.instructor}</span>
          <br />
          <span>Lugar: {Courses.location}</span>
          <br />
          {Courses.capacity ? (
            <span>Cupos:{Courses.capacity}</span>
          ) : (
            <span>Abierto a todo Publico</span>
          )}
          <br />
          <span>Fecha: {new Date(Courses.endDate).toLocaleDateString()}</span>
        </p>
        <button
          className="bg-Bottoms text-Text text-lg rounded-lg p-1.5 mt-5 mb-5
      hover:bg-Bottoms-dark hover:scale-105
      max-sm:text-sm"
          type="button"
        >
          Matricular -&gt;{" "}
        </button>
      </figcaption>
    </figure>
  );
};
export default CardCourses;

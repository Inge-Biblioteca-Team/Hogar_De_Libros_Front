import { useState } from "react";
import { useQuery } from "react-query";
import { getCourses } from "../services/SvCourses";
import { Course2 } from "../types/Courses";
import CardCourses from "../components/CardCourses";

const UpcomingCourses = () => {
  const {
    data: UpCourses,
    isLoading,
    error,
  } = useQuery<Course2[], Error>("courses", getCourses);
  const [showAll, setShowAll] = useState(false);

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error: {error.message}</span>;

  const handleShowMore = () => {
    setShowAll(true);
  };

  const displayedCourses = showAll ? UpCourses : UpCourses?.slice(0, 3);

  return (
    <section className="m-5 flex items-center flex-col" id="Courses">
      <h2 className="font-bold text-2xl mb-5">Cursos disponibles</h2>
      <div className="grid grid-cols-3 gap-4">
        {displayedCourses?.map((Courses: Course2, index: number) => (
          <CardCourses key={index} Courses={Courses} />
        ))}
      </div>
      {!showAll && UpCourses && UpCourses.length > 3 && (
        <button
          type="button"
          onClick={handleShowMore}
          className="mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Ver más
        </button>
      )}
    </section>
  );
};

export default UpcomingCourses;

//Ver menos falta
//Cambiar a carrusel y cambiar a flex

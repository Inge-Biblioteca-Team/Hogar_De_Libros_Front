import { useState } from "react";
import { useQuery } from "react-query";
import { GetNextCourses } from "../services/SvCourses";
import { ApiCourseResponse, NextCourses } from "../types/Courses";
import CardViewCourses from "../components/CardViewCourses";

const NextViewCourses = () => {
  const { data: ViewCourses } = useQuery<ApiCourseResponse, Error>(
    ["CourseCatalog"],
    () => GetNextCourses(0, 0,"11"),
    {
      staleTime: 600,
    }
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const coursesPerPage = 4;

  const totalCourses = ViewCourses?.data?.length || 0;
  const totalPages = Math.ceil(totalCourses / coursesPerPage);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const start = currentIndex * coursesPerPage;
  const end = start + coursesPerPage;
  const currentCourses = ViewCourses?.data?.slice(start, end) || [];

  return (
    <section className="container mx-auto text-center py-8">
      <h2 className="text-4xl font-bold mb-4">Cursos Próximos</h2>
      <p className="text-lg mb-8">
        Explora y matricula fácilmente nuestros cursos.
      </p>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={prevSlide}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold p-3 rounded-full transition duration-300 ease-in-out hidden sm:flex"
          aria-label="Anterior"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 max-lg:grid-cols-4 gap-6">
          {currentCourses.map((course: NextCourses) => (
            <CardViewCourses key={course.Id} course={course} />
          ))}
        </div>

        <button
          type="button"
          onClick={nextSlide}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold p-3 rounded-full transition duration-300 ease-in-out hidden sm:flex"
          aria-label="Siguiente"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => setCurrentIndex(pageIndex)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === pageIndex ? "bg-blue-600" : "bg-gray-300"
            } focus:outline-none`}
            aria-label={`Página ${pageIndex + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default NextViewCourses;

import { useState } from "react";

import { useQuery } from "react-query";
import CardProgram from "../components/CardProgram";
import { GetPrograms } from "../services/SvPrograms";
import { Programs } from "../types/Programs";

const CurrentPrograms = () => {
  const {
    data: programs = [],
    isLoading,
    error,
  } = useQuery<Programs[], Error>("Programs", GetPrograms);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
    prevIndex === 0 ? programs?.length - 4 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === programs?.length - 4 ? 0 : prevIndex + 1
    );
  };

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error: {error.message}</span>;

  return (
    <section
      className="relative w-full max-w-4xl mx-auto max-sm:w-4/5"
      id="Programs"
    >
      <h2 className="text-center font-bold text-2xl mb-6">Programas</h2>
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={prevSlide}
          className="bg-gray-300 rounded-full p-2 max-sm:hidden"
        >
          &lt;
        </button>
        <div className="w-full overflow-hidden max-sm:overflow-x-scroll">
          <article
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {/* {programs?.map((program, index) => (
              <CardProgram key={index} program={program} />
            ))} */}
          </article>
        </div>
        <button
          type="button"
          onClick={nextSlide}
          className="bg-gray-300 rounded-full p-2 max-sm:hidden"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default CurrentPrograms;

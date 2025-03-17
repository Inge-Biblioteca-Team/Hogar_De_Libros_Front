import { Carousel } from "flowbite-react";
import { useQuery } from "react-query";
import { GetNextCourses } from "../services/SvCourses";
import { ApiCourseResponse, NextCourses } from "../types/Courses";
import CardCourses from "../components/CardCourses";

const UpcomingCourses = ({ home }: { home?: boolean }) => {
  const { data: Courses } = useQuery<ApiCourseResponse, Error>(
    ["CourseCatalog"],
    () => GetNextCourses(),
    {
      staleTime: 600,
    }
  );

  const chunkArray = (arr: NextCourses[], size: number): NextCourses[][] => {
    const result: NextCourses[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const isSmallScreen = window.innerWidth <= 740; // max-sm en Tailwind
  const groupedCourses = chunkArray(Courses?.data || [], isSmallScreen ? 1 : 3);

  return (
    <>
      {Courses && Courses.count > 0 && (
        <section
          className="space-y-4 w-11/12 max-lg:w-full max-sm:pl-4 max-sm:pr-4
          max-lg:pl-8 max-lg:pr-8"
          id="Courses"
        >
          <h2  className="font-bold text-4xl text-center 
          max-sm:text-xl">
            Cursos disponibles
          </h2>
          {home && (
            <h4 className=" text-center text-md mb-2">
              Ven a pasar un tiempo especial junto a nosotros. Al mismo tiempo
              que aprendes cosas nuevas.
            </h4>
          )}
          <Carousel
            indicators={false}
            pauseOnHover
            leftControl
            rightControl
            className="max-sm:w-full h-[30rem] md:w-full md:h-full"
            style={{ height: "30rem" }}
          >
            {groupedCourses.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className=" flex justify-center md:pr-2 md:pl-2 md:w-full md:h-full max-sm:w-full max-sm:gap-20 gap-x-4"
              >
                {group.map((course) => (
                  <CardCourses Courses={course} key={"CO" + course.Id} />
                ))}
              </div>
            ))}
          </Carousel>
        </section>
      )}
    </>
  );
};

export default UpcomingCourses;

import { Carousel } from "flowbite-react";
import { useQuery } from "react-query";
import { GetNextCourses } from "../services/SvCourses";
import { ApiCourseResponse, NextCourses } from "../types/Courses";
import CardCourses from "../components/CardCourses";

const UpcomingCourses = ({ home }: { home?: boolean }) => {
  const { data: Courses } = useQuery<ApiCourseResponse, Error>(
    ["CourseCatalog"],
    () => GetNextCourses(0, 0, "11"),
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

  const isSmallScreen = window.innerWidth <= 640; // max-sm en Tailwind
  const groupedCourses = chunkArray(Courses?.data || [], isSmallScreen ? 1 : 4);

  return (
    <>
      {Courses && Courses.count > 0 && (
        <section
          className=" flex items-center max-sm:pr-4 max-sm:pl-4  max-sm:w-full  w-4/5 flex-col "
          id="Courses"
        >
          <h2 className=" font-bold text-2xl 2xl:text-4xl">Cursos disponibles</h2>
          {home&&
          <h4 className=" text-center text-md mb-2">Ven a pasar un tiempo especial junto a nosotros. Al mismo tiempo que aprendes cosas nuevas.</h4>
          }
          <Carousel
            indicators={false}
            pauseOnHover
            leftControl
            rightControl
            style={{ height: "30rem" }}
          >
            {groupedCourses.map((group, groupIndex) => (
              <div key={groupIndex} className="2xl: flex justify-center max-sm:gap-20 gap-x-4">
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

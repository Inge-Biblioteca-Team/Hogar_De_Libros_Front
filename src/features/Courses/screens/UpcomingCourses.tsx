import { Carousel } from "flowbite-react";
import { useQuery } from "react-query";
import { GetNextCourses } from "../services/SvCourses";
import { ApiCourseResponse, NextCourses } from "../types/Courses";
import CardCourses from "../components/CardCourses";

const UpcomingCourses = () => {
  const { data: Courses } = useQuery<ApiCourseResponse, Error>(
    ["CourseCatalog"],
    () => GetNextCourses(0, 0),
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

  const groupedCourses = chunkArray(Courses?.data || [], 4);

  return (
    <>
      {Courses && Courses.count > 0 && (
        <section
          className="m-5 flex items-center w-4/5 flex-col max-sm:m-0"
          id="Courses"
        >
          <h2 className="font-bold text-3xl">Cursos disponibles</h2>
          <Carousel
            indicators={false}
            pauseOnHover
            leftControl
            rightControl
            style={{ height: "30rem" }}
          >
            {groupedCourses.map((group, groupIndex) => (
              <div key={groupIndex} className=" flex justify-center gap-x-4">
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

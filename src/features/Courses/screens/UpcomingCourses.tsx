import { useQuery } from "react-query";
import { GetNextCourses } from "../services/SvCourses";
import { ApiCourseResponse } from "../types/Courses";
import Skeleton from "react-loading-skeleton";
import { Button, Carousel } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import CardCourseForCarrousel from "../components/CardCourseForCarrousel";

const UpcomingCourses = ({ home }: { home?: boolean }) => {
  const { data: Courses, isLoading } = useQuery<ApiCourseResponse, Error>(
    ["CourseCatalog"],
    () => GetNextCourses(1, 5),
    {
      staleTime: 1200,
      refetchOnWindowFocus: false,
    }
  );

  const nav = useNavigate();

  const goTo = () => {
    nav("/HogarDeLibros/Cronograma_Cursos");
  };

  return (
    <>
      {isLoading && (
        <>
          <h2
            className="font-bold text-4xl text-center 
         max-sm:text-xl"
          >
            Cursos disponibles
          </h2>
          <div className="bg-white w-full max-lg:w-full h-[28rem] max-sm:h-[23rem] rounded-md p-2">
            <Skeleton style={{ height: "19rem" }} />
            <Skeleton width={250} height={20} />
            <Skeleton width={220} height={20} />
          </div>
        </>
      )}

      {!isLoading && Courses && Courses.count > 0 && (
        <div className=" flex flex-col items-center space-y-4">
          <h2
            className="font-bold text-4xl text-center 
          max-sm:text-xl"
          >
            Cursos disponibles
          </h2>
          {home && (
            <h4 className="text-center text-md mb-2">
              Ven a pasar un tiempo especial junto a nosotros. Al mismo tiempo
              que aprendas cosas nuevas.
            </h4>
          )}

          <Carousel pauseOnHover indicators={false} slideInterval={5000}>
            {Courses.data.map((course) => (
              <CardCourseForCarrousel Courses={course} key={"CO" + course.Id} />
            ))}
          </Carousel>
          <Button color={"blue"} size={"xl"} onClick={goTo}>
            <span>Ver más</span>
          </Button>
        </div>
      )}
    </>
  );
};

export default UpcomingCourses;

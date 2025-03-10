import { Select, Timeline } from "flowbite-react";
import CourseTimeItem from "../components/CourseTimeItem";
import { useQuery } from "react-query";
import { ApiCourseResponse } from "../types/Courses";
import { GetNextCourses } from "../services/SvCourses";
import { CiCalendarDate } from "react-icons/ci";
import { FaReadme } from "react-icons/fa6";
import { useState } from "react";
import {
  BreadCrumbsItems,
  BreadLastItems,
} from "../../../components/Breadcrumbs/BreadCrumbsItems";
import Loader from "../../OPAC/Assets/LoaderOPAC.gif";
import NoResults from "../../../components/NoResults";
const CoruseSchedule = () => {
  const [month, setMonth] = useState<string>("");
  const [type, setType] = useState<string>("");

  const currentDate = new Date();
  const curretnMonth = currentDate.getMonth();
  const { data: Courses, isLoading } = useQuery<ApiCourseResponse, Error>(
    ["CourseCatalog", month, type],
    () => GetNextCourses(0, 0, month || "11", type),
    {
      staleTime: 600,
    }
  );

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const monthOpt = [];
  for (let i = 0; i < 3; i++) {
    const monthIndex = (curretnMonth + i) % 12;
    monthOpt.push({ month: months[monthIndex], value: monthIndex + 1 });
  }

  return (
    <>
      <BreadCrumbsItems>
        <BreadLastItems text="Próximos cursos" />
      </BreadCrumbsItems>
      <div className=" w-full flex flex-col justify-center items-center pb-3">
        <div className=" flex gap-4 w-4/5 items-start ml-5 max-sm:w-11/12 max-sm:gap-2 max-sm:ml-2">
          <Select
            icon={CiCalendarDate}
            onChange={(event) => setMonth(event.target.value)}
          >
            {monthOpt.map((opt, index) => (
              <option key={index} value={opt.value}>
                {opt.month}
              </option>
            ))}
          </Select>
          <Select
            icon={FaReadme}
            onChange={(event) => setType(event.target.value)}
          >
            <option value="">Tipo de curso</option>
            <option value="Curso">Curso</option>
            <option value="Taller">Taller</option>
            <option value="Capacitación">Capacitación</option>
            <option value="Cómputo">Cómputo</option>
            <option value="Curso Articulado">Curso Articulado</option>
            <option value="Manualidades">Manualidades</option>
          </Select>
        </div>
        <div
          className=" w-4/5 overflow-x-scroll pt-7  px-8 custom-bar"
          style={{ height: "40rem" }}
        >
          {isLoading ? (
            <div className=" w-full flex items-center justify-center">
              <figure>
                <img width={400} src={Loader} alt="...Cargando" />
                <figcaption className=" text-center">...Cargando</figcaption>
              </figure>
            </div>
          ) : Courses ? (
            <Timeline
              className="custom-timeline border-blue-900 h-full "
              horizontal
            >
              {Courses?.count == 0 ? (
                <span>No hay cursos próximos a la fecha de hoy </span>
              ) : (
                Courses?.data.map((course) => (
                  <CourseTimeItem course={course} key={course.Id} />
                ))
              )}
            </Timeline>
          ) : (
            <NoResults />
          )}
          <div className=" w-full  flex items-center justify-center"></div>
        </div>
      </div>
    </>
  );
};

export default CoruseSchedule;

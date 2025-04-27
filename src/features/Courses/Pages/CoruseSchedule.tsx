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
import Loader from "../../../components/Loader";
const CoruseSchedule = () => {
  const [month, setMonth] = useState<string>("");
  const [type, setType] = useState<string>("");

  const currentDate = new Date();
  const curretnMonth = currentDate.getMonth();
  const { data: Courses, isLoading } = useQuery<ApiCourseResponse, Error>(
    ["CourseCatalog", month, type],
    () => GetNextCourses(0, 0, month, type),
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
      <main className=" w-full px-5">
        <section className=" flex gap-5 max-md:flex-col">
        <Select
            icon={CiCalendarDate}
            onChange={(event) => setMonth(event.target.value)}
          >
            <option value="">Seleccione el mes</option>
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
        </section>
        <section>
        {isLoading && (
            <div className=" w-full flex items-center justify-center">
              <Loader />
            </div>
          )}
          {!isLoading && (!Courses || Courses.count == 0) && (
            <strong className=" flex w-full items-center justify-center text-2xl">
              No hay cursos Próximos
            </strong>
          )}
          {!isLoading && Courses && Courses.count > 0 && (
            <div className=" p-5">
            <Timeline className="custom-timeline border-blue-900">
              {Courses.data.map((course) => (
                <CourseTimeItem course={course} key={course.Id} />
              ))}
            </Timeline>
              </div>
          )}

        </section>
      </main>
    </>
  );
};

export default CoruseSchedule;

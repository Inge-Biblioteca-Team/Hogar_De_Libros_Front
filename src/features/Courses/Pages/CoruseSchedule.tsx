import { Breadcrumb, Select, Timeline } from "flowbite-react";
import CourseTimeItem from "../components/CourseTimeItem";
import { useQuery } from "react-query";
import { ApiCourseResponse } from "../types/Courses";
import { GetNextCourses } from "../services/SvCourses";
import { HomeCrumb, LastCrumb } from "../../../components/BreadCrumb";
import { CiCalendarDate } from "react-icons/ci";
import { FaReadme } from "react-icons/fa6";
import { useState } from "react";
const CoruseSchedule = () => {
  const [month, setMonth] = useState<string>("");
  const [type, setType] = useState<string>("");

  const { data: Courses } = useQuery<ApiCourseResponse, Error>(
    ["CourseCatalog", month, type],
    () => GetNextCourses(0, 0, month, type),
    {
      staleTime: 600,
    }
  );

  const meses = [
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

  const fechaActual = new Date();
  const mesActual = fechaActual.getMonth();

  const opcionesMeses = [];
  for (let i = 0; i < 3; i++) {
    const mesIndex = (mesActual + i) % 12;
    opcionesMeses.push({ mes: meses[mesIndex], value: mesIndex + 1 });
  }

  
  return (
    <>
      <Breadcrumb className=" custom-breadcrumb">
        <HomeCrumb />
        <LastCrumb CurrentPage="Proximos Cursos" />
      </Breadcrumb>
      <div className=" w-full flex flex-col justify-center items-center mt-3 pb-3">
        <div className=" flex gap-4 w-4/5 items-start ml-5">
          <Select
            icon={CiCalendarDate}
            onChange={(event) => setMonth(event.target.value)}
          >
            <option value="">Mes De Realización</option>
            {opcionesMeses.map((opcion, index) => (
              <option key={index} value={opcion.value}>
                {opcion.mes}
              </option>
            ))}
          </Select>
          <Select
            icon={FaReadme}
            onChange={(event) => setType(event.target.value)}
          >
            <option value="">Tipo de Curso</option>
            <option value="Taller">Talleres</option>
            <option value="Info">Informatica</option>
            <option value="Infan">Talleres Infantiles</option>
          </Select>
        </div>
        <div
          className=" w-4/5 overflow-x-scroll pt-7 px-8 custom-bar"
          style={{ height: "42rem" }}
        >
          <Timeline
            className="custom-timeline border-blue-900 h-full "
            horizontal
          >
            {Courses?.count == 0 ? (
              <span>No hay Cursos Proximos</span>
            ) : (
              Courses?.data.map((course) => (
                <CourseTimeItem course={course} key={course.Id} />
              ))
            )}
          </Timeline>
          <div className=" w-full flex items-center justify-center"></div>
        </div>
      </div>
    </>
  );
};

export default CoruseSchedule;

import { Select, Timeline } from "flowbite-react";
import { useState } from "react";
import { useQuery } from "react-query";
import {
  BreadCrumbsItems,
  BreadLastItems,
} from "../../../components/Breadcrumbs/BreadCrumbsItems";
import { ActivitieList } from "../types/Programs";
import { GetProgramsActivitiesList } from "../services/SvPrograms";
import { CiCalendarDate } from "react-icons/ci";
import { FaReadme } from "react-icons/fa6";
import ActivitieTimeItem from "../components/ActivitieTimeItem";
import ProgramsOPT from "../../../components/ProgramsOPT";
import Loader from "../../OPAC/Assets/LoaderOPAC.gif";
import NoResults from "../../../components/NoResults";

const ProgramActivities = () => {
  const [month, setMonth] = useState<string>("");
  const [program, setProgram] = useState<string>("");

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

  const currentDate = new Date();
  const curretnMonth = currentDate.getMonth();

  const monthOpt = [];
  for (let i = 0; i < 3; i++) {
    const monthIndex = (curretnMonth + i) % 12;
    monthOpt.push({ month: months[monthIndex], value: monthIndex + 1 });
  }

  const { data: Activities, isLoading } = useQuery<ActivitieList, Error>(
    ["Activities", month, program],
    () => GetProgramsActivitiesList(program, month),
    {
      staleTime: 600,
    }
  );

  return (
    <>
      <BreadCrumbsItems>
        <BreadLastItems text="Próximas actividades" />
      </BreadCrumbsItems>
      <div className=" w-full flex flex-col justify-center items-center mt-3 pb-3">
        <div className=" flex gap-4 w-4/5 items-start ml-5 max-sm:w-11/12 max-sm:ml-0">
          <Select
            className=" max-sm:w-full"
            icon={CiCalendarDate}
            onChange={(event) => setMonth(event.target.value)}
          >
            <option value="">Mes del evento</option>
            {monthOpt.map((opt, index) => (
              <option key={index} value={opt.value}>
                {opt.month}
              </option>
            ))}
          </Select>
          <Select
            icon={FaReadme}
            onChange={(event) => setProgram(event.target.value)}
          >
            <option value="">Programa</option>
            <ProgramsOPT />
          </Select>
        </div>
        <div
          className=" w-4/5 overflow-x-scroll pt-7 px-8 custom-bar"
          style={{ height: "35rem" }}
        >
          {isLoading ? (
            <div className=" w-full flex items-center justify-center">
              <figure>
                <img width={400} src={Loader} alt="...Cargando" />
                <figcaption className=" text-center">...Cargando</figcaption>
              </figure>
            </div>
          ) : Activities ? (
            <Timeline
              className="custom-timeline border-blue-900 h-full "
              horizontal
            >
              {Activities && Activities?.count > 0 ? (
                Activities?.data.map((activitie) => (
                  <ActivitieTimeItem
                    activitie={activitie}
                    key={activitie.activitieID}
                  />
                ))
              ) : (
                <strong className=" flex w-full items-center justify-center text-2xl">
                  No hay actividades próximas
                </strong>
              )}
            </Timeline>
          ) : (
            <NoResults />
          )}
          <div className=" w-full flex items-center justify-center"></div>
        </div>
      </div>
    </>
  );
};

export default ProgramActivities;

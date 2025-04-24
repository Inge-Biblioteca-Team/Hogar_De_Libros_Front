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
import Loader from "../../../components/Loader";

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
      <main className=" w-full px-4">
        <section className=" flex gap-4 max-md:flex-col">
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
        </section>
        <section>
        {isLoading && (
            <div className=" w-full flex items-center justify-center">
              <Loader />
            </div>
          )}
          {!isLoading && (!Activities || Activities.count == 0) && (
            <strong className=" flex w-full items-center justify-center text-2xl">
              No hay actividades próximas
            </strong>
          )}
          {!isLoading && Activities && Activities.count > 0 && (
            <div className=" p-5">
            <Timeline className="custom-timeline border-blue-900 grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2">
              {Activities.data.map((activitie) => (
                  <ActivitieTimeItem
                  activitie={activitie}
                  key={activitie.activitieID}
                />
              ))}
            </Timeline>
              </div>
          )}
        </section>
      </main>
    </>
  );
};

export default ProgramActivities;

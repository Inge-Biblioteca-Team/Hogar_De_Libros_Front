import { useState } from "react";
import { GetNextEvents } from "../services/SvEvents";
import { ApiEventsResponse } from "../types/Events";
import { useQuery } from "react-query";
import { Select, Timeline } from "flowbite-react";
import { CiCalendarDate } from "react-icons/ci";
import { FaReadme } from "react-icons/fa6";
import EventTimeItem from "../components/EventTimeItem";
import {
  BreadCrumbsItems,
  BreadLastItems,
} from "../../../components/Breadcrumbs/BreadCrumbsItems";

const EventsSchedule = () => {
  const [month, setMonth] = useState<string>("");
  const [type, setType] = useState<string>("");

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

  const { data: events } = useQuery<ApiEventsResponse, Error>(
    ["EventCatalog", month, type],
    () => GetNextEvents(month, type),
    {
      staleTime: 600,
    }
  );

  return (
    <>
      <BreadCrumbsItems>
        <BreadLastItems text="Próximos eventos" />
      </BreadCrumbsItems>
      <div className=" w-full flex flex-col justify-center items-center mt-3 pb-3">
        <div className=" flex gap-4 w-4/5 items-start ml-5 max-sm:w-11/12 max-sm:ml-0">
          <Select
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
            onChange={(event) => setType(event.target.value)}
          >
            <option value="">Tipo de evento</option>
            <option value="Exposición">Exposición de libro</option>
            <option value="Presentación">Presentación de libro</option>
            <option value="cultural">Artístico cultural</option>
            <option value="Tertulias">Tertulias</option>
            <option value="Inducción">Inducción</option>
          </Select>
        </div>
        <div
          className=" w-4/5 overflow-x-scroll pt-7 px-8 custom-bar"
          style={{ height: "40rem" }}
        >
          <Timeline
            className="custom-timeline border-blue-900 h-full"
            horizontal
          >
            {events?.count == 0 ? (
              <strong className=" flex w-full items-center justify-center text-2xl">
                No hay eventos Próximos
              </strong>
            ) : (
              events?.data.map((event) => (
                <EventTimeItem event={event} key={event.id} />
              ))
            )}
          </Timeline>
          <div className=" w-full flex items-center justify-center"></div>
        </div>
      </div>
    </>
  );
};

export default EventsSchedule;

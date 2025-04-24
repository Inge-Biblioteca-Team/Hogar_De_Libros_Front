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
import Loader from "../../../components/Loader";

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

  const { data: events, isLoading } = useQuery<ApiEventsResponse, Error>(
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
      <main className=" w-full px-4">
        <section className=" flex gap-4">
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
        </section>
        <section>
          {isLoading && (
            <div className=" w-full flex items-center justify-center">
              <Loader />
            </div>
          )}
          {!isLoading && (!events || events.count == 0) && (
            <strong className=" flex w-full items-center justify-center text-2xl">
              No hay eventos Próximos
            </strong>
          )}
          {!isLoading && events && events.count > 0 && (
            <div className=" p-5">
            <Timeline className="custom-timeline border-blue-900">
              {events.data.map((event) => (
                <EventTimeItem event={event} key={event.id} />
              ))}
            </Timeline>
              </div>
          )}
        </section>
      </main>
    </>
  );
};

export default EventsSchedule;

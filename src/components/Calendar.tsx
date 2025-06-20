import FullCalendar from "@fullcalendar/react";
import esLocale from "@fullcalendar/core/locales/es";
import { GetCalendarItems } from "../Services/Stats";
import { useQuery } from "react-query";
import { weekItems } from "../Types/GlobalTypes";
import listPlugin from "@fullcalendar/list";

const Calendar = () => {
  const today = new Date();

  const { data: Week } = useQuery<weekItems[]>(
    ["WeekActivities"],
    () => GetCalendarItems(),
    {
      staleTime: 600,
    }
  );
  return (
    <>
    <style>
      {`
        .dark .fc-list-day-cushion {
          background-color: #171717 !important;
        }
        .dark .fc-list-event-time,
        .dark .fc-list-event-title,
        .dark .fc-list-empty-text {
          color: white !important;
        }
          .dark .fc-list-event:hover td {
          background-color: #161616 !important;
        }
      `}
    </style>
      <FullCalendar
        plugins={[listPlugin]}
        initialView="listWeek"
        headerToolbar={false}
        validRange={{
          start: today.toISOString().split("T")[0],
          end: new Date(today.setDate(today.getDate() + 7))
            .toISOString()
            .split("T")[0],
        }}
        locale={esLocale}
        weekends={false}
        events={Week}
        eventTimeFormat={{
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }}
        eventContent={(eventInfo) => {
          return (
            <div>
              <b>{eventInfo.event.title}</b>
            </div>
          );
        }}
        height="100%" 
      />
    </>
  );
};

export default Calendar;

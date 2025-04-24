import { format } from "@formkit/tempo";
import { Timeline } from "flowbite-react";
import { Event } from "../types/Events";

import { CiCalendarDate } from "react-icons/ci";
const EventTimeItem = ({ event }: { event: Event }) => {
  const eventTime = event.eventTime;
  const eventDate = event.date;
  const dateTimeString = `${eventDate}T${eventTime}`;
  const dateTime = new Date(dateTimeString);

  const CourseDate = format({
    date: eventDate,
    format: "MMMM YYYY",
    tz: "America/Costa_Rica",
  });
  const time = format({
    date: dateTime,
    format: "h:mm A",
    tz: "America/Costa_Rica",
  });
  const fullDate = format({
    date: eventDate,
    format: "DD MMMM YYYY",
    tz: "America/Costa_Rica",
  });

  return (
    <>
      <Timeline.Item>
        <Timeline.Point icon={CiCalendarDate} className="custom max-sm:pb-1" />
        <Timeline.Content>
          <Timeline.Time className=" text-zinc-600 text-xl">{CourseDate.toUpperCase()}</Timeline.Time>
          <Timeline.Title className="line-clamp-1 text-2xl">
            {event.title}
          </Timeline.Title>
          <Timeline.Body>
            <div className="dark:bg-[#2d2d2d] bg-white rounded-lg p-2 grid grid-cols-3 text-black text-xl">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-96 max-md:h-full"
              />
              <div className=" flex flex-col ml-6 gap-5 col-span-2 ">
                <span className="font-extrabold">{event.eventType} </span>
                <span className="font-extrabold">{event.title} </span>
                <span className="">{event.details} </span>
                <span className="">Fecha: {fullDate.toUpperCase()}</span>
                <span className="">
                  {event.location} {time}{" "}
                </span>
                <span className="">
                  A Cargo de <br />
                  {event.instructor}{" "}
                </span>
                <span className="">
                  Recomendado para <br />
                  {event.objetiveAge}{" "}
                </span>
              </div>
            </div>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </>
  );
};

export default EventTimeItem;

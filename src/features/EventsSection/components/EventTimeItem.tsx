import { format } from "@formkit/tempo";
import { Timeline, Card } from "flowbite-react";
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
      <Timeline.Item className=" !w-72 min-w-72 max-sm:pb-2">
        <Timeline.Point  icon={CiCalendarDate} className="custom max-sm:pb-1" />
        <Timeline.Content>
          <Timeline.Time>{CourseDate}</Timeline.Time>
          <Timeline.Title className=" h-14 line-clamp-1">
            {event.eventType}
          </Timeline.Title>
          <Timeline.Body>
            <Card className="p0 hover:scale-105 transition-transform">
              <figure className=" w-full rounded-xl">
                <img
                  className=" w-full rounded-t-lg h-40"
                  src={event.image}
                  alt=""
                />
              </figure>
              <div className=" flex flex-col ml-6 gap-2 h-72 mr-6 ">
                <span className=" font-bold text-black">
                  {event.title}{" "}
                </span>
                <span>{event.details} </span>
                <span>Fecha: {fullDate.toUpperCase()}</span>
                <span>
                  {event.location} {time}{" "}
                </span>
                <span>
                  A Cargo de <br />
                  {event.instructor}{" "}
                </span>
              </div>
            </Card>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </>
  );
};

export default EventTimeItem;

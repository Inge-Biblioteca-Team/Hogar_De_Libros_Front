import { format } from "@formkit/tempo";
import { formatToDMY } from "../../../components/FormatTempo";
import { Activitie } from "../types/Programs";
import { Card, Timeline } from "flowbite-react";
import { CiCalendarDate } from "react-icons/ci";

const ActivitieTimeItem = ({ activitie }: { activitie: Activitie }) => {


  const ActivitieDate = format({
    date: activitie.activitiDate,
    format: "MMMM YYYY",
    tz: "America/Costa_Rica",
  });
  return (
    <>
      <Timeline.Item className=" !w-72 min-w-72 max-sm:pb-2">
        <Timeline.Point icon={CiCalendarDate} className="custom max-sm:pb-1" />
        <Timeline.Content>
          <Timeline.Time>{ActivitieDate}</Timeline.Time>
          <Timeline.Title className="h-14 line-clamp-1">
            {activitie.programName}
          </Timeline.Title>
          <Timeline.Body>
            <Card className="dark:bg-[#2d2d2d] p0 hover:scale-105 transition-transform">
              <figure className=" w-full rounded-xl">
                <img
                  className=" w-full rounded-t-lg h-40"
                  src={activitie.image}
                  alt=""
                />
              </figure>
              <div className="dark:text-white flex flex-col ml-6 gap-2 h-52 mr-6 ">
                <span className="dark:text-white font-bold text-black">
                  {activitie.activityType}{" "}
                </span>
                <span className="dark:text-white font-bold text-black">
                  {activitie.activitieName}{" "}
                </span>
                <span className="dark:text-white font-bold text-black">
                  {activitie.description}{" "}
                </span>
                <span>
                  Fecha de actividad: {formatToDMY(activitie.activitiDate)}
                </span>
              </div>
            </Card>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </>
  );
};

export default ActivitieTimeItem;

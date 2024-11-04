import { formatToDMY } from "../../../components/FormatTempo";
import { Activitie } from "../types/Programs";
import { Card, Timeline } from "flowbite-react";

const ActivitieTimeItem = ({ activitie }: { activitie: Activitie }) => {
  return (
    <>
      <Timeline.Item className=" !w-72 min-w-72">
        <Timeline.Point className="custom" />
        <Timeline.Content>
          <Timeline.Time>{formatToDMY(activitie.activitiDate)}</Timeline.Time>
          <Timeline.Title className=" h-14 line-clamp-1">
            {activitie.programName}
          </Timeline.Title>
          <Timeline.Body>
            <Card className="p0 hover:scale-105">
              <figure className=" w-full rounded-xl">
                <img
                  className=" w-full rounded-t-lg h-40"
                  src={activitie.image}
                  alt=""
                />
              </figure>
              <div className=" flex flex-col ml-6 gap-2 h-52 mr-6 ">
                <span className=" font-bold text-black">
                  {activitie.activityType}{" "}
                </span>
                <span className=" font-bold text-black">
                  {activitie.activitieName}{" "}
                </span>
                <span className=" font-bold text-black">
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

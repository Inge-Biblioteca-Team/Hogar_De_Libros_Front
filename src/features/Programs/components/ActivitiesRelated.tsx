import { Card } from "flowbite-react";
import { Activitie } from "../types/Programs";
import { formatToDMY } from "../../../components/FormatTempo";

const ActivitiesRelated = ({ activities }: { activities: Activitie }) => {
  return (
    <Card className=" hover:scale-105">
      <div className=" grid-cols-3 grid">
        <figure className=" col-span-1">
          <img
            className=" h-[5rem] w-full rounded-lg shadow-2xl"
            src={activities.image}
            alt={activities.programName}
          />
        </figure>
        <div className=" pl-2 col-span-2">
          <div className="line-clamp-1">
            <b>{activities.activityType}: </b>
            <span>{activities.activitieName}</span>
          </div>
          <div>
            <b>Descripción: </b>
            <span>{activities.description} </span>
          </div>
          <div>
            <b>Fecha: </b>
            <span>{formatToDMY(activities.activitiDate)}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ActivitiesRelated;

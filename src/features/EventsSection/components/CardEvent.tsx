import { Card } from "flowbite-react";
import { formatToDMY } from "../../../components/FormatTempo";
import { Event } from "../types/Events";

const CardEvent = ({ event }: { event: Event }) => {
  return (
    <Card className="dark:bg-[#2d2d2d] p0 max-sm:h-96 lg:h-full lg:w-full w-full">
      <figure className=" rounded-lg max-sm:h-full max-sm:mr-2">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-64 max-sm:h-48"
        />
        <figcaption className="p-4">
          <h3 className="text-lg font-bold mb-2 lg:text-xl ">{event.title}</h3>
          <p className="dark:text-white text-sm lg:text-lg text-gray-600 ">
            <strong className="dark:text-white">Fecha:</strong> {formatToDMY(event.date)}
            <br />
            <strong className="dark:text-white">Ubicación:</strong> {event.location}
            <br />
            <strong className="dark:text-white">Detalles del evento:</strong> {event.details}
            <br />
            <strong className="dark:text-white">Público objetivo:</strong> {event.objetiveAge}
          </p>
        </figcaption>
      </figure>
    </Card>
  );
};

export default CardEvent;

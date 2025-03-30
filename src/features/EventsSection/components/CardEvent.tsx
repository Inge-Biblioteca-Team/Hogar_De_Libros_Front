import { formatToDMY } from "../../../components/FormatTempo";
import { Event } from "../types/Events";

const CardEvent = ({ event }: { event: Event }) => {
  return (
    <>
      <div
        className="w-full gap-8 
      bg-white flex rounded-md h-full"
      >
        <img
          src={event.image}
          alt={event.title}
          className="w-6/12"
        />
        <span className="m-3 !bg-transparent">
          <h3 className="text-2xl font-bold max-sm:text-sm">{event.title}</h3>
          <div className=" text-lg">
            <strong>Fecha:</strong> {formatToDMY(event.date)}
            <p className="text-gray-600 max-sm:text-xs">
              <strong className="">Ubicación:</strong> {event.location}
              <br />
              <strong>Detalles del evento:</strong> {event.details}
              <br />
              <strong>Público objetivo:</strong> {event.objetiveAge}
            </p>
          </div>
        </span>
      </div>
    </>
  );
};

export default CardEvent;

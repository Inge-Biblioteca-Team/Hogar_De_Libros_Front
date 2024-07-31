import { Events } from "../types/Events";

const CardEvent = ({event}:{event:Events}) => {
  return (
    <figure className="flex-none w-full p-4 max-sm:p-0 ">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-sm:h-full max-sm:mr-2">
        <img
          src={event.Image}
          alt={event.title}
          className="w-full h-72 max-sm:h-48"
        />
        <figcaption className="p-4">
          <h3 className="text-lg font-bold mb-2 ">{event.title}</h3>
          <p className="text-sm text-gray-600 ">
            <strong className="">Fecha:</strong> {event.date}
            <br />
            <strong>Ubicación:</strong> {event.location}
            <br />
            <strong>Detalles:</strong> {event.details}
            <br />
            <strong>{event.TargetAudience}</strong>
          </p>
        </figcaption>
      </div>
    </figure>
  );
};

export default CardEvent;

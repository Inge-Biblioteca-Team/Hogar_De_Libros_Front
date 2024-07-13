const CardEvent = ({event}:{event:any}) => {
  return (
    <figure className="flex-none w-full p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={event.imgSrc}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <figcaption className="p-4">
          <h3 className="text-lg font-bold mb-2">{event.title}</h3>
          <p className="text-sm text-gray-600">
            <strong>Fecha:</strong> {event.date}
            <br />
            <strong>Hora:</strong> {event.time}
            <br />
            <strong>Ubicación:</strong> {event.location}
            <br />
            <strong>Detalles:</strong> {event.details}
          </p>
        </figcaption>
      </div>
    </figure>
  );
};

export default CardEvent;

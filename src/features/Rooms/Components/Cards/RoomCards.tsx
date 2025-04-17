import { Card } from "flowbite-react";
import { Room } from "../../Types/Room_Interface";
import AccionBTNR from "../BTN/AccionBTNR";

const RoomCard = ({ Rooms }: { Rooms: Room }) => {
  const statusMap: Record<string, string> = {
    M: "En mantenimiento",
    D: "Disponible",
    C: "Clausurada",
  };

  const roomStatus = statusMap[Rooms.status] || "Desconocido";

  return (
    <Card className="dark:bg-[#2d2d2d] p0">
      <figure>
        <img
          className="h-56 w-full mb-8 border-t border-transparent rounded-t-md object-cover
        max-md:h-32"
          src={Rooms.image[0]}
          alt={Rooms.name}
        />
        <figcaption className="ml-2">
          <strong>{Rooms.name}</strong>
          <p>
            <span>Área: {Rooms.area} m²</span>
            <br />
            <span>Aforo: {Rooms.capacity} Personas</span>
            <br />
            <span>Ubicación: {Rooms.location}</span>
            <br />
            <span>Estado actual: {roomStatus}</span>
          </p>
          <div className="my-5">
            <AccionBTNR rooms={Rooms} />
          </div>
        </figcaption>
      </figure>
    </Card>
  );
};

export default RoomCard;

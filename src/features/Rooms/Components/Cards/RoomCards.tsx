import { Room } from "../../Types/Room_Interface";
import AccionBTNR from "../BTN/AccionBTNR";


const RoomCard = ({ Rooms }: { Rooms: Room }) => {
  return (
    <figure className="rounded-md w-full shadow-lg flex flex-col justify-center items-center pb-3 max-sm:p-0">
      <img
        className="h-64 w-full mb-8 border-t border-transparent rounded-t-md object-cover
        max-sm:h-32"
        src={Rooms.image}
        alt={Rooms.name}
      />
      <figcaption className="text-lg max-w-80 break-words max-sm:text-sm max-sm:h-40 max-sm:flex max-sm:flex-col max-sm:justify-end">
        <strong>{Rooms.name}</strong>
        <p>
          <span>Área: {Rooms.area} m²</span>
          <br />
          <span>Aforo: {Rooms.capacity} Personas</span>
          <br />
          <span>Ubicación: {Rooms.location}</span>
        </p>
        <div className="mt-5">
          <AccionBTNR rooms={Rooms} />
        </div>
      </figcaption>
    </figure>
  );
};

export default RoomCard;
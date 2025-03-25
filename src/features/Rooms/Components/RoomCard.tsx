import { Card } from "flowbite-react";
import { Room } from "../Types/Room_Interface";

const RoomCard = ({ Rooms }: { Rooms: Room }) => {
  return (
    <Card className="dark:bg-[#2d2d2d] p0 2xl:h-full xl:h-full lg:w-full max-sm:w-2xl">
      <figure>
        <img
          className="h-64 w-full border-t border-transparent max-sm:w-full rounded-t-md object-cover
        max-sm:h-32"
          src={Rooms.image[0]}
          alt={Rooms.name}
        />
        <figcaption className="m-3 lg:text-lg break-words max-sm:text-sm max-sm:h-40 max-sm:flex max-sm:flex-col max-sm:justify-end">
          <strong className="lg:text-xl">{Rooms.name}</strong>
          <p className="lg:text-lg">
            <span>Área: {Rooms.area}m²</span>
            <br />
            <span>Aforo: {Rooms.capacity} Personas</span>
            <br />
            <span>Ubicación: {Rooms.location}</span>
            <br />
            <span>
              Especial para: Cursos, eventos y reuniones de estudio{" "}
              {Rooms.observations}
            </span>
          </p>
        </figcaption>
      </figure>
    </Card>
  );
};

export default RoomCard;

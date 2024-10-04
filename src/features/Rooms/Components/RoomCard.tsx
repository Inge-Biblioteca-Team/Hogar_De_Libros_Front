import { Room } from "../Types/Room_Interface";

const RoomCard = ({ Rooms }: { Rooms: Room }) => {
  return (
    <figure className="rounded-md w-full shadow-lg flex flex-col justify-center items-center pb-3 max-sm:p-0">
      <img
        className="h-64 w-80 mb-8 border-t border-transparent rounded-t-md object-cover
        max-sm:h-32"
        src={Rooms.image}
        alt={Rooms.name}
      />
      <figcaption className=" text-lg max-w-80 break-words max-sm:text-sm max-sm:h-40 max-sm:flex max-sm:flex-col max-sm:justify-end">
        <strong>{Rooms.name}</strong>
        <p>
          <span>Área: {Rooms.area}m²</span>
          <br />
          <span>Aforo: {Rooms.capacity} Personas</span>
          <br />
          <span>Ubicación: {Rooms.location}</span>
        </p>
        <button
          className="bg-Bottoms text-Text text-lg rounded-lg p-1.5 mt-5 mb-5
        hover:bg-Bottoms-dark hover:scale-105
        max-sm:text-sm max-sm:mx-1"
          type="button"
        >
          Ver Disponibilidad -&gt;{" "}
        </button>
      </figcaption>
    </figure>
  );
};

export default RoomCard;
//El boton tiene que pasar el id de la sala
//Adaptar las variables a ingles

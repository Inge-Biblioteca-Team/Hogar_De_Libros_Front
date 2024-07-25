import { IRoom } from "../Types/Room_Interface";

const RoomCard = ({ Rooms }: { Rooms: IRoom }) => {
  return (
    <figure className="rounded-md w-full shadow-lg flex flex-col justify-center items-center pb-3 max-sm:p-0">
      <img
        className="h-64 w-80 mb-8 border-t border-transparent rounded-t-md object-cover
        max-sm:h-32"
        src={Rooms.Imagen}
        alt={Rooms.Nombre}
      />
      <figcaption className=" text-lg max-w-80 break-words max-sm:text-sm">
        <strong>{Rooms.Nombre}</strong>
        <p>
          <span>Área: {Rooms.Area}m²</span>
          <br />
          <span>Aforo: {Rooms.Aforo}</span>
          <br />
          <span>Ubicacion {Rooms.Ubicacion}</span>
        </p>
        <button
          className="bg-Bottoms text-Text text-lg rounded-lg p-1.5 mt-5 mb-5
        hover:bg-Bottoms-dark hover:scale-105
        max-sm:text-sm"
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

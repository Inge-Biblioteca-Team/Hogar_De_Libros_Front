import { Room } from "../Types/Room_Interface";

const RoomCardForCarrousel = ({ Rooms }: { Rooms: Room }) => {
  return (
    <div className=" w-full gap-8 justify-between bg-white flex rounded-md h-full space-x-2 text-right">
      <span className="!bg-white w-3/4 m-3">
        <h3 className="text-2xl font-bold max-md:text-base ">
          {Rooms.name}
        </h3>
        <div className=" text-lg max-md:text-sm">
          <p className="text-gray-600">
            <span className="!bg-white">
              Numero de sala: {Rooms.roomNumber}
            </span>
            <br />
            <span className="!bg-white">Área: {Rooms.area}m²</span>
            <br />
            <span className="!bg-white">Aforo: {Rooms.capacity} Personas</span>
            <br />
            <span className="!bg-white">Ubicación: {Rooms.location}</span>
            <br />
            <span className="!bg-white">{Rooms.observations}</span>
          </p>
        </div>
      </span>
      <img src={Rooms.image[0]} alt={Rooms.name} className="w-11/12 max-lg:w-1/2" />
    </div>
  );
};

export default RoomCardForCarrousel;

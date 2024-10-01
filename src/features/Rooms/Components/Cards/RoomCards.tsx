import { useState } from "react";
import { Room } from "../../Types/Room_Interface";
import AccionBTNR from "../BTN/AccionBTNR";

const RoomCard = ({room}: {room:Room}) => {
    const [see, setSee] = useState<boolean>(false);
    const [down, setDown] = useState<boolean>(false);
    const [edit, setEdit] = useState<boolean>(false);
    return (
        <div className="max-w-xs rounded-lg shadow-lg overflow-hidden">
       
        <figure className="w-full">
          <img
            src={room.image} 
            alt="Imagen del Sala"
            className="w-full h-48 object-cover"
          />
        </figure>
  
       
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Sala {room.name}</h3>
          <p className="text-gray-600">Aforo recomendado: {room.capacity}</p>
          <p className="text-gray-600">Ubicación: {room.location}</p>
  
          
          <div className="mt-4 flex justify-between">
          <AccionBTNR
            setSee={setSee}
            setEdit={setEdit}
            setDown={setDown} />
          </div>
        </div>

      </div>
    );
  };
export default RoomCard;  
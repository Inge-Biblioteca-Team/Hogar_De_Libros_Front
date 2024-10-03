import { useState } from "react";
import { PiEyeLight, PiPencilDuotone, PiTrash } from "react-icons/pi";
import { Room } from "../../Types/Room_Interface";
import ViewRoom from "../Modals/ViewRoom";
import { Popover } from "flowbite-react";
import RoomStatusPopover from "../RoomStatupopover";

const BTNAccions = ({ rooms }: { rooms : Room }) => {
    const [openS, setOpenS] = useState<boolean>(false);
    const [openE, setOpenE] = useState<boolean>(false);
    const [openD, setOpenD] = useState<boolean>(false);
  
    return (
      <>
        <div className="w-full flex gap-3 items-center justify-center text-3xl">
          <button
            type="button"
            title="Ver Información de la Sala"
            className="hover:text-Body"
            onClick={() => setOpenS(true)}
          >
            <PiEyeLight size={24} />
          </button>
          <button
            type="button"
            title="Editar Información de la Sala"
            className={`${rooms .status ? "" : "cursor-not-allowed"} hover:text-yellow-400`}
            onClick={() => setOpenE(true)}
            disabled={!rooms .status}
          >
            <PiPencilDuotone size={24} />
          </button>

          <Popover 
          content= {<RoomStatusPopover room={rooms} />}
          >
          <button
            type="button"
            title="Deshabilitar Sala"
            className={`${rooms .status ? "" : "cursor-not-allowed"} hover:text-red-800`}
            disabled={!rooms .status}
            onClick={() => setOpenD(true)}
            
          >
            <PiTrash size={24} />
          </button>

          </Popover>

          {/* modales de desabilitar, editar y ver */}
          <ViewRoom see={openS} setSee={setOpenS} room={rooms}/>
        </div>
      </>
    );
  };
  
  export default BTNAccions;
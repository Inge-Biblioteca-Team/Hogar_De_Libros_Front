import { PiEyeLight, PiPencilDuotone, PiTrash } from "react-icons/pi";
import { useState } from "react";
import ModalDownFurniture from "../Modals/ModalDownFurniture";
import { furniture } from "../../type/furniture";

const FurnitureAccionBTNS = ({ furniture }: { furniture: furniture }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex gap-7">
      <button
        title="Ver Información Completa"
        type="button"
        onClick={() => {
          if (furniture.Status) {
            setOpenModal(true);
          }
        }}
      >
        <PiEyeLight size={24} />
      </button>

      <button
        title="Editar Mobiliario"
        type="button"
        className={`${furniture.Status ? "" : "cursor-not-allowed"}`}
        onClick={() => {
          if (furniture.Status) {
            setOpenModal(true);
          }
        }}
        disabled={!furniture.Status}
      >
        <PiPencilDuotone size={24} />
      </button>

      <button
        title="Deshabilitar Moviliario"
        type="button"
        className={`${furniture.Status ? "" : "cursor-not-allowed"}`}
        onClick={() => {
          if (furniture.Status) {
            setOpenModal(true);
          }
        }}
        disabled={!furniture.Status}
      >
        <PiTrash size={24} />
      </button>
      <>
        <ModalDownFurniture
          open={openModal}
          setOpen={setOpenModal}
          id={furniture.Id}
          Description={furniture.Description}
        />
      </>
    </div>
  );
};

export default FurnitureAccionBTNS;

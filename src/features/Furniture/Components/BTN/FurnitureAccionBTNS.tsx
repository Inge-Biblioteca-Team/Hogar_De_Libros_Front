import { PiEyeLight, PiPencilDuotone, PiTrash } from "react-icons/pi";
import { useState } from "react";
import ModalDownFurniture from "../Modals/ModalDownFurniture";

const FurnitureAccionBTNS = ({
  id,
  Status,
}: {
  id: number;
  Status: boolean;
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex gap-7">
      <button
        title="Ver Información Completa"
        type="button"
        onClick={() => {
          if (Status) {
            setOpenModal(true);
          }
        }}
      >
        <PiEyeLight size={24} />
      </button>
      
      <button
        title="Editar Mobiliario"
        type="button"
        className={`${Status ? "" : "cursor-not-allowed"}`}
        onClick={() => {
          if (Status) {
            setOpenModal(true);
          }
        }}
        disabled={!Status}
      >
        <PiPencilDuotone size={24} />
      </button>
      
      <button
        title="Deshabilitar Moviliario"
        type="button"
        className={`${Status ? "" : "cursor-not-allowed"}`}
        onClick={() => {
          if (Status) {
            setOpenModal(true);
          }
        }}
        disabled={!Status}
      >
        <PiTrash size={24} />
      </button>
      <>
        <ModalDownFurniture
          open={openModal}
          setOpen={setOpenModal}
          id={id}
          Description=""
        />
      </>
    </div>
  );
};

export default FurnitureAccionBTNS;
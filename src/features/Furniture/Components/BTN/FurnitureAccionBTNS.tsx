import { PiEyeLight, PiPencilDuotone, PiTrash } from "react-icons/pi";
import { useState } from "react";
import ModalDownFurniture from "../Modals/ModalDownFurniture";
import ModalEditFurniture from "../Modals/ModalEditFurniture";
import { furniture } from "../../type/furniture";
import ModalViewFurniture from "../Modals/ModalViewFurniture";
const FurnitureAccionBTNS = ({ furniture }: { furniture: furniture }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openEditModal, setEditModal] = useState<boolean>(false);
  const [openVModal, setVModal] = useState<boolean>(false);


  return (
    <>
      <div className="flex gap-7">
        <button
          title="Ver Información Completa"
          type="button"
          onClick={() => {
            if (furniture.Status) {
              setVModal(true);
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
              setEditModal(true);
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


      </div>
      <ModalEditFurniture
        sEdit={openEditModal}
        setEdit={setEditModal}
        furniture={furniture}
      />
      <ModalDownFurniture
        open={openModal}
        setOpen={setOpenModal}
        id={furniture.Id}
        Description={furniture.Description}
      />
      <ModalViewFurniture
        openVModal={openVModal}
        setVModal={setVModal}
        furniture={furniture}
      />

    </>
  );
};

export default FurnitureAccionBTNS;
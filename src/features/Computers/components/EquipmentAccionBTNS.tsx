import { PiEyeLight, PiPencilDuotone, PiTrash } from "react-icons/pi";
import { useState } from "react";
import ModalDownEquip from "./ModalDownEquip";
import { Equipment } from "../types/Computer";
import EditComponent from "./Modals/EditComponent";
import SeeComponent from "./Modals/SeeComponent";

const EquipmentAccionBTNS = ({ computers }: { computers: Equipment }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openSee, setOpenSee] = useState(false);
  return (
    <div className=" flex gap-7 w-full items-end justify-end mr-9 ">
      <button
        title="ver información"
        type="button"
        onClick={() => setOpenSee(true)}
      >
        <PiEyeLight size={24} />
      </button>
      <button
        title="Editar información"
        type="button"
        className={`${computers.Status ? "" : "cursor-not-allowed"}`}
        onClick={() => setOpenEdit(true)}
        disabled={!computers.Status}
      >
        <PiPencilDuotone size={24} />
      </button>

      <button
        title="Deshabilitar Activo"
        type="button"
        className={`${computers.Status ? "" : "cursor-not-allowed"}`}
        onClick={() => setOpenModal(true)}
        disabled={!computers.Status}
      >
        <PiTrash size={24} />
      </button>
      <>
        <ModalDownEquip
          open={openModal}
          setOpen={setOpenModal}
          Code={computers.EquipmentUniqueCode}
          Serial={computers.EquipmentSerial}
        />
        <EditComponent
          sEdit={openEdit}
          setSEdit={setOpenEdit}
          component={computers}
        />
        <SeeComponent
          sSee={openSee}
          setSee={setOpenSee}
          component={computers}
        />
      </>
    </div>
  );
};

export default EquipmentAccionBTNS;

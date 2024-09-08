import { PiEyeLight, PiPencilDuotone, PiTrash } from "react-icons/pi";
import { useState } from "react";
import { Link } from "react-router-dom";
import ModalDownEquip from "./ModalDownEquip";

const EquipmentAccionBTNS = ({
  Code,
  Serial,
  Status,
}: {
  Code: string;
  Serial: string;
  Status: boolean;
}) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className=" flex gap-7 ">
      <Link
        title="Ver Informacion Completa"
        to={`/HogarDeLibros/Gestion/Equipos/Ver/${Code}`}
      >
        <PiEyeLight size={24} />
      </Link>
      <Link
        title="Editar Activo"
        to={Status ? `/HogarDeLibros/Gestion/Equipos/Editar/${Code}` : "#"}
        className={`${Status ? "" : "cursor-not-allowed"}`}
        onClick={(e) => {
          if (!Status) {
            e.preventDefault(); 
          }
        }}
      >
        <PiPencilDuotone size={24} />
      </Link>
      <button
        title="Deshabilitar Activo"
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
        <ModalDownEquip
          open={openModal}
          setOpen={setOpenModal}
          Code={Code}
          Serial={Serial}
        />
      </>
    </div>
  );
};

export default EquipmentAccionBTNS;

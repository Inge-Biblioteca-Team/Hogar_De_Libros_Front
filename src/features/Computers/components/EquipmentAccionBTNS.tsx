import { PiEyeLight, PiPencilDuotone, PiTrash } from "react-icons/pi";
import { useState } from "react";
import { Link } from "react-router-dom";
import ModalDownEquip from "./ModalDownEquip";

const EquipmentAccionBTNS = ({
  Code,
  Serial,
}: {
  Code: string;
  Serial: string;
}) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className=" flex gap-7 justify-center mt-8">
      <Link
        title="Ver Informacion Completa"
        to={`/HogarDeLibros/Gestion/EquipodeComputo/Ver/${Code}`}
      >
        <PiEyeLight size={24} />
      </Link>
      <Link
        title="Editar Activo"
        to={`/HogarDeLibros/Gestion/EquipodeComputo/Editar/${Code}`}
      >
        <PiPencilDuotone size={24} />
      </Link>
      <button title="Deshabilitar Activo" type="button">
        <PiTrash size={24} onClick={() => setOpenModal(true)} />
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

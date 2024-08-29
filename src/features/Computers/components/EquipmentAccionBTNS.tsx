import { faEye, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import ModalDownEquip from "./ModalDownEquip";

const EquipmentAccionBTNS = ({Code, Serial}:{Code:string, Serial:string}) => {
    const [openModal, setOpenModal] = useState(false);
  return (
    <div className=" flex gap-7 justify-center">
    <Link title="Ver Informacion Completa" to={`/HogarDeLibros/Gestion/EquipodeComputo/Ver/${Code}`}>
      <FontAwesomeIcon size="2x" icon={faEye}/>
    </Link>
    <Link title="Editar Activo" to={`/HogarDeLibros/Gestion/EquipodeComputo/Editar/${Code}`}>
      <FontAwesomeIcon size="2x" icon={faPenToSquare}/>
    </Link>
    <button title="Deshabilitar Activo" type="button">
      <FontAwesomeIcon size="2x" icon={faTrash} onClick={() => setOpenModal(true)}/>
    </button>
    <>
      <ModalDownEquip open={openModal} setOpen={setOpenModal} Code={Code} Serial={Serial} />
    </>
    </div>
  )
}

export default EquipmentAccionBTNS

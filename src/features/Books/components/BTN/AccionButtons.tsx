import { faEye, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

import { useState } from "react";
import ModalDownActive from "../Modals/ModalDownActive";

const AccionButtons = ({id, BookTitle}:{id:string, BookTitle:string}) => {

  const [openModal, setOpenModal] = useState(false);
  
  return (
    <div className=" flex gap-7 justify-center">
    <Link title="Ver Informacion Completa" to={`/HogarDeLibros/Gestion/Libros/Ver/${id}`}>
      <FontAwesomeIcon size="2x" icon={faEye}/>
    </Link>
    <Link title="Editar Activo" to={`/HogarDeLibros/Gestion/Libros/Editar/${id}`}>
      <FontAwesomeIcon size="2x" icon={faPenToSquare}/>
    </Link>
    <button title="Deshabilitar Activo" type="button">
      <FontAwesomeIcon size="2x" icon={faTrash} onClick={() => setOpenModal(true)}/>
    </button>

    <>
      <ModalDownActive open={openModal} setOpen={setOpenModal} id={id} BookTitle={BookTitle} />
    </>
    </div>
  )
}

export default AccionButtons

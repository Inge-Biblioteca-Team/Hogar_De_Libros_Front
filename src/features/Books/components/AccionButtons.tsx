import { faEye, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const AccionButtons = ({id}:{id:string}) => {
  return (
    <div className=" flex gap-7 justify-center">
    <Link title="Ver Informacion Completa" to={`/HogarDeLibros/Gestion/Libros/${id}`}>
      <FontAwesomeIcon size="2x" icon={faEye}/>
    </Link>
    <Link title="Editar Activo" to={`/HogarDeLibros/Gestion/Libros/Editar/${id}`}>
      <FontAwesomeIcon size="2x" icon={faPenToSquare}/>
    </Link>
    <button title="Deshabilitar Activo" type="button">
      <FontAwesomeIcon size="2x" icon={faTrash} href="/HogarDeLibros/Gestion/Libros/" />
    </button>
    </div>
  )
}

export default AccionButtons

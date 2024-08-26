import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const InpSearchTitle = () => {
  return (
    <div className="relative">
    <input
      type="text"
      placeholder="Busqueda Por Titulo"
      className="pl-8 pr-4 py-2 border rounded-lg"
    />
    <span className="absolute left-2 top-2">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </span>
  </div>
  )
}

export default InpSearchTitle

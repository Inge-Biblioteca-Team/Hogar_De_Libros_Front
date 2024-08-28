import { faMagnifyingGlass, faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const InpSerchComp = ()=>{
    return (
        <div className="relative">
            <input
            type="text" placeholder="Busqueda"
            className="pl-8 pr-4 py-2 border reounded-lg"/>
            <span className="absolute left-2 top-2">
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </span>
        </div>
    )
}
export default InpSerchComp
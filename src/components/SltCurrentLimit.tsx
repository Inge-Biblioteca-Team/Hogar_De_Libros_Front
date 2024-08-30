import { Dispatch, SetStateAction } from "react"

const SltCurrentLimit = ({setCurrentLimit}:{setCurrentLimit: Dispatch<SetStateAction<number>>}) => {
  return (
    <select
    name="Limit"
    id="Limit"
    title="Resultados por pagina"
    className=" bg-transparent border-none rounded-lg"
    onChange={(e) => setCurrentLimit(Number(e.target.value))}
  >
    <option value={5}>5</option>
    <option value={10}>10</option>
    <option value={15}>15</option>
  </select>
  )
}

export default SltCurrentLimit

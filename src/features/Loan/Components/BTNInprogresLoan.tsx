import { TfiReload } from "react-icons/tfi";
import { PiCalendarXLight } from "react-icons/pi";
import { PiEyeFill } from "react-icons/pi";
import { Link } from "react-router-dom";
const BTNInprogresLoan = () => {
  return (
    <>
         <div className=" flex justify-center gap-x-12">
        <Link to={"/HogarDeLibros/Gestion/Prestamos/Pendientes/Ver/"}>
          <PiEyeFill size={30} color="blue" />
        </Link>
        <button type="button" title="Renovar Prestamo">
          <TfiReload size={30} color="green" />
        </button>
        <button type="button" title="Finalizar Prestamo">
          <PiCalendarXLight size={30} color="red" />
        </button>
      </div>
    </>
  )
}

export default BTNInprogresLoan

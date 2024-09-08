import { GiConfirmed } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { PiEyeFill } from "react-icons/pi";
import { Link } from "react-router-dom";
const BTNResolveLoan = () => {
  return (
    <>
      <div className=" flex justify-center gap-x-12">
        <Link to={"/HogarDeLibros/Gestion/Prestamos/Pendientes/Ver/"}>
          <PiEyeFill size={30} color="blue" />
        </Link>
        <button type="button" title="Rechazar Prestamo">
          <MdCancel size={30} color="red" />
        </button>
        <button type="button" title="Aprobar Prestamo">
          <GiConfirmed size={30} color="green" />
        </button>
      </div>
    </>
  );
};

export default BTNResolveLoan;

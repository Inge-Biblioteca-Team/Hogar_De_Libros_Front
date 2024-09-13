import { useState } from "react";
import { GiConfirmed } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { PiEyeFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import DenyRequest from "./DenyRequest";
import { Loans } from "../../Types/BookLoan";
import UseAproveLoan from "../../Hooks/Books/UseAproveLoan";
import { Button, Popover } from "flowbite-react";
const BTNResolveLoan = ({Loan}:{Loan:Loans}) => {
  const [showD,setShowD] = useState<boolean>(false)

  const { mutate: aprove } = UseAproveLoan();

  const handleAprove = () => {
    aprove(Loan.BookLoanId);
  };

  return (
    <>
      <div className=" flex justify-center gap-x-12">
        <Link to={"/HogarDeLibros/Gestion/Prestamos/Pendientes/Ver/"}>
          <PiEyeFill size={30} color="blue" />
        </Link>
        <button type="button" title="Rechazar Prestamo" onClick={()=>setShowD(true)}>
          <MdCancel size={30} color="red" />
        </button>
        <Popover
        content={
          <Button onClick={()=>handleAprove()} color={"blue"} >Confirmar</Button>
        }
        >
        <button type="button" title="Aprobar Prestamo"  >
          <GiConfirmed size={30} color="green" />
        </button>
        </Popover>
      </div>
      <DenyRequest Loan={Loan} showCancel={showD} setShowCancel={setShowD} />
    </>
  );
};

export default BTNResolveLoan;

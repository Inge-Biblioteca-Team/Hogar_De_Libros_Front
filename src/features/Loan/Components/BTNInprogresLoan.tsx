import { TfiReload } from "react-icons/tfi";
import { PiCalendarXLight } from "react-icons/pi";
import { PiEyeFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { Loans } from "../Types/BookLoan";
import { useState } from "react";
import LoanRenuve from "./Modals/LoanRenuve";
import UseFinishLoan from "../Hooks/UseFinishLoan";
const BTNInprogresLoan = ({ Loan }: { Loan: Loans }) => {
  const [showR, setShowR] = useState<boolean>(false);

  const { mutate: finalizeLoan } = UseFinishLoan();

  return (
    <>
      <div className=" flex justify-center gap-x-12">
        <Link to={"/HogarDeLibros/Gestion/Prestamos/Pendientes/Ver/"}>
          <PiEyeFill size={30} color="blue" />
        </Link>
        <button
          type="button"
          title="Renovar Prestamo"
          onClick={() => setShowR(true)}
        >
          <TfiReload size={30} color="green" />
        </button>
        <button
          type="button"
          title="Finalizar Prestamo"
          onClick={() =>
            finalizeLoan({
              BookLoanId: Loan.BookLoanId,
              Observation: "NA",
            })
          }
        >
          <PiCalendarXLight size={30} color="red" />
        </button>
      </div>
      <LoanRenuve Loan={Loan} showChange={showR} setShowChange={setShowR} />
    </>
  );
};

export default BTNInprogresLoan;

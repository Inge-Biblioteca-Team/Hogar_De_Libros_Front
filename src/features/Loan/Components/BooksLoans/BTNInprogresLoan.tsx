import { TfiReload } from "react-icons/tfi";
import { PiCalendarXLight } from "react-icons/pi";
import { PiEyeFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { Loans } from "../../Types/BookLoan";
import { useState } from "react";
import LoanRenuve from "./LoanRenuve";
import FinishLoanBook from "../Modals/FinishLoanBook";
const BTNInprogresLoan = ({ Loan }: { Loan: Loans }) => {
  const [showR, setShowR] = useState<boolean>(false);
  const [showF, setShowF] = useState<boolean>(false);

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
          onClick={() => setShowF(true)}
        >
          <PiCalendarXLight size={30} color="red" />
        </button>
      </div>
      <LoanRenuve Loan={Loan} showChange={showR} setShowChange={setShowR} />
      <FinishLoanBook
        open={showF}
        setOpen={setShowF}
        BookLoanId={Loan.BookLoanId}
        UserCedula={Loan.user.name}
        BookTitle={Loan.book.Title}
      />
    </>
  );
};

export default BTNInprogresLoan;

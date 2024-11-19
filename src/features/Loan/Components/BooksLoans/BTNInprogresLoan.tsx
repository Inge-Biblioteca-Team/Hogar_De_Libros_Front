import { PiCalendarXLight, PiEyeFill } from "react-icons/pi";
import { Loans } from "../../Types/BookLoan";
import { useState } from "react";
import LoanRenuve from "./LoanRenuve";
import FinishLoanBook from "../Modals/FinishLoanBook";
import SeeLoanInfo from "../Modals/SeeLoanInfo";
import { MdOutlineUpdate } from "react-icons/md";
const BTNInprogresLoan = ({ Loan }: { Loan: Loans }) => {
  const [showR, setShowR] = useState<boolean>(false);
  const [showF, setShowF] = useState<boolean>(false);
  const [see, setSee] = useState<boolean>(false);

  return (
    <>
      <div className=" flex justify-center max-sm:pl-8 max-sm:w-10 max-sm:gap-x-1 gap-x-12">
        <button type="button" onClick={() => setSee(true)}>
          {""} <PiEyeFill className="max-sm:size-6" size={30} />
        </button>
        <button
          type="button"
          title="Renovar préstamo"
          onClick={() => setShowR(true)}
        >
          <MdOutlineUpdate className="max-sm:size-6" size={30} />
        </button>
        <button
          type="button"
          title="Finalizar préstamo"
          onClick={() => setShowF(true)}
        >
          <PiCalendarXLight className="max-sm:size-6" size={30} />
        </button>
      </div>
      <LoanRenuve Loan={Loan} showChange={showR} setShowChange={setShowR} />
      <SeeLoanInfo Loan={Loan} see={see} setSee={setSee} />
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

import { useState } from "react";
import { GiConfirmed } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { PiEyeFill } from "react-icons/pi";
import DenyRequest from "./DenyRequest";
import { Loans } from "../../Types/BookLoan";
import SeeLoanInfo from "../Modals/SeeLoanInfo";
import MDApproveLoan from "./MDApproveLoan";
const BTNResolveLoan = ({ Loan }: { Loan: Loans }) => {
  const [showD, setShowD] = useState<boolean>(false);

  const [see, setSee] = useState<boolean>(false);
  const [openA, setOpenA] = useState<boolean>(false);

  return (
    <>
      <div className=" flex justify-center gap-x-12">
        <button type="button" onClick={() => setSee(true)}>
          {""} <PiEyeFill size={30} />
        </button>
        <button
          type="button"
          title="Rechazar préstamo"
          onClick={() => setShowD(true)}
        >
          <MdCancel size={30} />
        </button>
        <button type="button" title="Aprobar préstamo"
        onClick={()=>setOpenA(true)}>
          <GiConfirmed size={30} />
        </button>
      </div>
      <DenyRequest Loan={Loan} showCancel={showD} setShowCancel={setShowD} />
      <SeeLoanInfo Loan={Loan} see={see} setSee={setSee} />
      <SeeLoanInfo Loan={Loan} see={see} setSee={setSee} />
      <MDApproveLoan open={openA} setOpen={setOpenA} LoanID={Loan.BookLoanId} />
    </>
  );
};

export default BTNResolveLoan;

import { useState } from "react";
import { GiConfirmed } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { PiEyeFill } from "react-icons/pi";
import DenyRequest from "./DenyRequest";
import { LoansRes } from "../../Types/BookLoan";
import SeeLoanInfo from "../Modals/SeeLoanInfo";
import MDApproveLoan from "./MDApproveLoan";
const BTNResolveLoan = ({ Loan }: { Loan: LoansRes }) => {
  const [showD, setShowD] = useState<boolean>(false);

  const [see, setSee] = useState<boolean>(false);
  const [openA, setOpenA] = useState<boolean>(false);

  return (
    <>
      <div className=" flex justify-center max-sm:pl-8 max-sm:w-10 max-sm:gap-x-1 gap-x-12">
        <button className="" type="button" onClick={() => setSee(true)}>
          {""} <PiEyeFill className="max-sm:size-6" size={30} />
        </button>
        <button
          type="button"
          title="Rechazar préstamo"
          onClick={() => setShowD(true)}
        >
          <MdCancel className="max-sm:size-6" size={30} />
        </button>
        <button type="button" title="Aprobar préstamo"
        onClick={()=>setOpenA(true)}>
          <GiConfirmed className="max-sm:size-6" size={30} />
        </button>
      </div>
      <DenyRequest Loan={Loan} showCancel={showD} setShowCancel={setShowD} />
      <SeeLoanInfo Loan={Loan} see={see} setSee={setSee} />
      <MDApproveLoan open={openA} setOpen={setOpenA} LoanID={Loan.BookLoanId} />
    </>
  );
};

export default BTNResolveLoan;

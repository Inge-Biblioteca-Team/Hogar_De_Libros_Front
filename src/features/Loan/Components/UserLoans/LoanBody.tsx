import { useState } from "react";
import { Loans } from "../../Types/BookLoan";
import MDLoanInfo from "./Modals/MDLoanInfo";
import { Card } from "flowbite-react";

const LoanBody = ({
  Loan,
  Done,
  Retry,
  Aprov,
}: {
  Loan: Loans;
  Done?: boolean;
  Retry?: boolean;
  Aprov?: boolean;
}) => {
  const [open, SetOpen] = useState(false);
  const reqDate = new Date(Loan.LoanRequestDate);
  const PickUpDate = new Date(Loan.BookPickUpDate);
  return (
    <>
      <Card
        key={Loan.BookLoanId}
        className=" shadow-lg p-3 flex flex-col rounded-xl mt-4
      hover:shadow-blue-300 hover:scale-110 "
        onClick={() => SetOpen(true)}
      >
        <span className=" line-clamp-1">
          <strong>Titulo:</strong>
          {Loan.BookLoanId}
        </span>
        <span>
          {" "}
          <strong>Fecha de solicitud:</strong>{" "}
          {reqDate.toLocaleDateString("es-Es")}
        </span>
        <span>
          {" "}
          <strong>Fecha de Vencimiento:</strong>{" "}
          {PickUpDate.toLocaleDateString("es-Es")}
        </span>
      </Card>
      <MDLoanInfo open={open} SetOpen={SetOpen} Aprov={Aprov} Done={Done} Retry={Retry} Loan={Loan} />
    </>
  );
};

export default LoanBody;

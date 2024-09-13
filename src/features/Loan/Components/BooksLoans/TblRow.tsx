import { Table } from "flowbite-react";
import BTNInprogresLoan from "./BTNInprogresLoan";
import BTNResolveLoan from "./BTNResolveLoan";
import { Loans } from "../../Types/BookLoan";
import { useState } from "react";
import SeeLoanInfo from "../Modals/SeeLoanInfo";

const TblRow = ({
  Loan,
  NeedAccions,
  Inprogress,
}: {
  Loan: Loans;
  NeedAccions?: boolean;
  Inprogress?: boolean;
}) => {
  const reqDate = new Date(Loan.LoanRequestDate);
  const PickUpDate = new Date(Loan.LoanExpirationDate);
  const [see, setSee] = useState<boolean>(false);
  return (
    <>
      <Table.Row
        className=" h-20"
        onClick={!NeedAccions ? () => setSee(true) : undefined}
      >
        <Table.Cell className="w-56">
          {reqDate.toLocaleDateString("es-CR")}
        </Table.Cell>
        <Table.Cell className="w-56">
          {PickUpDate.toLocaleDateString("es-CR")}
        </Table.Cell>
        <Table.Cell className="w-64">{Loan.user.name}</Table.Cell>
        <Table.Cell className="w-44 line-clamp-1 mt-3">
          {Loan.book.Title}
        </Table.Cell>
        <Table.Cell className="w-52">{Loan.book.signatureCode} </Table.Cell>
        <Table.Cell className={`${NeedAccions ? `hidden` : ``} w-64`}>
          Adrian Aguilar
        </Table.Cell>
        <Table.Cell className={`${NeedAccions ? `` : `hidden`}`}>
          {Inprogress ? (
            <BTNInprogresLoan Loan={Loan} />
          ) : (
            <BTNResolveLoan Loan={Loan} />
          )}
        </Table.Cell>
      </Table.Row>
      <SeeLoanInfo Loan={Loan} see={see} setSee={setSee} />
    </>
  );
};

export default TblRow;

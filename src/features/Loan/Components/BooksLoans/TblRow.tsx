import { Table } from "flowbite-react";
import BTNInprogresLoan from "./BTNInprogresLoan";
import BTNResolveLoan from "./BTNResolveLoan";
import { Loans } from "../../Types/BookLoan";
import { useState } from "react";
import SeeLoanInfo from "../Modals/SeeLoanInfo";
import { format } from "@formkit/tempo";

const TblRow = ({
  Loan,
  NeedAccions,
  Inprogress,
}: {
  Loan: Loans;
  NeedAccions?: boolean;
  Inprogress?: boolean;
}) => {
  const ReqDate = format({
    date: Loan.LoanRequestDate,
    format: "DD/MM/YYYY hh:mm A",
    tz: "America/Costa_Rica",
  });

  const ExDate = format({
    date: Loan.LoanExpirationDate,
    format: "DD/MM/YYYY",
    tz: "America/Costa_Rica",
  });

  const [see, setSee] = useState<boolean>(false);
  return (
    <>
      <Table.Row onClick={!NeedAccions ? () => setSee(true) : undefined}>
        <Table.Cell className="max-sm:hidden">{ReqDate}</Table.Cell>
        <Table.Cell className="max-sm:hidden">{ExDate}</Table.Cell>
        <Table.Cell className="max-sm:w-16">{Loan.user.name}</Table.Cell>
        <Table.Cell>
          <div className="w-44 line-clamp-1 mt-3 max-sm:w-16 ">{Loan.book.Title}</div>
        </Table.Cell>
        <Table.Cell className="w-52 max-sm:hidden">{Loan.book.signatureCode} </Table.Cell>
        <Table.Cell className={`${NeedAccions ? `hidden` : ``} max-sm:hidden  w-64 `}>
          Adrian Aguilar
        </Table.Cell>
        <Table.Cell  className={`${NeedAccions ? `` : `hidden`} `}>
          {Inprogress ? (
            <BTNInprogresLoan  Loan={Loan} />
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

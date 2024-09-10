import LoanBody from "./LoanBody";
import { useQuery } from "react-query";
import { GetInProgressLoan } from "../../Services/SvBookLoan";
import { LoanResponse, Loans } from "../../Types/BookLoan";

const ProgressLoan = () => {
  const { data: Loan } = useQuery<LoanResponse, Error>(
    ["PLoans"],
    () => GetInProgressLoan(),
    {
      staleTime: 600,
    }
  );
  if (Loan?.count == 0) {
    return null;
  }
  return (
    <>
      <div className="">
        <h5 className=" font-bold">Pendientes de Devolucion</h5>
        <div className=" flex gap-2 items-center justify-center">
          {Loan?.data.map((loans: Loans) => (
            <LoanBody Loan={loans} key={loans.BookLoanId} Retry />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProgressLoan;

import { GetPendandRequest } from "../../../Users/Services/SvUsuer";
import { useQuery } from "react-query";
import { LoanResponse, Loans } from "../../Types/BookLoan";
import LoanBody from "./LoanBody";

const RequestLoan = () => {
  const { data: Loan } = useQuery<LoanResponse, Error>(
    ["RLoans"],
    () => GetPendandRequest(),
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
          <h5 className=" font-bold">Solicitudes Pendientes de Aprobacion</h5>
          <div className="flex gap-2 items-center justify-center">
          {Loan?.data.map((loans: Loans) => (
            <LoanBody Loan={loans} key={loans.BookLoanId} Aprov/>
          ))}
          </div>
        </div>
    </>
  );
};

export default RequestLoan;

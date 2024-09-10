import { useQuery } from "react-query";
import { LoanResponse, Loans } from "../../Types/BookLoan";
import LoanBody from "./LoanBody";
import { GetDoneLoans } from "../../../Users/Services/SvUsuer";

const DoneLoan = () => {
  const { data: Loan } = useQuery<LoanResponse, Error>(
    ["DLoans"],
    () => GetDoneLoans(),
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
        <h5 className=" font-bold">Finalizados Recientes</h5>
        <div className=" flex gap-2 items-center justify-center">
          {Loan?.data.map((loans: Loans) => (
            <LoanBody Loan={loans} key={loans.BookLoanId} Done />
          ))}
        </div>
      </div>
    </>
  );
};

export default DoneLoan;

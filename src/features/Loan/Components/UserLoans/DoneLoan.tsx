import { useQuery } from "react-query";
import { LoanResponse, Loans } from "../../Types/BookLoan";
import LoanBody from "./LoanBody";
import { Table, TextInput } from "flowbite-react";
import { GetDoneLoans } from "../../Services/SvBookLoan";

const DoneLoan = () => {
  const { data: Loan } = useQuery<LoanResponse, Error>(["DLoans"], () =>
    GetDoneLoans(1, 5)
  );
  if (Loan?.count == 0) {
    return null;
  }
  return (
    <>
      <div className="">
        <h5 className=" font-bold">Ultimos Prestamos </h5>
        <Table hoverable className=" text-center">
          <Table.Head>
            <Table.HeadCell>#De Solicitud</Table.HeadCell>
            <Table.HeadCell>Título</Table.HeadCell>
            <Table.HeadCell className="flex items-center justify-center gap-2">
              Fecha de solicitud <TextInput type="date"></TextInput>{" "}
            </Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {Loan?.data.map((loans: Loans) => (
              <LoanBody Loan={loans} key={loans.BookLoanId} Done />
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
};

export default DoneLoan;

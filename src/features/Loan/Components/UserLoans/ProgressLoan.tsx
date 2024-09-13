import { useQuery } from "react-query";
import { LoanResponse, Loans } from "../../Types/BookLoan";
import { Table} from "flowbite-react";
import LoanBody from "./LoanBody";
import { GetInProgressLoan } from "../../Services/SvBookLoan";

const ProgressLoan = () => {
  const { data: Loan } = useQuery<LoanResponse, Error>(
    ["PLoans"],
    () => GetInProgressLoan(1,5),
  );
  if (Loan?.count == 0) {
    return null;
  }
  
  return (
    <>
      <div className="">
        <h5 className=" font-bold">Pendientes de Devolucion</h5>
        <Table hoverable className=" text-center">
          <Table.Head>
            <Table.HeadCell>#De Solicitud</Table.HeadCell>
            <Table.HeadCell>Título</Table.HeadCell>
            <Table.HeadCell>Fecha de solicitud</Table.HeadCell>
            <Table.HeadCell>Fecha de vencimiento</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {Loan?.data.map((loans: Loans) => (
              <LoanBody Loan={loans} key={loans.BookLoanId} Retry />
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
};

export default ProgressLoan;

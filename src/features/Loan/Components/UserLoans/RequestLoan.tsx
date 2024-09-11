import { useQuery } from "react-query";
import { LoanResponse, Loans } from "../../Types/BookLoan";
import LoanBody from "./LoanBody";
import { Table } from "flowbite-react";
import { GetPendandRequest } from "../../Services/SvBookLoan";

const RequestLoan = () => {
  const { data: Loan } = useQuery<LoanResponse, Error>(
    ["RLoans"],
    () => GetPendandRequest(1, 5),
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
        <Table hoverable className="text-center">
          <Table.Head>
            <Table.HeadCell>#De Solicitud</Table.HeadCell>
            <Table.HeadCell>Título</Table.HeadCell>
            <Table.HeadCell>Fecha de solicitud</Table.HeadCell>
            <Table.HeadCell>Fecha de vencimiento</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {Loan?.data.map((loans: Loans) => (
              <LoanBody Loan={loans} key={loans.BookLoanId} Aprov />
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
};

export default RequestLoan;

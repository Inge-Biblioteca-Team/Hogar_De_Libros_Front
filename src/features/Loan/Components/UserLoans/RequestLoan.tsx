import { useQuery } from "react-query";
import { LoanResponse, Loans } from "../../Types/BookLoan";
import LoanBody from "./LoanBody";
import { Table } from "flowbite-react";
import { GetPendandRequest } from "../../Services/SvBookLoan";

const RequestLoan = () => {
  const { data: Loan } = useQuery<LoanResponse, Error>(
    ["RLoans"],
    () => GetPendandRequest(1, 5, "504420813"),
    {
      staleTime: 600,
    }
  );

  return (
    <>
      <div className="">
        <h5 className=" font-bold">Solicitudes Pendientes de Aprobación</h5>
        <Table hoverable className="text-center">
          <Table.Head>
            <Table.HeadCell className="w-10">#De Solicitud</Table.HeadCell>
            <Table.HeadCell className="w-40">Título</Table.HeadCell>
            <Table.HeadCell className="w-9">Fecha de solicitud</Table.HeadCell>
            <Table.HeadCell className="w-80">Fecha de vencimiento</Table.HeadCell>
          </Table.Head>
          <Table.Body className=" h-64">
            {Loan?.count === 0 ? (
               <Table.Row>
               <Table.Cell colSpan={6}>
                 No tiene solicitudes pendientes de devolución.
               </Table.Cell>
             </Table.Row>
            ) : (
              Loan?.data.map((loans: Loans) => (
                <LoanBody Loan={loans} key={loans.BookLoanId} Aprov />
              ))
            )}
          </Table.Body>
        </Table>
      </div>
    </>
  );
};

export default RequestLoan;

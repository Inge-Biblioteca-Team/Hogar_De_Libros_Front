import { useQuery } from "react-query";
import { LoanResponse, Loans } from "../../Types/BookLoan";
import { Table} from "flowbite-react";
import LoanBody from "./LoanBody";
import { GetInProgressLoan } from "../../Services/SvBookLoan";

const ProgressLoan = () => {
  const { data: Loan } = useQuery<LoanResponse, Error>(
    ["PLoans"],
    () => GetInProgressLoan(1,5,"","","","504420813"),
  );
  
  return (
    <>
      <div className="">
        <h5 className=" font-bold">Pendientes de Devolucion</h5>
        <Table hoverable className=" text-center">
          <Table.Head>
            <Table.HeadCell className="w-10">#De Solicitud</Table.HeadCell>
            <Table.HeadCell className="w-40">Título</Table.HeadCell>
            <Table.HeadCell className="w-9">Fecha de solicitud</Table.HeadCell>
            <Table.HeadCell className="w-80">Fecha de vencimiento</Table.HeadCell>
          </Table.Head>
          <Table.Body className=" h-72">
            {Loan?.count === 0 ? (
               <Table.Row>
               <Table.Cell colSpan={6}>
                 No tiene Solicitudes Pendientes de Aprobación.
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

export default ProgressLoan;

import { useQuery } from "react-query";
import { LoanResponse, Loans } from "../../Types/BookLoan";
import LoanBody from "./LoanBody";
import { Table } from "flowbite-react";
import { GetPendandRequest } from "../../Services/SvBookLoan";
import { useContext } from "react";
import UserContext from "../../../../Context/UserContext/UserContext";

const RequestLoan = () => {

  const {currentUser} = useContext(UserContext);
  const cedula = currentUser?.cedula || "";


  const { data: Loan } = useQuery<LoanResponse, Error>(
    ["RLoans", cedula],
    () => GetPendandRequest(1, 5, cedula),
    {
      staleTime: 600,
    }
  );

  return (
    <>
      <div className="">
        <h5 className=" font-bold">Solicitudes pendientes de aprobación</h5>
        <Table hoverable className="text-center  bg-white">
          <Table.Head>
            <Table.HeadCell className="w-10 max-sm:hidden">#de solicitud</Table.HeadCell>
            <Table.HeadCell className="w-40">Título</Table.HeadCell>
            <Table.HeadCell className="w-9">Fecha de solicitud</Table.HeadCell>
            <Table.HeadCell className="w-80">Fecha de vencimiento</Table.HeadCell>
          </Table.Head>
          <Table.Body className="dark:bg-[#2d2d2d] h-64 dark:text-white">
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

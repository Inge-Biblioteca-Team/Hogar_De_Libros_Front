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
        <h5 className=" font-bold">Solicitudes Pendientes de Aprobación</h5>
        <Table hoverable className="dark:bg-neutral-900 text-center dark:text-white  bg-white">
          <Table.Head className="dark:bg-neutral-900 dark:text-white">
            <Table.HeadCell className="dark:bg-neutral-900 w-10 max-sm:hidden">#De Solicitud</Table.HeadCell>
            <Table.HeadCell className="dark:bg-neutral-900 w-40">Título</Table.HeadCell>
            <Table.HeadCell className="dark:bg-neutral-900 w-9">Fecha de solicitud</Table.HeadCell>
            <Table.HeadCell className="dark:bg-neutral-900 w-80">Fecha de vencimiento</Table.HeadCell>
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

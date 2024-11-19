import { useQuery } from "react-query";
import { LoanResponse, Loans } from "../../Types/BookLoan";
import { Table} from "flowbite-react";
import LoanBody from "./LoanBody";
import { GetInProgressLoan } from "../../Services/SvBookLoan";
import UserContext from "../../../../Context/UserContext/UserContext";
import { useContext } from "react";

const ProgressLoan = () => {

  const {currentUser} = useContext(UserContext);
  const cedula = currentUser?.cedula || "";



  const { data: Loan } = useQuery<LoanResponse, Error>(
    ["PLoans", cedula],
    () => GetInProgressLoan(1,5,"","","",cedula),
  );
  
  return (
    <>
      <div className="">
        <h5 className=" font-bold">Pendientes de devolución</h5>
        <Table hoverable className=" text-center  bg-white">
          <Table.Head>
            <Table.HeadCell className="w-10 max-sm:hidden">#De Solicitud</Table.HeadCell>
            <Table.HeadCell className="w-40">Título</Table.HeadCell>
            <Table.HeadCell className="w-9">Fecha de solicitud</Table.HeadCell>
            <Table.HeadCell className="w-80">Fecha de vencimiento</Table.HeadCell>
          </Table.Head>
          <Table.Body className=" h-64">
            {Loan?.count === 0 ? (
               <Table.Row>
               <Table.Cell colSpan={6}>
                 No tiene solicitudes pendientes de aprobación.
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

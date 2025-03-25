import { Table } from "flowbite-react";
import { LoanResponse } from "../../Types/BookLoan";
import TblRow from "./TblRow";
const TBLLoan = ({
  NeedAccions,
  Inprogress,
  Loan,
}: {
  NeedAccions?: boolean;
  Inprogress?: boolean;
  Loan: LoanResponse;
}) => {
  return (
    <>
      <Table hoverable className=" text-center min-h-[30rem] ">
        <Table.Head>
          <Table.HeadCell className="2xl:w-1/4 max-sm:hidden">Fecha de solicitud</Table.HeadCell>
          <Table.HeadCell className="xl:table-cell 2xl:w-1/4 2xl:table-cell md:hidden max-sm:hidden">Fecha de vencimiento</Table.HeadCell>
          <Table.HeadCell className="2xl:w-1/4 max-sm:w-20">Nombre del Solicitante</Table.HeadCell>
          <Table.HeadCell className="2xl:w-1/4 max-sm:w-20">Título del libro</Table.HeadCell>
          <Table.HeadCell className="xl:table-cell 2xl:w-1/4 2xl:table-cell md:hidden max-sm:hidden">Código de signatura</Table.HeadCell>
          <Table.HeadCell
            className={`${NeedAccions ? `hidden` : ``}  max-sm:hidden`}
          >
            Aprobado Por
          </Table.HeadCell>
          <Table.HeadCell
            className={`${NeedAccions ? `` : `hidden`}  max-sm:hidden`}
          ></Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {Loan.data.map((loan) => (
            <TblRow key={loan.BookLoanId} Loan={loan} NeedAccions={NeedAccions} Inprogress={Inprogress} />
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default TBLLoan;

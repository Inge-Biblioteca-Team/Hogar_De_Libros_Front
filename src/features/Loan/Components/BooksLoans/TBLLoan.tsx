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
      <Table hoverable className=" text-center">
        <Table.Head className=" h-20 text-sm">
          <Table.HeadCell>Fecha de solicitud</Table.HeadCell>
          <Table.HeadCell>Fecha de vencimiento</Table.HeadCell>
          <Table.HeadCell>Nombre del Solicitante</Table.HeadCell>
          <Table.HeadCell>Título del libro</Table.HeadCell>
          <Table.HeadCell>Código de signatura</Table.HeadCell>
          <Table.HeadCell
            className={`${NeedAccions ? `hidden` : ``} rounded-r-xl`}
          >
            Aprobado Por
          </Table.HeadCell>
          <Table.HeadCell
            className={`${NeedAccions ? `` : `hidden`}`}
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

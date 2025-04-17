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
      <Table
        hoverable
        className="text-center h-[30rem] text-black dark:text-white"
      >
        <Table.Head className="dark:[&>tr>th]:!bg-neutral-800 dark:text-white">
          <Table.HeadCell className="">Fecha de solicitud</Table.HeadCell>
          <Table.HeadCell className=" max-md:hidden">
            Fecha de vencimiento
          </Table.HeadCell>
          <Table.HeadCell className="">Nombre del Solicitante</Table.HeadCell>
          <Table.HeadCell className="">Título del libro</Table.HeadCell>
          <Table.HeadCell className=" max-lg:hidden">
            Código de signatura
          </Table.HeadCell>
          <Table.HeadCell
            className={`${NeedAccions ? `hidden` : ``} max-md:hidden `}
          >
            Aprobado Por
          </Table.HeadCell>
          <Table.HeadCell
            className={`${NeedAccions ? `` : `hidden`} max-md:hidden `}
          ></Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {Loan.data.map((loan) => (
            <TblRow
              key={loan.BookLoanId}
              Loan={loan}
              NeedAccions={NeedAccions}
              Inprogress={Inprogress}
            />
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default TBLLoan;

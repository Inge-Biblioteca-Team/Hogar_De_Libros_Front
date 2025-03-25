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
        <Table.Head className="dark:bg-neutral-900 dark:text-white">
          <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/4 max-sm:hidden">Fecha de solicitud</Table.HeadCell>
          <Table.HeadCell className="dark:bg-neutral-900 xl:table-cell 2xl:w-1/4 2xl:table-cell md:hidden max-sm:hidden">Fecha de vencimiento</Table.HeadCell>
          <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/4 max-sm:w-20">Nombre del Solicitante</Table.HeadCell>
          <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/4 max-sm:w-20">Título del libro</Table.HeadCell>
          <Table.HeadCell className="dark:bg-neutral-900 xl:table-cell 2xl:w-1/4 2xl:table-cell md:hidden max-sm:hidden">Código de signatura</Table.HeadCell>
          <Table.HeadCell
            className={`${NeedAccions ? `hidden` : ``}  dark:bg-neutral-900 max-sm:hidden rounded-r-xl`}
          >
            Aprobado Por
          </Table.HeadCell>
          <Table.HeadCell
            className={`${NeedAccions ? `` : `hidden`}  dark:bg-neutral-900 max-sm:hidden`}
          ></Table.HeadCell>
        </Table.Head>
        <Table.Body className="dark:bg-[#2d2d2d] dark:text-white">
          {Loan.data.map((loan) => (
            <TblRow key={loan.BookLoanId} Loan={loan} NeedAccions={NeedAccions} Inprogress={Inprogress} />
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default TBLLoan;

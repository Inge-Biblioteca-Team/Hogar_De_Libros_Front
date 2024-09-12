import { Table } from "flowbite-react";
import BTNResolveLoan from "./BTNResolveLoan";
import { useNavigate } from "react-router-dom";
import BTNInprogresLoan from "./BTNInprogresLoan";
import { LoanResponse } from "../../Types/BookLoan";
const TBLLoan = ({
  NeedAccions,
  Inprogress,
  Loan,
}: {
  NeedAccions?: boolean;
  Inprogress?: boolean;
  Loan: LoanResponse;
}) => {
  const useNavi = useNavigate();
  const Goto = (LoanCode: number) => {
    useNavi(`/HogarDeLibros/Gestion/Prestamos/Pendientes/Ver/${LoanCode}`);
  };

  return (
    <>
      <Table hoverable className=" text-center">
        <Table.Head className=" h-20 text-sm">
          <Table.HeadCell>Fecha de solicitud</Table.HeadCell>
          <Table.HeadCell>Fecha de vencimiento</Table.HeadCell>
          <Table.HeadCell>Nombre del Solicitante</Table.HeadCell>
          <Table.HeadCell>Titulo del libro</Table.HeadCell>
          <Table.HeadCell>Codigo de signatura</Table.HeadCell>
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
          {Loan.data.map((Loan) => {
            const reqDate = new Date(Loan.LoanRequestDate);
            const PickUpDate = new Date(Loan.BookPickUpDate);
            return (
              <Table.Row
                key={Loan.BookLoanId}
                className=" h-20"
                onClick={!NeedAccions ? () => Goto(2) : undefined}
              >
                <Table.Cell className="w-56">
                  {reqDate.toLocaleDateString("es-CR")}
                </Table.Cell>
                <Table.Cell className="w-56">
                  {PickUpDate.toLocaleDateString("es-CR")}
                </Table.Cell>
                <Table.Cell className="w-64">{Loan.user.name}</Table.Cell>
                <Table.Cell className="w-44 line-clamp-1 mt-3">
                  {Loan.book.Title}
                </Table.Cell>
                <Table.Cell className="w-52">
                  {Loan.book.signatureCode}{" "}
                </Table.Cell>
                <Table.Cell className={`${NeedAccions ? `hidden` : ``} w-64`}>
                  Adrian Aguilar
                </Table.Cell>
                <Table.Cell className={`${NeedAccions ? `` : `hidden`}`}>
                  {Inprogress ? (
                    <BTNInprogresLoan Loan={Loan} />
                  ) : (
                    <BTNResolveLoan Loan={Loan} />
                  )}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
};

export default TBLLoan;

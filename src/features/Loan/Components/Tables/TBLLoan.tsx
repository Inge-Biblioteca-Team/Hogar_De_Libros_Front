import { Table } from "flowbite-react";
import BTNResolveLoan from "../BTNResolveLoan";
import { useNavigate } from "react-router-dom";
import BTNInprogresLoan from "../BTNInprogresLoan";
const TBLLoan = ({ NeedAccions, Inprogress }: { NeedAccions: boolean, Inprogress:boolean }) => {
  const rows = Array(5).fill(null);
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
          {rows.map((_, index) => (
            <Table.Row
              key={index}
              className=" h-20"
              onClick={!NeedAccions ? () => Goto(2) : undefined}
            >
              <Table.Cell className="w-56">25/02/2003</Table.Cell>
              <Table.Cell className="w-56">25/02/2003</Table.Cell>
              <Table.Cell className="w-64">Adrian Aguilar</Table.Cell>
              <Table.Cell className="w-44">Nier</Table.Cell>
              <Table.Cell className="w-52">CR.12345.2352.5</Table.Cell>
              <Table.Cell className={`${NeedAccions ? `hidden` : ``} w-64`}>
                Adrian Aguilar
              </Table.Cell>
              <Table.Cell className={`${NeedAccions ? `` : `hidden`}`}>
                {Inprogress ? <BTNInprogresLoan/>:<BTNResolveLoan /> }
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default TBLLoan;

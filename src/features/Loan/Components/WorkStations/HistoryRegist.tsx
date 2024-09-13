import { Table } from "flowbite-react";
import { WSLoan } from "../../Types/ComputerLoan";
import ModalInfo from "./ModalInfo";
import { useState } from "react";

const HistoryRegist = ({ WSLoan }: { WSLoan: WSLoan }) => {
  const StartDate = new Date(WSLoan.LoanStartDate);
  const EndtDate = new Date(WSLoan.LoanExpireDate);
  const [show, setShow] = useState<boolean>(false)
  return (
    <>
      <Table.Row className=" h-24" onClick={()=>setShow(true)}>
        <Table.Cell>{WSLoan.UserName} </Table.Cell>
        <Table.Cell>{WSLoan.AdminName} </Table.Cell>
        <Table.Cell>{StartDate.toLocaleString("es-CR")} </Table.Cell>
        <Table.Cell>{EndtDate.toLocaleTimeString("es-CR")} </Table.Cell>
      </Table.Row>
      <ModalInfo WS={WSLoan} show={show} setShow={setShow} />
    </>
  );
};

export default HistoryRegist;

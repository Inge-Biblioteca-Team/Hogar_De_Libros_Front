import { Table } from "flowbite-react";
import { WSLoan } from "../../Types/ComputerLoan";

const HistoryRegist = ({ WSLoan }: { WSLoan: WSLoan }) => {
  const StartDate = new Date(WSLoan.LoanStartDate);
  const EndtDate = new Date(WSLoan.LoanExpireDate);

  return (
    <Table.Row>
      <Table.Cell>{WSLoan.UserName} </Table.Cell>
      <Table.Cell>{WSLoan.AdminName} </Table.Cell>
      <Table.Cell>{StartDate.toLocaleString("es-CR")} </Table.Cell>
      <Table.Cell>{EndtDate.toLocaleTimeString("es-CR")} </Table.Cell>
    </Table.Row>
  );
};

export default HistoryRegist;

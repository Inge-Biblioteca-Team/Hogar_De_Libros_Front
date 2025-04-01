import { Table } from "flowbite-react";
import { WSLoan } from "../../Types/ComputerLoan";
import ModalInfo from "./ModalInfo";
import { useState } from "react";
import { format } from "@formkit/tempo";

const HistoryRegist = ({ WSLoan }: { WSLoan: WSLoan }) => {
  const [show, setShow] = useState<boolean>(false);

  const LoanDate = format({
    date: WSLoan.LoanStartDate,
    format: "DD/MM/YYYY hh:mm A",
    tz: "America/Costa_Rica",
  });

  const LoanEDate = format({
    date: WSLoan.LoanExpireDate,
    format: "hh:mm A",
    tz: "America/Costa_Rica",
  });

  return (
    <>
      <Table.Row onClick={() => setShow(true)}>
        <Table.Cell>{WSLoan.workStation}</Table.Cell>
        <Table.Cell className="max-sm:hidden">{WSLoan.UserName} </Table.Cell>
        <Table.Cell>{LoanDate} </Table.Cell>
        <Table.Cell>
          {WSLoan.Status == "En curso" ? "Pendiente" : LoanEDate}{" "}
        </Table.Cell>
      </Table.Row>
      <ModalInfo WS={WSLoan} show={show} setShow={setShow} />
    </>
  );
};

export default HistoryRegist;

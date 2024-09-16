import { useState } from "react";
import { Loans } from "../../Types/BookLoan";
import MDLoanInfo from "./Modals/MDLoanInfo";
import { Button, Popover, Table } from "flowbite-react";
import { format } from "@formkit/tempo";

const LoanBody = ({
  Loan,
}: {
  Loan: Loans;
  Done?: boolean;
  Retry?: boolean;
  Aprov?: boolean;
}) => {
  const [showCancel, setShowCancel] = useState(false);
  const [showChange, setShowChange] = useState(false);

  const reqDate = format({
    date: Loan.LoanRequestDate,
    format: "DD/MM/YYYY",
    tz: "America/Costa_Rica",
  });
  const ExDate = format({
    date: Loan.LoanExpirationDate,
    format: { date: "full" },
    tz: "America/Costa_Rica",
  });

  return (
    <>
      <Popover
        placement="bottom"
        content={
          <div className=" flex items-center justify-center flex-col m-2">
            <h5>Solicitud #{Loan.BookLoanId} </h5>
            {Loan.Status == "Pendiente" && (
              <Button color={"failure"} onClick={() => setShowCancel(true)}>
                Cancelar Solicitud
              </Button>
            )}
            {Loan.Status == "En progreso" && (
              <Button color={"blue"} onClick={() => setShowChange(true)}>
                Solicitar Extencion de prestamo
              </Button>
            )}
            {Loan.Status == "Finalizado" && (
              <Button color={"blue"}>Solicitar Denuevo</Button>
            )}
          </div>
        }
      >
        <Table.Row className="cursor-pointer" key={Loan.BookLoanId}>
          <Table.Cell>{Loan.BookLoanId}</Table.Cell>
          <Table.Cell>
            <div className=" line-clamp-1">{Loan.book.Title}</div>
          </Table.Cell>
          <Table.Cell>{reqDate}</Table.Cell>
          {Loan.Status !== "Finalizado" ? (
            <Table.Cell>{ExDate}</Table.Cell>
          ) : null}
        </Table.Row>
      </Popover>

      <MDLoanInfo
        setShowCancel={setShowCancel}
        setShowChange={setShowChange}
        showChange={showChange}
        showCancel={showCancel}
        Loan={Loan}
      />
    </>
  );
};

export default LoanBody;

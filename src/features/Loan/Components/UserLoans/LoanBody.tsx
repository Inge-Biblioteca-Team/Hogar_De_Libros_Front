import { useState } from "react";
import { LoansRes } from "../../Types/BookLoan";
import { Button, Popover, Table } from "flowbite-react";
import { format } from "@formkit/tempo";
import MDExtension from "./Modals/MDExtension";

const LoanBody = ({
  Loan,
}: {
  Loan: LoansRes;
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
              <Button title="Cancelar solicitud" color={"red"} onClick={() => setShowCancel(true)}>
                Cancelar Solicitud
              </Button>
            )}
            {Loan.Status == "En progreso" && (
              <Button title="Solicitar extencion" color={"blue"} onClick={() => setShowChange(true)}>
                Solicitar Extencion de préstamo
              </Button>
            )}
          </div>
        }
      >
        <Table.Row className="cursor-pointer dark:bg-[#2d2d2d] bg-white" key={Loan.BookLoanId}>
          <Table.Cell className="max-sm:hidden">{Loan.BookLoanId}</Table.Cell>
          <Table.Cell>
            <div className=" line-clamp-1">{Loan.book?.Title || Loan.childrenBook?.Title}</div>
          </Table.Cell>
          <Table.Cell>{reqDate}</Table.Cell>
          {Loan.Status !== "Finalizado" ? (
            <Table.Cell>{ExDate}</Table.Cell>
          ) : null}
        </Table.Row>
      </Popover>

      <MDExtension
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

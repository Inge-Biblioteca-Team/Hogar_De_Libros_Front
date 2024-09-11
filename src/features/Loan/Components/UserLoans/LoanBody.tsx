import { useState } from "react";
import { Loans } from "../../Types/BookLoan";
import MDLoanInfo from "./Modals/MDLoanInfo";
import { Button, Popover, Table } from "flowbite-react";

const LoanBody = ({
  Loan
}: {
  Loan: Loans;
  Done?: boolean;
  Retry?: boolean;
  Aprov?: boolean;
}) => {
  const [showCancel, setShowCancel] = useState(false);
  const [showChange,setShowChange ] = useState(false);
  const reqDate = new Date(Loan.LoanRequestDate);
  const pickUpDate = new Date(Loan.BookPickUpDate);
  
  return (
    <>
      <Popover
        placement="bottom"
        aria-labelledby="profile-popover"
        content={
          <div className=" flex items-center justify-center flex-col m-2">
            <span>Solicitud #{Loan.BookLoanId} </span>
            {Loan.Status == "Pendiente" && (
              <Button color={"failure"}
              onClick={()=>setShowCancel(true)}>Cancelar Solicitud</Button>
            )}
            {Loan.Status == "En progreso" && (
              <Button color={"success"}
              onClick={()=>setShowChange(true)}>Solicitar Extencion de prestamo</Button>
            )}
            {Loan.Status == "Finalizado" && (
              <Button color={"success"}>Solicitar Denuevo</Button>
            )}
          </div>
        }
      >
        <Table.Row className="cursor-pointer" key={Loan.BookLoanId}>
          <Table.Cell>{Loan.BookLoanId}</Table.Cell>
          <Table.Cell className=" line-clamp-1">{Loan.book.Title}</Table.Cell>
          <Table.Cell>{reqDate.toLocaleDateString("es-ES")}</Table.Cell>
          {Loan.Status !=="Finalizado"? <Table.Cell>{pickUpDate.toLocaleDateString("es-ES")}</Table.Cell> : null}
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

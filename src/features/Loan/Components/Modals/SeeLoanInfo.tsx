import { Button, Modal } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { Loans } from "../../Types/BookLoan";
import { format } from "@formkit/tempo";
import DocumentForLoan from "../../Utilities/DocumentForLoan";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";

const SeeLoanInfo = ({
  see,
  setSee,
  Loan,
}: {
  see: boolean;
  setSee: Dispatch<SetStateAction<boolean>>;
  Loan: Loans;
}) => {
  const requestDate = format({
    date: Loan.LoanRequestDate,
    format: "DD/MM/YYYY hh:mm A",
    tz: "America/Costa_Rica",
  });

  const ExpiredDate = format({
    date: Loan.LoanExpirationDate,
    format: { date: "full" },
    tz: "America/Costa_Rica",
  });

  const generatePDF = async (data: Loans) => {
    const blob = await pdf(<DocumentForLoan loanInfo={data} />).toBlob();
    saveAs(blob, `boleta#${data.BookLoanId}.pdf`);
  };

  return (
    <Modal show={see} onClose={() => setSee(false)}>
      <Modal.Header>
        <span>Información del préstamo</span>
      </Modal.Header>
      <Modal.Body>
        <div className="flex flex-col gap-4 max-sm:text-sm text-lg">
          <span className=" flex flex-col">
            <strong>Información del Usuario</strong>
            <span>Nombre: {Loan.user.name}</span>
            <span>Cédula: {Loan.user.cedula}</span>
            <span>Dirección: {Loan.user.Adress}</span>
            <span>Teléfono: {Loan.user.PhoneNumber} </span>
            {Loan.OldObservations && (
              <details>
                <summary>Anotaciones del usuario</summary>
                <ul>
                  {Loan.OldObservations.map((observation) => (
                    <li>{observation} </li>
                  ))}
                </ul>
              </details>
            )}
          </span>
          <span className=" flex flex-col">
            <strong>Sobre el Libro</strong>
            <span>Título: {Loan.book.Title}</span>
            <span>Código de Signatura: {Loan.book.signatureCode || "N/A"}</span>
            <span>Código De Inscripcion: {Loan.book.InscriptionCode}</span>
          </span>
          <span className=" flex flex-col">
            <strong>Sobre el préstamo</strong>
            <span>Código de préstamo: {Loan.BookLoanId}</span>
            <span>Fecha de Solicitud: {requestDate}</span>
            <span>Fecha de vencimiento: {ExpiredDate}</span>
            <span>Observaciones: {Loan.Observations} </span>
            <span>Estado: {Loan.Status} </span>
          </span>
        </div>
      </Modal.Body>
      <Modal.Footer className=" flex items-center justify-center">
        <Button color={"red"} onClick={() => setSee(false)}>
          {" "}
          Cerrar{" "}
        </Button>
        <Button color={"blue"} onClick={() => generatePDF(Loan)}>
          Guardar Copia
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SeeLoanInfo;

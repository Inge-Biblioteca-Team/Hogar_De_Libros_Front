import { Button, Modal, Spinner } from "flowbite-react";
import { Dispatch, SetStateAction, useState } from "react";
import { LoansRes } from "../../Types/BookLoan";
import { format } from "@formkit/tempo";
import DocumentForLoan from "../../Utilities/DocumentForLoan";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import toast from "react-hot-toast";

const SeeLoanInfo = ({
  see,
  setSee,
  Loan,
}: {
  see: boolean;
  setSee: Dispatch<SetStateAction<boolean>>;
  Loan: LoansRes;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  const generatePDF = async (data: LoansRes) => {
    try {
      setIsLoading(true);
      const blob = await pdf(<DocumentForLoan loanInfo={data} />).toBlob();
      saveAs(blob, `boleta#${data.BookLoanId}.pdf`);
      toast.success('PDF generado exitosamente')
    } catch (error) {
      console.error("Error al generar PDF:", error);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <Modal dismissible show={see} onClose={close}>
      <Modal.Header className="dark:bg-neutral-900">
        <span>Información del préstamo</span>
      </Modal.Header>
      <Modal.Body className="dark:bg-[#2d2d2d]">
        <div className="flex flex-col gap-4 max-sm:text-sm text-lg">
          <span className=" flex flex-col">
            <strong>Información del Usuario</strong>
            <span>Nombre: {Loan.userName}</span>
            <span>Cédula: {Loan.userCedula}</span>
            <span>Dirección: {Loan.userAddress}</span>
            <span>Teléfono: {Loan.userPhone} </span>
            {Loan.OldObservations && Loan.OldObservations.length > 0 &&  (
              <details>
                <summary>Anotaciones del usuario</summary>
                <ul>
                  {Loan.OldObservations.map((observation, index) => (
                    <li key={index + "observation"}>{observation} </li>
                  ))}
                </ul>
              </details>
            )}
          </span>
          <span className=" flex flex-col">
            <strong>Sobre el Libro</strong>
            <span>Título: {Loan.book?.Title || Loan.childrenBook?.Title}</span>
            <span>Código de Signatura: {Loan.book?.signatureCode || Loan.childrenBook?.SignatureCode || "N/A"}</span>
            <span>Código De Inscripcion: {Loan.book?.InscriptionCode || Loan.childrenBook?.InscriptionCode}</span>
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
      <Modal.Footer className="dark:bg-[#2d2d2d] flex items-center justify-center">
        <Button color={"red"} onClick={() => setSee(false)}>
          {" "}
          Cerrar{" "}
        </Button>
        <Button color={"blue"} onClick={() => generatePDF(Loan)} disabled={isLoading}>
          {isLoading ? (
            <><Spinner aria-label="Spinner button example" size="sm" /> <p className="pl-3">Descargando...</p></>
          ) : (
            "Guardar copia"
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SeeLoanInfo;
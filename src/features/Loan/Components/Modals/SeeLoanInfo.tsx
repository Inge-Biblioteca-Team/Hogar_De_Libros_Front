import { Button, Modal } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { Loans } from "../../Types/BookLoan";

const SeeLoanInfo = ({
  see,
  setSee,
  Loan,
}: {
  see: boolean;
  setSee: Dispatch<SetStateAction<boolean>>;
  Loan: Loans;
}) => {
  const ReDate = new Date(Loan.LoanRequestDate).toLocaleDateString("es-ES");
  const ExDate = new Date(Loan.LoanExpirationDate).toLocaleDateString("es-ES");

  return (
    <Modal show={see} onClose={() => setSee(false)}>
      <Modal.Header>
        <span>Informacion del Prestamo</span>
      </Modal.Header>
      <Modal.Body>
        <div className="flex flex-col gap-4 text-lg">
          <span className=" flex flex-col">
            <strong>Informacion del Usuario</strong>
            <span>Nombre: {Loan.user.name}</span>
            <span>Apellidos: {Loan.user.lastName}</span>
            <span>Cedula: {Loan.user.cedula}</span>
          </span>
          <span className=" flex flex-col">
            <strong>Sobre el Libro</strong>
            <span>Titulo: {Loan.book.Title}</span>
            <span>Codigo de Signatura: {Loan.book.signatureCode}</span>
            <span>Codigo De Inscripcion: {Loan.book.InscriptionCode}</span>
          </span>
          <span className=" flex flex-col">
            <strong>Sobre el prestamo</strong>
            <span>Numero de Prestamo: {Loan.BookLoanId}</span>
            <span>Fecha de Solicitud: {ReDate}</span>
            <span>Fecha de vencimiento: {ExDate}</span>
            <span>Observaciones: {Loan.Observations} </span>
            <span>Estado: {Loan.Status} </span>
          </span>
        </div>
      </Modal.Body>
      <Modal.Footer className=" flex items-center justify-center">
        <Button color={"blue"} onClick={() => setSee(false)}>
          {" "}
          Cerrar{" "}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SeeLoanInfo;

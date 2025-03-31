import { Button, Modal, Textarea } from "flowbite-react";
import { Dispatch, SetStateAction, useState } from "react";
import { Loans } from "../../../Types/BookLoan";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import UseCancelLoan from "../../../Hooks/Books/UseCancelLoan";

const MDLoanInfo = ({
  Loan,
  showCancel,
  setShowCancel,
  showChange,
  setShowChange,
}: {
  Loan: Loans;
  showCancel: boolean;
  setShowCancel: Dispatch<SetStateAction<boolean>>;
  showChange: boolean;
  setShowChange: Dispatch<SetStateAction<boolean>>;
}) => {
  const { mutate: cancelLoan } = UseCancelLoan();

  const [Observations, setObservations] = useState<string>("");
  const handleCancel = () => {
    cancelLoan({
      LoanID: Loan.BookLoanId,
      person: Loan.Cedula,
      Observations: Observations,
    });
    setShowCancel(false);
  };

  return (
    <>
      <Modal dismissible show={showCancel} popup onClose={() => setShowCancel(false)} size={"md"}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3>¿Está seguro de cancelar la solicitud de préstamo?</h3>
            <Textarea
              rows={3}
              onChange={(event) => setObservations(event.target.value)}
              placeholder="Escriba el motivo de su cancelación."
            />
            <div className="flex justify-center gap-4 mt-10">
              <Button
                color="red"
                onClick={() => {
                  setShowCancel(false);
                }}
                title="Cancelar y regresar"
              >
                Volver
              </Button>
              <Button title="Confirmar" color="blue" onClick={() => handleCancel()}>
                Confirmar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal dismissible show={showChange} popup onClose={() => setShowChange(false)} size="md">
        <Modal.Header>Solicitar Extensión</Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <h3>Formulario de Solicitud de Extensión</h3>
            <Textarea
              rows={3}
              placeholder="Ingresa el motivo de la extensión" />
            <div className="flex justify-center gap-4 mt-10">
              <Button
                color="red"
                onClick={() => setShowChange(false)}
              >
                Cancelar
              </Button>
              <Button
                color="blue"
                onClick={() => {
                  setShowChange(false); 
                } }
              >
                Confirmar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MDLoanInfo;
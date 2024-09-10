import { Button, Modal, TextInput } from "flowbite-react";
import { Dispatch, SetStateAction, useState } from "react";
import { Loans } from "../../../Types/BookLoan";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import UseCancelLoan from "../../../Hooks/UseCancelLoan";

const MDLoanInfo = ({
  Loan,
  open,
  SetOpen,
  Done,
  Retry,
  Aprov,
}: {
  Loan: Loans;
  open: boolean;
  SetOpen: Dispatch<SetStateAction<boolean>>;
  Done?: boolean;
  Retry?: boolean;
  Aprov?: boolean;
}) => {
  const [showCancel, setShowCancel] = useState<boolean>(false);
  const [showChange, setShowChange] = useState<boolean>(false);

  const { mutate: cancelLoan } = UseCancelLoan();

  const handleCancel = () => {
    cancelLoan(Loan.BookLoanId);
  };

  const reqDate = new Date(Loan.LoanRequestDate);
  const PickUpDate = new Date(Loan.BookPickUpDate);
  return (
    <>
      <Modal show={open} onClose={() => SetOpen(false)}>
        <Modal.Header>Información del Préstamo</Modal.Header>
        <Modal.Body>
          <p>
            <strong>Título del libro:</strong> Los cuentos de mi tia panchita
          </p>
          <p>
            <strong>Autor:</strong> Carmen Lira
          </p>
          <p>
            <strong>Título del libro:</strong> Los cuentos de mi tia panchita
          </p>
          <p>
            <strong>Fecha de solicitud:</strong>{" "}
            {reqDate.toLocaleDateString("es-Es")}
          </p>
          <p>
            <strong>Fecha limite de devolucion:</strong>{" "}
            {PickUpDate.toLocaleDateString("es-Es")}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="button"
            gradientMonochrome="info"
            onClick={() => SetOpen(false)}
          >
            Regresar
          </Button>
          <Button
            type="button"
            color={"failure"}
            onClick={() => setShowCancel(true)}
            className={`${Aprov ? `` : ` hidden`}`}
          >
            Cancelar solicitud
          </Button>
          <Button
            type="button"
            color={"blue"}
            onClick={() => SetOpen(false)}
            className={`${Done ? `` : ` hidden`}`}
          >
            Solicitar Denuevo
          </Button>
          <Button
            type="button"
            color={"blue"}
            onClick={() => setShowChange(true)}
            className={`${Retry ? `` : ` hidden`}`}
          >
            solicitar extencion de prestamo
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showCancel} popup onClose={() => setShowCancel(false)}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3>Esta Seguro de cancelar la solicitud de prestamo</h3>
            <div className="flex justify-center gap-4 mt-10">
              <Button
                color="blue"
                onClick={() => {
                  setShowCancel(false);
                  SetOpen(false);
                }}
              >
                Regresar
              </Button>
              <Button color="failure" onClick={() => handleCancel()}>
                Cancelar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showChange} onClose={() => setShowChange(false)}>
        <Modal.Header>Extencion de fecha de devolucion</Modal.Header>
        <Modal.Body>
          <div className="">
            <label htmlFor="NewDate">Ingrese la fecha de devolucion</label>
            <TextInput id="NewDate" type="date" />
            <div className="flex justify-center gap-4 mt-10">
              <Button
                color="failure"
                onClick={() => {
                  setShowChange(false);
                  SetOpen(false);
                }}
              >
                Regresar
              </Button>
              <Button color="blue">Enviar</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MDLoanInfo;

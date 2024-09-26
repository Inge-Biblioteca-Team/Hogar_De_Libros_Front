import { Button, Modal, TextInput } from "flowbite-react";
import { Dispatch, SetStateAction} from "react";
import { Loans } from "../../../Types/BookLoan";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import UseCancelLoan from "../../../Hooks/Books/UseCancelLoan";

const MDLoanInfo = ({
  Loan,
  showCancel,
  setShowCancel,
  showChange,
  setShowChange
}: {
  Loan: Loans;
  showCancel: boolean;
  setShowCancel: Dispatch<SetStateAction<boolean>>;
  showChange: boolean;
  setShowChange: Dispatch<SetStateAction<boolean>>;


}) => {
  const { mutate: cancelLoan } = UseCancelLoan();

  const handleCancel = () => {
    cancelLoan(Loan.BookLoanId);
    setShowCancel(false)
  };

  return (
    <>
      <Modal show={showCancel} popup onClose={() => setShowCancel(false)}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3>Esta Seguro de cancelar la solicitud de préstamo</h3>
            <div className="flex justify-center gap-4 mt-10">
              <Button
                color="blue"
                onClick={() => {
                  setShowCancel(false)
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
        <Modal.Header>Extencion de fecha de devolución</Modal.Header>
        <Modal.Body>
          <div className="">
            <label htmlFor="NewDate">Ingrese la fecha de devolución</label>
            <TextInput id="NewDate" type="date" />
            <div className="flex justify-center gap-4 mt-10">
              <Button
                color="failure"
                onClick={() => {
                  setShowChange(false)
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

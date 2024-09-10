import { Modal, Button } from "flowbite-react";
import { Dispatch, SetStateAction} from "react";
import UseCancelLoan from "../../Hooks/UseCancelLoan";
import { Loans } from "../../Types/BookLoan";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const DenyRequest = ({
  Loan,
  setShowCancel,
  showCancel,
}: {
  Loan: Loans;
  showCancel: boolean;
  setShowCancel: Dispatch<SetStateAction<boolean>>;
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
            <h3>Esta Seguro de cancelar la solicitud de prestamo</h3>
            <div className="flex justify-center gap-4 mt-10">
              <Button
                color="blue"
                onClick={() => {
                  setShowCancel(false);
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
    </>
  );
};

export default DenyRequest;

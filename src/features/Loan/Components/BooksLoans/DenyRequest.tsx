import { Modal, Button } from "flowbite-react";
import { Dispatch, SetStateAction} from "react";
import { Loans } from "../../Types/BookLoan";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import UseRefuseLoan from "../../Hooks/Books/UseRefuseLoan";

const DenyRequest = ({
  Loan,
  setShowCancel,
  showCancel,
}: {
  Loan: Loans;
  showCancel: boolean;
  setShowCancel: Dispatch<SetStateAction<boolean>>;
}) => {
  const { mutate: refuse } = UseRefuseLoan();

  const handleCancel = () => {
    refuse(Loan.BookLoanId);
    setShowCancel(false)
  };

  return (
    <>
      <Modal show={showCancel} popup onClose={() => setShowCancel(false)}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3>Está Seguro de cancelar la solicitud de préstamo</h3>
            <div className="flex justify-center gap-4 mt-10">
              <Button
                color="red"
                onClick={() => {
                  setShowCancel(false);
                }}
              >
              Volver
              </Button>
              <Button color="blue" onClick={() => handleCancel()}>
                Confirmar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DenyRequest;

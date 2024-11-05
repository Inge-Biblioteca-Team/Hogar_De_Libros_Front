import { Modal, Button, Textarea } from "flowbite-react";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { Loans } from "../../Types/BookLoan";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import UseRefuseLoan from "../../Hooks/Books/UseRefuseLoan";
import UserContext from "../../../../Context/UserContext/UserContext";

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

  const onCancel = () => {
    setShowCancel(false);
  };

  const [observations, setObservations] = useState<string>("");

  const { currentUser } = useContext(UserContext);

  const onConfirm = () => {
    refuse(
      {
        LoanID: Loan.BookLoanId,
        person: currentUser?.name || "",
        Observations: observations,
      },
      {
        onSuccess: () => onCancel(),
      }
    );
  };

  return (
    <>
      <Modal
        show={showCancel}
        popup
        onClose={() => setShowCancel(false)}
        size={"sm"}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3>Está Seguro de rechazar la solicitud de préstamo</h3>
            <Textarea
              required
              rows={3}
              placeholder="Escriba el motivo de rechazo."
              onChange={(event) => setObservations(event.target.value)}
            />
            <div className="flex justify-center gap-4 mt-10">
              <Button
                color="red"
                onClick={() => {
                  setShowCancel(false);
                }}
              >
                Volver
              </Button>
              <Button color="blue" onClick={onConfirm}>
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

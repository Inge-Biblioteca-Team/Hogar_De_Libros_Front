import { Modal, Button, Textarea, Spinner } from "flowbite-react";
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
  const { mutate: refuse, isLoading } = UseRefuseLoan();

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
            <h3>¿Está seguro de rechazar la solicitud de préstamo?</h3>
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
                disabled={isLoading}
              >
                Volver
              </Button>
              <Button color="blue" onClick={onConfirm} disabled={isLoading}>
              {isLoading ? (
          <><Spinner aria-label="Spinner button example" size="sm" /> <p className="pl-3">Cargando...</p></>
        ) : (
          "Confirmar"
        )}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DenyRequest;

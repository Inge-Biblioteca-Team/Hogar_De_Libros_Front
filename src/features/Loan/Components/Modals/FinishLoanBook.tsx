import { Modal, TextInput, Button, Spinner } from "flowbite-react";
import { useContext, useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import UseFinishLoan from "../../Hooks/Books/UseFinishLoan";
import UserContext from "../../../../Context/UserContext/UserContext";

const FinishLoanBook = ({
  open,
  setOpen,
  BookLoanId,
  UserCedula,
  BookTitle,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  BookLoanId: number;
  UserCedula: string;
  BookTitle: string;
}) => {
  const { mutate: PatchStatus, isLoading } = UseFinishLoan();
  const [reason, setReason] = useState<string>("");

  const { currentUser } = useContext(UserContext);

  const handleConfirm = () => {
    PatchStatus(
      {
        LoanID: BookLoanId,
        person: currentUser?.name || "",
        Observations: reason,
      },
      {
        onSuccess: () => {
          setOpen(false);
        },
      }
    );
  };

  return (
    <Modal show={open} size="md" onClose={() => setOpen(false)} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="dark:text-white mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            ¿Estás seguro de que deseas finalizar este préstamo?
          </h3>
          <p className="dark:text-white mb-4 text-md font-semibold text-gray-600 dark:text-gray-300">
            Nombre del Usuario: {UserCedula} <br />
            Título del libro: {BookTitle}
          </p>
          <TextInput
            id="reason"
            type="text"
            placeholder="Escriba condición del libro entregado"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="mb-4"
          />
          <div className="flex justify-center gap-4">
            <Button color="red" onClick={() => setOpen(false)} disabled={isLoading}>
              Cancelar
            </Button>
            <Button color="blue" onClick={handleConfirm} disabled={isLoading}>
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
  );
};

export default FinishLoanBook;

import { Modal, TextInput, Button } from "flowbite-react";
import { useState } from "react";
import useFinalizeLoan from "../../Hooks/useFinishLoandBook";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const ModalDownFurniture = ({
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
  const { mutate: PatchStatus } = useFinalizeLoan(); 
  const [reason, setReason] = useState<string>("");

  const handleConfirm = () => {
    PatchStatus(
      {
        BookLoanId,
        Observation: reason,
      },
      {
        onSuccess: () => {
          setOpen(false);
        },
        onError: (error) => {
          console.error("Error al finalizar el préstamo:", error);
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
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            ¿Estás seguro de que deseas finalizar este préstamo?
          </h3>
          <p className="mb-4 text-md font-semibold text-gray-600 dark:text-gray-300">
            Usuario: {UserCedula} <br />
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
            <Button color="failure" onClick={handleConfirm}>
              Confirmar
            </Button>
            <Button color="gray" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalDownFurniture;

import { Modal, TextInput, Button } from "flowbite-react";
import { useState } from "react";
import useFinalizeLoan from "../../Hooks/useFinishLoandBook";
import { HiOutlineExclamationCircle } from "react-icons/hi";
  const ModalDownFurniture= ({
    open,
    setOpen,
    Id,
  }: {
    open: boolean;
    setOpen: (open: boolean) => void; Id:string;
  }) => {
  const {mutate: PatchStatus} = useFinalizeLoan();
  const [reason, setReason] = useState("");
  
  const handleConfirm = () => {
      PatchStatus(Id, { //ocupo arreglar esto por un error porque no resibe numeros pero no puedo pasarlo por string
        onSuccess: () => {
          setOpen(false); 
        },
      });
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
            <TextInput
            id="reason"
            type="text"
            placeholder="Escriba condición del libro entregado"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="mb-4"
          />
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={()=>handleConfirm()}>
                {"Confimar"}
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
  
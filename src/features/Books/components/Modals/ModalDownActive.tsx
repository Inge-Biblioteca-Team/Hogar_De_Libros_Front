import { Button, Modal, TextInput } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi"
import UseDownActive from "../../Hooks/UseDownActive";
import { useState } from "react";
const ModalDownActive = ({
  open,
  setOpen,
  BookTitle,
  id,
  category
}: {
  open: boolean;
  setOpen: (open: boolean) => void; BookTitle:string; id:string, category:string
}) => {
const {mutate: PatchStatus} = UseDownActive();
const [reason, setReason] = useState("");
const handleConfirm = () => {
    PatchStatus(id, {
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
            Esta seguro de dar de baja al libro {BookTitle}
          </h3>
          <TextInput
            id="reason"
            type="text"
            placeholder="Escriba la razón de la baja"
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

export default ModalDownActive;

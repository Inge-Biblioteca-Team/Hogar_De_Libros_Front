import { useState } from "react";
import { Button, Modal, TextInput } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import useDownFurniture from "../../Hooks/useDownFurniture";

const ModalDownFurniture= ({
    open,
    setOpen,
    id,
    Description,
  }: {
    open: boolean;
    setOpen: (open: boolean) => void; Description:string; id:number;
  }) => {
  const {mutate: PatchStatus} = useDownFurniture();
  const [reason, setReason] = useState("");
  
  const handleConfirm = () => {
    PatchStatus(id.toString(), {
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
              Esta seguro de dar de baja al activo {Description}
            </h3>
            <TextInput
            id="reason"
            type="text"
            placeholder="Escriba la razón de la baja"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="mb-4"
          />
          </div>
        </Modal.Body>
        <Modal.Footer className="flex w-full items-center justify-center">
            <Button color={"failure"} onClick={()=>setOpen(false)}>
                Cancelar
            </Button>
            <Button color={"blue"} type="submit" onClick={()=>handleConfirm()}>
                Confirmar
            </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  
  export default ModalDownFurniture;
  
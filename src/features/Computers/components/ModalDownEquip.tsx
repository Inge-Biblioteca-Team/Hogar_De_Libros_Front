import { Modal, Button } from "flowbite-react";

import { HiOutlineExclamationCircle } from "react-icons/hi";
import UseDownEquip from "../Hooks/UseDownEquip";

const ModalDownEquip = ({
    open,
    setOpen,
    Serial,
    Code
  }: {
    open: boolean;
    setOpen: (open: boolean) => void; Serial:string; Code:string
  }) => {
  const {mutate: PatchStatus} = UseDownEquip();
  
  const handleConfirm = () => {
      PatchStatus(Code, {
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
              Esta seguro de dar de baja al equipo {Serial}
            </h3>
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
  
  export default ModalDownEquip;
  
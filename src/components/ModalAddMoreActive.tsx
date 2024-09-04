import { Button, Modal } from "flowbite-react";
import { useNavigate } from "react-router-dom";

import { HiOutlineExclamationCircle } from "react-icons/hi";

const ModalAddMoreActive = ({
  open,
  Close,
}: {
  open: boolean;
  Close: (open: boolean) => void;
}) => {
  const useNavi = useNavigate();
  const Back = () => {
    useNavi(-1);
  };
  return (
    <Modal show={open} >
        <Modal.Body className="mx-auto">
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Desea Añadir Otro Activo ?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="red" onClick={Back}>
                No, Regresar.
              </Button>
              <Button
                className="bg-Bottoms text-white text-2xl rounded-lg 
            hover:bg-Bottoms-dark hover:scale-105
            max-sm:hidden"
                onClick={() => Close(false)}
              >
                Sí, Añadir otro activo
              </Button>
            </div>
          </div>
        </Modal.Body>
    </Modal>
  );
};

export default ModalAddMoreActive;

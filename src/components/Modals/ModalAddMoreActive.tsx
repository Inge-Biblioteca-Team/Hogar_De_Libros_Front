import { Button, Modal } from "flowbite-react";
import { useNavigate } from "react-router-dom";

import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Dispatch, SetStateAction } from "react";

const ModalAddMoreActive = ({
  open,
  Close,
  setSNew
}: {
  open: boolean;
  Close: (open: boolean) => void;
  setSNew?: Dispatch<SetStateAction<boolean>>;
}) => {
  const useNavi = useNavigate();
  const Back = () => {
    useNavi(-1);
  };

  const handleNoClick = () => {
    if (setSNew) {
      setSNew(false); 
      Close(false)
    } else {
      Back(); 
    }
  };
  return (
    <Modal dismissible show={open} >
        <Modal.Body className="mx-auto">
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            ¿Desea añadir otro activo?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="red" onClick={handleNoClick}>
                No, regresar.
              </Button>
              <Button
                color={"blue"}
                onClick={() => Close(false)}
              >
                Sí, añadir otro activo
              </Button>
            </div>
          </div>
        </Modal.Body>
    </Modal>
  );
};

export default ModalAddMoreActive;

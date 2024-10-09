import { Modal, Button } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const ModalAddMore = ({
  open,
  setOpen,
  primaryOpen,
  text
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  primaryOpen: Dispatch<SetStateAction<boolean>>;
  text:string
}) => {
  return (
    <Modal show={open}>
      <Modal.Body className="mx-auto">
        <div className="text-center">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Desea añadir otro {text} ?
          </h3>
          <div className="flex justify-center gap-4">
            <Button
              color="failure"
              onClick={() => {
                primaryOpen(false), setOpen(false);
              }}
            >
              No, Regresar.
            </Button>
            <Button color={"blue"} onClick={() => setOpen(false)}>
              Sí, Añadir otro activo
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalAddMore;

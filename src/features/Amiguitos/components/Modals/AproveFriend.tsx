import { Button, Modal } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import UseAproveFriend from "../../Hooks/UseAproveFriend";

const AproveFriend = ({
  open,
  setOpen,
  id,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  id: number;
}) => {
  const onClose = () => {
    setOpen(false);
  };

  const { mutate: aprove } = UseAproveFriend();

  const onConfirm = (Id: number) => {
    aprove(Id, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <Modal  show={open} popup size={"md"}>
      <Modal.Body className="dark:bg-[#2d2d2d] text-center">
        <div className="text-center mt-7">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
        </div>
        <span>¿Está seguro de aprobar la solicitud de amigo?</span>
      </Modal.Body>
      <Modal.Footer className="dark:bg-[#2d2d2d] flex items-center justify-center">
        <Button color={"red"} onClick={onClose}>
          Cancelar
        </Button>
        <Button color={"blue"} onClick={() => onConfirm(id)}>
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AproveFriend;

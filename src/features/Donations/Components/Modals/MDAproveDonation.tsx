import { Button, Modal, Spinner } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import UseAproveDonation from "../../Hooks/UseAproveDonation";

const MDAproveDonation = ({
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

  const { mutate: aprove, isLoading } = UseAproveDonation();

  const onConfirm = (id: number) => {
    aprove(id, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <Modal show={open} onClose={onClose} popup size={"md"}>
      <Modal.Header className="dark:bg-[#2d2d2d]"></Modal.Header>
      <Modal.Body className="dark:bg-[#2d2d2d] flex justify-center items-center">
        <span className=" text-center">
          Confirmar aprobación de la donación
        </span>{" "}
      </Modal.Body>
      <Modal.Footer className="dark:bg-[#2d2d2d] flex justify-center items-center">
        <Button color={"red"} onClick={onClose} disabled={isLoading}>
          Cancelar
        </Button>
        <Button color={"blue"} onClick={() => onConfirm(id)} disabled={isLoading}>
        {isLoading ? (
          <><Spinner aria-label="Spinner button example" size="sm" /> <p className="pl-3">Cargando...</p></>
        ) : (
          "Confirmar"
        )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MDAproveDonation;

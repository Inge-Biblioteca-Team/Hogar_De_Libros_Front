import { Button, Modal, Spinner } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import UseDeleteAdvice from "../../Hooks/UseDeleteAdvice";

const DeleteAdvice = ({
  open,
  setOpen,
  id,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  id: number;
}) => {
  const { mutate: deleteAdvice, isLoading } = UseDeleteAdvice();

  const onConfirm = () => {
    deleteAdvice(id, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <Modal dismissible show={open} onClose={() => setOpen(false)} popup size={"md"}>
      <Modal.Body className=" mt-4 text-center">
        <div className="text-center mt-7">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
        </div>
        <span>
          {" "}
          ¿Está seguro de que desea eliminar este aviso? <br />
        </span>
        <span>
          {" "}
          En caso de aceptar y eliminarlo, no podrá revertir esta acción.
        </span>
      </Modal.Body>
      <Modal.Footer className=" flex items-center justify-center">
        <Button color={"red"} onClick={() => setOpen(false)} disabled={isLoading}>
          Volver
        </Button>
        <Button color={"blue"} type="submit" onClick={() => onConfirm()} disabled={isLoading}>
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

export default DeleteAdvice;

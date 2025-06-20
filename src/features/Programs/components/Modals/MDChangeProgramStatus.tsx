import { Button, Modal, Spinner } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { Program } from "../../types/Programs";
import UseDisableProgram from "../../Hooks/UseDisableProgram";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const MDChangeProgramStatus = ({
  open,
  setOpen,
  program,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  program: Program;
}) => {
  const { mutate: PatchStatus, isLoading } = UseDisableProgram();
  const handleConfirm = () => {
    PatchStatus(program.programsId, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <Modal
      
      show={open}
      onClose={() => setOpen(false)}
      popup
      size={"md"}
    >
      <Modal.Body className="dark:bg-[#2d2d2d] text-center">
        <div className="text-center mt-7">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
        </div>
        <span className="dark:text-white">
          ¿Está seguro de deshabilitar el programa ?
          <strong className=" font-bold">{program.programName}</strong>?
        </span>
        <br />
        <span>¡¡Está acción no es reversible!!!</span>
      </Modal.Body>
      <Modal.Footer className="dark:bg-[#2d2d2d] flex items-center justify-center">
        <Button
          title="Cancelar y regresar"
          color={"red"}
          onClick={() => setOpen(false)}
          disabled={isLoading}
        >
          Cancelar
        </Button>
        <Button
          title="Confirmar"
          color={"blue"}
          onClick={handleConfirm}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Spinner aria-label="Spinner button example" size="sm" />{" "}
              <p className="pl-3">Cargando...</p>
            </>
          ) : (
            "Confirmar"
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MDChangeProgramStatus;

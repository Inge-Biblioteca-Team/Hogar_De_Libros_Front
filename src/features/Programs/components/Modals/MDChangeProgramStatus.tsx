import { Button, Modal } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { Program } from "../../types/Programs";
import UseDisableProgram from "../../Hooks/UseDisableProgram";

const MDChangeProgramStatus = ({
  open,
  setOpen,
  program,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  program: Program;
}) => {
  const { mutate: PatchStatus } = UseDisableProgram();
  const handleConfirm = () => {
    PatchStatus(program.programsId, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <Modal show={open} onClose={() => setOpen(false)}>
      <Modal.Header>Deshabilitar Programa {program.programName} </Modal.Header>
      <Modal.Body className=" text-center">
        <span>
          ¿Esta seguro de deshabilitar el programa{" "}
          <strong className=" font-bold">{program.programName}</strong>?
        </span>
        <br />
        <span>Esta acción no es revertible!!!</span>
      </Modal.Body>
      <Modal.Footer className=" flex items-center justify-center">
        <Button color={"failure"} onClick={() => setOpen(false)}>
          Cancelar
        </Button>
        <Button color={"blue"} onClick={handleConfirm}>Confirmar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MDChangeProgramStatus;

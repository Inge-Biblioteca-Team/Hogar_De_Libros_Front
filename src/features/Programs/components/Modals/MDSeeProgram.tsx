import { Modal, Button } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { Program } from "../../types/Programs";

const MDSeeProgram = ({
  open,
  setOpen,
  program,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  program: Program;
}) => {
  return (
    <Modal dismissible show={open} onClose={() => setOpen(false)}>
      <Modal.Header className="dark:bg-neutral-900">Información del programa</Modal.Header>
      <Modal.Body className="dark:bg-[#2d2d2d] grid max-sm:grid-cols-1 grid-cols-3 gap-5">
        <div>
          <figure>
            <img
              className="w-full h-48 rounded-lg"
              src={program.image}
              alt={program.programName}
            />
          </figure>
        </div>
        <div className=" col-span-2 flex flex-col justify-center gap-2">
          <div>
            <strong className=" font-bold">Nombre:</strong>{" "}
            <span>{program.programName} </span>
          </div>
          <div>
            <strong className=" font-bold">Descripción:</strong>{" "}
            <span className=" line-clamp-3">{program.description} </span>
          </div>
          <div>
            <strong className=" font-bold">Estado:</strong>
            <span>{program.status ? "Activo" : "Inactivo"} </span>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="dark:bg-[#2d2d2d] flex items-center justify-center">
        <Button color={"blue"} onClick={() => setOpen(false)}>
          Regresar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MDSeeProgram;

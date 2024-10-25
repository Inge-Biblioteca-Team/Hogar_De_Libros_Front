import { Button, Modal } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { Advice } from "../../Types/Advice";
import { formatToDMY } from "../../../../components/FormatTempo";

const ViewAdvice = ({
  open,
  setOpen,
  advice,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  advice: Advice;
}) => {
  const date = formatToDMY(advice.date);
  return (
    <Modal show={open} onClose={() => setOpen(false)}>
      <form>
        <Modal.Body className="flex flex-col">
          <figure>
            <img
              className=" h-52 w-full rounded-xl"
              src={advice.image}
              alt=""
            />
          </figure>
          <div className=" flex flex-col justify-between gap-3 mt-4">
            <div>Información del aviso</div>
            <div>
              <span>Motivo: {advice.reason} </span>
            </div>
            <div>
              <span>Fecha: {date}</span>
            </div>
            <div>
              <span>Información Extra: {advice.extraInfo} </span>
            </div>
            <div>
              <span>Categoría del aviso: {advice.category} </span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className=" flex items-center justify-center">
          <Button color={"blue"} onClick={() => setOpen(false)}>
            Regresar
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default ViewAdvice;

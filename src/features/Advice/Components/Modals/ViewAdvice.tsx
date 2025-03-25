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
              <strong>Motivo: </strong> {advice.reason}
            </div>
            <div>
              <strong>Fecha: </strong> {date}
            </div>
            <div>
              <strong>Información extra: </strong>{advice.extraInfo}
            </div>
            <div>
              <strong> Categoría del aviso: </strong>{advice.category}
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

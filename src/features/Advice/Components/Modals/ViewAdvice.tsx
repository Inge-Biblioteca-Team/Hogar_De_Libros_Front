import { Button, Modal } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";

const ViewAdvice = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal show={open} onClose={() => setOpen(false)}>
      <form>
        <Modal.Body className="flex flex-col">
          <figure>
            <img
              className=" h-52 w-full rounded-xl"
              src="https://i.ytimg.com/vi/6su62xI2x2Q/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhQIGIoZTAP&rs=AOn4CLB71m-kX747siXlWD9i8fyhkpUYZQ"
              alt=""
            />
          </figure>
          <div className=" flex flex-col justify-between gap-3 mt-4">
            <div>Información del aviso</div>
            <div>
              <span>Motivo:</span>
              <span></span>
            </div>
            <div>
              <span>Fecha:</span>
              <span></span>
            </div>
            <div>
              <span>Información Extra:</span>
              <span></span>
            </div>
            <div>
              <span>Categoría del aviso:</span>
              <span></span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className=" flex items-center justify-center">
          <Button color={"failure"} onClick={() => setOpen(false)}>
            Regresar
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default ViewAdvice;

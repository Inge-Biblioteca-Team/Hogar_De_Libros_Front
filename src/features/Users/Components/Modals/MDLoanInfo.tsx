import { Button, Modal } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";

const MDLoanInfo = ({
  open,
  SetOpen,
  Done,
  Retry,
  Aprov,
}: {
  open: boolean;
  SetOpen: Dispatch<SetStateAction<boolean>>;
  Done?:boolean,
  Retry?:boolean,
  Aprov?:boolean,
}) => {
  return (
    <>
      <Modal show={open} onClose={()=>SetOpen(false)}>
        <Modal.Header>Información del Préstamo</Modal.Header>
        <Modal.Body>
          <p>
            <strong>Título del libro:</strong> Los cuentos de mi tia panchita
          </p>
          <p>
            <strong>Autor:</strong> Carmen Lira
          </p>
          <p>
            <strong>Título del libro:</strong> Los cuentos de mi tia panchita
          </p>
          <p>
            <strong>Fecha de solicitud:</strong> 25/5/4045
          </p>
          <p>
            <strong>Fecha limite de devolucion:</strong> 24/7/5000
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button type="button" gradientMonochrome="info" onClick={()=>SetOpen(false)}>
            Regresar
          </Button>
          <Button type="button" color={"failure"}  onClick={() => SetOpen(false)} className={`${Aprov? ``:` hidden`}`}>
            Cancelar solicitud
          </Button>
          <Button type="button" color={"blue"} onClick={() => SetOpen(false)} className={`${Done? ``:` hidden`}`}>
            Solicitar Denuevo
          </Button>
          <Button type="button" color={"blue"} onClick={() => SetOpen(false)} className={`${Retry? ``:` hidden`}`}>
            solicitar extencion de prestamo
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MDLoanInfo;

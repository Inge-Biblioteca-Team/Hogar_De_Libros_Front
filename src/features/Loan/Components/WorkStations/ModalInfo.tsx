import { Button, Modal } from "flowbite-react";
import { WSLoan } from "../../Types/ComputerLoan";
import { Dispatch, SetStateAction } from "react";
import { format } from "@formkit/tempo";

const ModalInfo = ({
  WS,
  show,
  setShow,
}: {
  WS: WSLoan;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}) => {
  const LoanDate = format({
    date: WS.LoanStartDate,
    format: "DD/MM/YYYY hh:mm A",
    tz: "America/Costa_Rica",
  });

  const LoanEDate = format({
    date: WS.LoanExpireDate,
    format: "hh:mm A",
    tz: "America/Costa_Rica",
  });
  return (
    <>
      <Modal show={show} onClose={() => setShow(false)}>
        <Modal.Header>
          <span>Información de préstamo de equipo</span>
        </Modal.Header>
        <Modal.Body>
          <span className=" flex-col flex ml-3 gap-4 mt-3">
            <span>
              {" "}
              <strong>Número de préstamo: </strong> {WS.ComputerLoanId}
            </span>
            <span>
              {" "}
              <strong>Número de Máquina:</strong> {WS.workStation}
            </span>
            <span>
              {" "}
              <strong>Usuario:</strong> {WS.UserName}
            </span>
            <span>
              {" "}
              <strong>Aprobado Por:</strong> {WS.AdminName}
            </span>
            <span>
              {" "}
              <strong>Fecha y Hora del uso:</strong> {LoanDate}
            </span>
            <span>
              <strong>Hora de Fin:</strong>{" "}
              {WS.Status == "En curso" ? "Pendiente" : LoanEDate}
            </span>
            <span>
              <strong>Estado:</strong> {WS.Status}
            </span>
          </span>
        </Modal.Body>

        <Modal.Footer className=" flex items-center justify-center">
          <Button color={"blue"} onClick={() => setShow(false)}>
            Regresar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalInfo;

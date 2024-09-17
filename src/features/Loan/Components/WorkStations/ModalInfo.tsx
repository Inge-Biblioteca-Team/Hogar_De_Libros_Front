import { Button, Modal } from "flowbite-react";
import { WSLoan } from "../../Types/ComputerLoan";
import { Dispatch, SetStateAction } from "react";

const ModalInfo = ({WS, show, setShow}:{WS:WSLoan, show:boolean, setShow: Dispatch<SetStateAction<boolean>>}) => {
    const StartDate = new Date(WS.LoanStartDate);
    const EndtDate = new Date(WS.LoanExpireDate);
  return (
    <>
      <Modal show={show} onClose={()=>setShow(false)} >
        <Modal.Header>
            <span>Información de préstamo de equipo</span>
        </Modal.Header>
            <span className=" flex-col flex ml-3 gap-4 mt-3">
                <span>
                    Numero de préstamo: {WS.ComputerLoanId}
                </span>
                <span>
                    Numero de Maquina: {WS.workStation}
                </span>
                <span>
                    Usuario: {WS.UserName}
                </span>
                <span>
                    Aprobado Por: {WS.AdminName}
                </span>
                <span>
                    Fecha y Hora del uso: {StartDate.toLocaleDateString("es-CR")}
                </span>
                <span>
                    Hora de Finalizacion: {EndtDate.toLocaleTimeString('es-CR')}
                </span>
                <span>
                    Estado: {WS.Status}
                </span>
            </span>
        <Modal.Body></Modal.Body>

        <Modal.Footer className=" flex items-center justify-center">
            <Button color={"blue"} onClick={()=>setShow(false)}>Regresar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalInfo;

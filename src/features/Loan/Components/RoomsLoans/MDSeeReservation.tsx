import { Modal, Button } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { HourMapping, Reserve } from "../../Types/RoomsReservations";
import { formatToDMY } from "../../../../components/FormatTempo";

const MDSeeReservation = ({
  open,
  setOpen,
  reserve,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  reserve: Reserve;
}) => {
  const reserveDay = formatToDMY(reserve.date);
  const start = HourMapping[Math.min(...reserve.selectedHours)];
  const end = HourMapping[Math.max(...reserve.selectedHours)];

  return (
    <Modal show={open} onClose={() => setOpen(false)}>
      <Modal.Header>Información de solicitud de reserva</Modal.Header>
      <Modal.Body className=" flex flex-col gap-2">
        <div>
          <strong>Nombre del solicitante</strong>
          <div>{reserve.name} </div>
        </div>
        <div>
          <strong>Contactos del solicitante</strong>
          <br /> <span>Email: </span>
          <div>Telefono: </div>
        </div>
        <div>
          <strong>Fecha de reserva</strong>
          <div>{reserveDay} </div>
        </div>
        <div>
          <strong>Sala solicitada</strong>
          <div>{reserve.personNumber} </div>
        </div>
        <div>
          <strong>Hora de inicio y fin</strong>
          <div>
            {start} a {end}{" "}
          </div>
        </div>
        {reserve.courseId != undefined && (
          <div>
            <strong>Informacion del Curso</strong>
            <div></div>
          </div>
        )}
        {reserve.EventId != undefined && (
          <div>
            <strong>Informacion del Evento</strong>
            <div></div>
          </div>
        )}
        <div>
          <strong>Observaciones</strong>
          <div>{reserve.observations} </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="flex items-center justify-center">
        <Button color={"blue"} onClick={() => setOpen(false)}>
          Regresar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MDSeeReservation;

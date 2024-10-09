import { Modal, Button } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { HourMapping, Reserve } from "../../../Types/RoomsReservations";
import { formatToDMY } from "../../../../../components/FormatTempo";

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
      <Modal.Header>Resumen de reserva de sala</Modal.Header>
      <Modal.Body className=" flex flex-col gap-2">
        <div>
          <strong>Nombre del solicitante</strong>
          <div>
            {reserve.UserName} {reserve.UserLastName}{" "}
          </div>
        </div>
        {reserve.UserName !== reserve.name && (
          <div>
            <strong>Nombre de Institución</strong>
            <div>{reserve.name}</div>
          </div>
        )}
        <div>
          <strong>Contactos del solicitante</strong>
          <br /> <span>Email: {reserve.UserEmail} </span>
          <div>Teléfono: {reserve.UserPhone} </div>
        </div>
        <div>
          <strong>Fecha reservada</strong>
          <div>{reserveDay} </div>
        </div>
        <div>
          <strong>Sala solicitada</strong>
          <div>{reserve.room}{" "}{reserve.roomName} </div>
        </div>
        <div>
          <strong>Hora de inicio y fin</strong>
          <div>
            <div>{start === end ? `${end}` : `${start} a ${end}`}</div>
          </div>
        </div>
        {reserve.CourseName != "" && (
          <div>
            <strong>Información del Curso</strong>
            <div>{reserve.CourseName} </div>
          </div>
        )}
        {reserve.EventName != "" && (
          <div>
            <strong>Información del Evento</strong>
            <div>{reserve.EventName} </div>
          </div>
        )}
        {reserve.observations != "" && (
          <div>
            <strong>Observaciones</strong>
            <div>{reserve.observations} </div>
          </div>
        )}
        <div>
          <strong>Observaciones Finales</strong>
          <div>{reserve.finishObservation} </div>
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

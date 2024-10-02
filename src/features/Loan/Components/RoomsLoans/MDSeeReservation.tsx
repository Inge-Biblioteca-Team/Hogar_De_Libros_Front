import { Modal, Button } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { Reserve } from "../../../Rooms/Types/RoomType";
import { format } from "@formkit/tempo";

const MDSeeReservation = ({
  open,
  setOpen,
  reserve,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  reserve: Reserve;
}) => {
  const Time = reserve.startTime;
  const TimeE = reserve.startTime;
  const dateAux = reserve.date;
  const dateTimeString = `${dateAux}T${Time}`;
  const dateTimeEString = `${dateAux}T${TimeE}`;
  const dateTime = new Date(dateTimeString);
  const dateTimeE = new Date(dateTimeEString);

  const reserveDay = format({
    date: reserve.date,
    format: "DD/MM/YYYY",
    tz: "America/Costa_Rica",
  });

  const start = format({
    date: dateTime,
    format: "h:mm A",
    tz: "America/Costa_Rica",
  });
  const end = format({
    date: dateTimeE,
    format: "h:mm A",
    tz: "America/Costa_Rica",
  });

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
          <strong>Sala solicitdada</strong>
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

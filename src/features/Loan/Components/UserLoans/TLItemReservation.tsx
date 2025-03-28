import { Button, Card, Modal, Spinner, Timeline } from "flowbite-react";
import { HourMapping, myReservation } from "../../Types/RoomsReservations";
import { CiCalendarDate } from "react-icons/ci";
import UseCancelReservation from "../../Hooks/Rooms/UseCancelReservation";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { formatToDMY } from "../../../../components/FormatTempo";

const TLItemReservation = ({ reserve }: { reserve: myReservation }) => {
  const start = HourMapping[Math.min(...reserve.selectedHours)];
  const end = HourMapping[Math.max(...reserve.selectedHours)];

  const { mutate: cancelReserve, isLoading } = UseCancelReservation();
  const handleCancel = async () => {
    cancelReserve(reserve.rommReservationId, {
      onSuccess: () => {
        setOpen(false);
      },
      onError: () => {},
    });
  };

  const [open, setOpen] = useState<boolean>();

  const reserveDay = formatToDMY(reserve.date);

  return (
    <>
      <Timeline.Item className="!w-72 min-w-72">
        <Timeline.Point icon={CiCalendarDate} className="custom" />
        <Timeline.Content>
          <Timeline.Time>{reserveDay} </Timeline.Time>
          <Timeline.Title className="h-14 line-clamp-1">
            {reserve.roomName}{" "}
          </Timeline.Title>
          <Timeline.Body>
            <Card className="dark:bg-[#2d2d2d] dark:text-white p0 hover:scale-105">
              <figure className="w-full rounded-xl">
                <img
                  className="w-full rounded-t-lg h-28"
                  alt={reserve.name}
                  src={reserve.images[0]}
                />
              </figure>
              <div className="flex flex-col ml-3 justify-between mr-3 h-80">
                <span className="font-bold text-black"></span>
                <span>
                  Reservación de <br />
                  {reserve.name}
                </span>
                <span>Fecha reservada: {reserveDay}</span>
                <span>Número de personas: {reserve.personNumber}</span>
                <span>Sala: {reserve.roomName}</span>
                <span>
                  Horas reservadas <br /> {start} a {end}
                </span>
                <span>
                  <div className=" line-clamp-2">
                    Observaciones: <br />
                    {reserve.observations || "Ninguna"}
                  </div>
                </span>
                <span>Motivo: {reserve.reason}</span>
                <span>{reserve.reserveStatus} </span>
              </div>
              <div className="flex justify-center items-center mb-2">
                <Button title="Cancelar y regresar" color={"blue"} onClick={() => setOpen(true)}>
                  Cancelar
                </Button>
              </div>
            </Card>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Modal dismissible show={open} onClose={() => setOpen(false)}>
        <Modal.Body className="flex items-center justify-center flex-col">
          <div className="text-center mt-7">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          </div>
          <span>
          ¿Está seguro de que quiere cancelar la reserva de {reserve.name}?" 
          </span>
          <br />
          <span>¡Esta acción no es reversible!</span>
        </Modal.Body>
        <Modal.Footer className="flex items-center justify-center">
          <Button title="Cancelar y regresar" color={"red"} tabIndex={2} onClick={() => setOpen(false)} disabled={isLoading}>
            Regresar
          </Button>
          <Button title="Confirmar" color={"blue"} onClick={handleCancel} disabled={isLoading}>
          {isLoading ? (
          <><Spinner aria-label="Spinner button example" size="sm" /> <p className="pl-3">Cargando...</p></>
        ) : (
          "Confirmar"
        )}
          </Button>{" "}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TLItemReservation;

import { Button, Modal } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { FaCalendarAlt } from "react-icons/fa"; 
import { formatToDMY } from "../../../../components/FormatTempo";
import { Events } from "../../types/Events";

const ViewEvent = ({
    see,
    setSee,
    event,
  }: {
    see: boolean;
    setSee: Dispatch<SetStateAction<boolean>>;
    event: Events; 
  }) => {

    const eventDay = formatToDMY(event.Date);
    return (
      <Modal  show={see} onClose={() => setSee(false)} size-40>
        <Modal.Header className="dark:bg-neutral-900">
          <span>Evento: {event.Title} </span>
        </Modal.Header>
        <Modal.Body className="dark:bg-[#2d2d2d] flex flex-col gap-2">
          <figure className="w-full flex items-center justify-center">
            {event.Image ? (
              <img
                src={event.Image}
                alt="Imagen del evento"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
            ) : (
              <FaCalendarAlt size={120} className="text-gray-400" />
            )}
          </figure>
          <div className="flex-col flex gap-2 text-left justify-start">
          <strong className="text-center p-2">Información del Evento</strong>
          <span>
            <strong>Ubicación:</strong> {event.Location}
          </span>
          <span>
            <strong>Fecha:</strong> {eventDay}
          </span>
          <span>
            <strong>Hora:</strong> {event.Time}
          </span>
          <span>
            <strong>Categoría:</strong> {event.Category}
          </span>
          {event.TargetAudience && (
            <span>
              <strong>Público objetivo:</strong> {event.TargetAudience}
            </span>
          )}
          {event.InchargePerson && (
            <span>
              <strong>Persona a cargo:</strong> {event.InchargePerson}
            </span>
          )}
          </div>
        </Modal.Body>
        <Modal.Footer className="dark:bg-[#2d2d2d] flex items-center justify-center">
          <Button color={"blue"} onClick={() => setSee(false)}>
            Regresar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  
  export default ViewEvent;
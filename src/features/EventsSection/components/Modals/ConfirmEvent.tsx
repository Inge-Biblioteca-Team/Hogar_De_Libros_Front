import { Button, Modal } from "flowbite-react";
import { updateEvent } from "../../types/Events";

const ConfirmModalEvent = ({
    isOpen,
    onConfirm,
    onCancel,
    eventItem,
    action,
  }: {
    isOpen: boolean;
    eventItem: updateEvent;
    onCancel: () => void;
    onConfirm: (eventItem: updateEvent) => void;
    action: string;
  }) => {
    return (
      <Modal show={isOpen} onClose={onCancel}>
        <Modal.Header>Confirmar {action} Evento</Modal.Header>
        <Modal.Body>
          <p>
            ¿Está seguro de que desea {action} este evento?
            <br />
            <strong>Título:</strong>
            <span> {eventItem.Title}</span>
            <br />
            <strong>Ubicación:</strong>
            <span> {eventItem.Location}</span>
            <br />
            <strong>Fecha:</strong>
            <span> {eventItem.Date}</span>
            <br />
            <strong>Hora:</strong>
            <span> {eventItem.Time}</span>
            <br />
            <strong>Categoría:</strong>
            <span> {eventItem.Category}</span>
            <br />
            {eventItem.TargetAudience && (
              <>
                <strong>Público objetivo:</strong>
                <span> {eventItem.TargetAudience}</span>
                <br />
              </>
            )}
            {eventItem.InchargePerson && (
              <>
                <strong>Persona a cargo:</strong>
                <span> {eventItem.InchargePerson}</span>
                <br />
              </>
            )}
          </p>
        </Modal.Body>
        <Modal.Footer className="flex w-full items-center justify-center">
          <Button color="failure" onClick={onCancel}>
            Cancelar
          </Button>
          <Button
            color={"blue"}
            onClick={() => onConfirm(eventItem)}
          >
            Sí, estoy seguro
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  
  export default ConfirmModalEvent;
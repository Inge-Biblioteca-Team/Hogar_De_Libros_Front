import { Dispatch, SetStateAction, useState } from "react";
import { Room } from "../../Types/Room_Interface";
import { Button, Modal } from "flowbite-react";
import { PiSelectionPlusLight } from "react-icons/pi";

const ViewRoom = ({
  see,
  setSee,
  room,
}: {
  see: boolean;
  setSee: Dispatch<SetStateAction<boolean>>;
  room: Room;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const statusMap: Record<string, string> = {
    M: "Mantenimiento",
    D: "Disponible",
    C: "Clausurada",
  };

  const roomStatus = statusMap[room.status] || "Desconocido";

  const images = room.image || [room.image];

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Modal show={see} onClose={() => setSee(false)} size="md">
      <Modal.Header className="dark:bg-neutral-900">
        <span>Sala: {room.roomNumber}</span>
      </Modal.Header>
      <Modal.Body className="dark:bg-[#2d2d2d] flex flex-col gap-2">
        <figure className="w-full flex flex-col items-center justify-center">
          {images.length > 0 ? (
            <>
              <img
                src={images[currentImageIndex]}
                alt={`Imagen ${currentImageIndex + 1} de la sala`}
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />

              <div className="flex justify-between w-full mt-2">
                <Button color="light" onClick={handlePrevious}>
                  Anterior
                </Button>
                <span>
                  {currentImageIndex + 1} / {images.length}
                </span>
                <Button color="light" onClick={handleNext}>
                  Siguiente
                </Button>
              </div>
            </>
          ) : (
            <PiSelectionPlusLight size={120} className="text-gray-400" />
          )}
        </figure>
        <div className="flex-col flex gap-2 text-left justify-start">
          <strong className="text-center p-2">Información de la Sala</strong>
          <span>
            <strong>Nombre:</strong> {room.name}
          </span>
          <span>
            <strong>Ubicación:</strong> {room.location}
          </span>
          <span>
            <strong>Capacidad:</strong> {room.capacity}
          </span>
          <span>
            <strong>Estado:</strong> {roomStatus}
          </span>
          <span>
            <strong>Área:</strong> {room.area}
          </span>
          {room.observations && (
            <span>
              <strong>Comentarios:</strong> {room.observations}
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

export default ViewRoom;

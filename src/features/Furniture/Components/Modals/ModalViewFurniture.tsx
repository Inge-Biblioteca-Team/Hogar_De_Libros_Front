import { Button, Modal } from "flowbite-react";
import ConditionStatus from "../../../../components/ConditionStatus";
import { furniture } from "../../type/furniture";

const ModalViewFurniture = ({
    openVModal,
    setVModal,
    furniture,
  }: {
    openVModal: boolean;
    setVModal: (open: boolean) => void;
    furniture: furniture;
  })=> {

     
    return (
        <>
        <Modal show={openVModal} onClose={() => setVModal(false)}>
          <Modal.Header>Detalles del Mobiliario</Modal.Header>
          <Modal.Body className="grid grid-cols-2 place-content-center gap-x-20 gap-y-11">
          <span>
                <strong>Número de placa:</strong> {furniture.LicenseNumber || "Desconocido"}
              </span>
              <span>
                <strong>Descripción:</strong> {furniture.Description || "Desconocida"}
              </span>
              <span>
                <strong>Ubicación:</strong> {furniture.Location || "No especificada"}
              </span>
              <span>
                <strong>Persona a Cargo:</strong> {furniture.InChargePerson || "Sin asignar"}
              </span>
              <span>
                <strong>Condición:</strong>
                {furniture.ConditionRating ? (
                  <ConditionStatus condition={furniture.ConditionRating} />
                ) : (
                  "No especificada"
                )}
              </span>
              <span>
                <strong>Estado:</strong> {furniture.Status || "Indefinido"}
              </span>
          </Modal.Body>
          <Modal.Footer className="flex w-full items-center justify-center">
            <Button color={"blue"} onClick={()=> setVModal(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  
  export default ModalViewFurniture;
import { Button, Modal } from "flowbite-react";
import { furniture } from "../../type/furniture";

const ConfirmModalFurniture = ({
    isOpen,
    onConfirm,
    onCancel,
    FurnitureItem,
    Accion,
  }: {
    isOpen: boolean;
    FurnitureItem: furniture;
    onCancel: () => void;
    onConfirm: (FurnitureItem: furniture) => void;
    Accion: string;
  }) => {
    return (
      <Modal show={isOpen} onClose={onCancel}>
        <Modal.Header>Confirmar {Accion} Mueble</Modal.Header>
        <Modal.Body>
          <p>
            ¿Está seguro de que desea {Accion} este mueble?
            <br />
            <strong>Descripción:</strong>
            <span> {FurnitureItem.Description}</span>
            <br />
            <strong>Ubicación:</strong>
            <span> {FurnitureItem.Location}</span>
            <br />
            <strong>Persona a Cargo:</strong>
            <span> {FurnitureItem.InChargePerson}</span>
            <br />
            <strong>Condición:</strong>
            <span> {FurnitureItem.ConditionRating}</span>
            <br />
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="bg-Bottoms text-white text-2xl rounded-lg px-2
              hover:bg-Bottoms-dark hover:scale-105
              max-sm:hidden"
            onClick={() => onConfirm(FurnitureItem)}
          >
            Sí, estoy seguro
          </Button>
          <Button color="red" onClick={onCancel}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  
  export default ConfirmModalFurniture;
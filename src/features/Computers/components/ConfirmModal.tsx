import { Modal, Button } from "flowbite-react";
import { Equipment } from "../types/Computer";

const ConfirmModal = ({
  isOpen,
  onConfirm,
  onCancel,
  Equip,
  Accion,
}: {
  isOpen: boolean;
  Equip: Equipment;
  onCancel: () => void;
  onConfirm: (Equip: Equipment) => void;
  Accion: string;
}) => {
  return (
    <Modal show={isOpen} onClose={onCancel}>
      <Modal.Header>Confirmar {Accion} Equipo </Modal.Header>
      <Modal.Body>
        <p>
          ¿Está seguro de que desea {Accion} este equipo?
          <br />
          <strong>Cateogria:</strong>
          <span> {Equip.EquipmentCategory}</span>
          <br />
          <strong>Marca:</strong>
          <span> {Equip.EquipmentBrand}</span>
          <br />
          <strong>Serial</strong>
          <span> {Equip.EquipmentSerial}</span>
          <br />
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button color="failure" onClick={onCancel}>
          Cancelar
        </Button>
        <Button color={"blue"}
          onClick={() => onConfirm(Equip)}
        >
          Sí, estoy seguro
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;

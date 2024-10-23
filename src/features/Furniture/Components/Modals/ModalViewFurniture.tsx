import { Button, Label, Modal } from "flowbite-react";
import { furniture } from "../../type/furniture";
import { getConditionStatusText } from "../../../../components/Maps/Condition";

const ModalViewFurniture = ({
  openVModal,
  setVModal,
  furniture,
}: {
  openVModal: boolean;
  setVModal: (open: boolean) => void;
  furniture: furniture;
}) => {
  return (
    <>
      <Modal show={openVModal} onClose={() => setVModal(false)} size={"sm"}>
        <Modal.Header>Detalles del Mobiliario</Modal.Header>
        <Modal.Body className=" flex flex-col gap-4">
          <Label value={`Numero de placa: ${furniture.LicenseNumber}`} />
          <Label value={`Ubicación: ${furniture.Location}`} />
          <Label value={`Descripción: ${furniture.Description}`} />
          <Label value={`Responsable: ${furniture.InChargePerson}`} />
          <Label
            value={`Condición: ${getConditionStatusText(
              furniture.ConditionRating
            )}`}
          />
          <Label value={`Estado: ${furniture.Status}`} />
        </Modal.Body>
        <Modal.Footer className="flex w-full items-center justify-center">
          <Button color={"blue"} onClick={() => setVModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalViewFurniture;

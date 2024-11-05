import { Dispatch, SetStateAction } from "react";
import { Equipment } from "../../types/Computer";
import { Button, Modal } from "flowbite-react";

const SeeComponent = ({
  sSee,
  setSee,
  component,
}: {
  sSee: boolean;
  setSee: Dispatch<SetStateAction<boolean>>;
  component: Equipment;
}) => {
  const conditionMap = {
    0: "Pendiente de evaluación",
    1: "Deplorable",
    2: "Deficiente",
    3: "Regular",
    4: "Bueno",
    5: "Optimo",
  };
  const conditionText =
    conditionMap[component.ConditionRating as keyof typeof conditionMap] ??
    "Desconocido";

  return (
    <Modal show={sSee} onClose={() => setSee(false)}>
      <Modal.Header>Información del equipo</Modal.Header>
      <Modal.Body className=" grid grid-cols-2 gap-x-20 gap-y-11 text-center">
        <span>
          {" "}
          <strong>Número de Equipo</strong>
          <br />
          {component?.MachineNumber}
        </span>
        <span>
          <strong>Número de Serie</strong>
          <br />
          {component?.EquipmentSerial}
        </span>
        <span>
          <strong>Marca</strong>
          <br />
          {component?.EquipmentBrand}
        </span>
        <span>
          <strong>Categoría</strong>
          <br />
          {component?.EquipmentCategory}
        </span>
        <span>
          <strong>Condición</strong>
          <br />
          {conditionText}
        </span>
        <span>
          {" "}
          <strong>Observaciones</strong>
          <br />
          {component.Observation ? component?.Observation : "No Posee"}
        </span>
      </Modal.Body>
      <Modal.Footer className=" flex place-content-center">
        <Button color={"blue"} onClick={() => setSee(false)}>
          Regresar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SeeComponent;

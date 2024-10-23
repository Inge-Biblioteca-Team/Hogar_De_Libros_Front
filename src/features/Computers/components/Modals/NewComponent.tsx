import { Label, Modal, Select, TextInput } from "flowbite-react";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import useNewComputer from "../../Hooks/useNewComputer";
import { Equipment } from "../../types/Computer";
import ConfirmModal from "../ConfirmModal";
import ModalAddMoreActive from "../../../../components/Modals/ModalAddMoreActive";
import OPTCategoryEquipment from "../OPTCategoryEquipment";
import OptsConditions from "../../../../components/OptsConditions";
import ModalFooters from "../../../../components/ModalFooters";

const NewComponent = ({
  sNew,
  setSNew,
}: {
  sNew: boolean;
  setSNew: Dispatch<SetStateAction<boolean>>;
}) => {
  const { register, reset, handleSubmit, setValue } = useForm<Equipment>();

  const [NeedMore, setNeedMore] = useState(false);
  const { mutate: CreateEquipment } = useNewComputer({
    Open: setNeedMore,
    Reset: reset,
  });

  const [newEquipmentData, setNewEquipmentData] = useState<Equipment | null>(
    null
  );

  const [isModalOpen, setModalOpen] = useState(false);

  setValue("MachineNumber", 0);

  const onSubmit = (NewEquipment: Equipment) => {
    setNewEquipmentData(NewEquipment);
    setModalOpen(true);
  };

  const handleConfirm = (Equipment: Equipment) => {
    CreateEquipment(Equipment);
    reset();
    setModalOpen(false);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };
  const onClose = () => {
    setSNew(false);
    reset();
  };

  return (
    <>
      <Modal show={sNew} onClose={onClose}>
        <Modal.Header>Añadir Nuevo Componete de cómputo</Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <fieldset className=" grid grid-cols-2 gap-7 text-center">
              <legend className=" pb-3">Información del equipo</legend>
              <span>
                <Label htmlFor="EquipamentCategory" value="Categoría" />
                <Select
                  id="EquipamentCategory"
                  {...register("EquipmentCategory")}
                  required
                >
                  <OPTCategoryEquipment />
                </Select>
              </span>
              <span>
                <Label htmlFor="EquipamentSerial" value="Serial del equipo" />
                <TextInput
                  id="EquipamentSerial"
                  type="text"
                  sizing="md"
                  {...register("EquipmentSerial")}
                  required
                />
              </span>
              <span>
                <Label htmlFor="EquipamentBrand" value="Marca" />
                <TextInput
                  id="EquipamentBrand"
                  type="text"
                  {...register("EquipmentBrand")}
                  sizing="md"
                  required
                />
              </span>
              <span>
                <Label
                  htmlFor="EquipamentMachineNumber"
                  value="Número de Máquina"
                />
                <TextInput
                  id="MachineNumber"
                  type="number"
                  sizing="md"
                  min={0}
                  {...register("MachineNumber")}
                />
              </span>
            </fieldset>
            <fieldset className="grid grid-cols-2 gap-7 text-center mt-8">
              <legend>Información Adicional</legend>
              <span>
                <Label htmlFor="ConditionRating" value="Condición" />
                <Select
                  id="ConditionRating"
                  {...register("ConditionRating")}
                  required
                >
                  <OptsConditions />
                </Select>
              </span>
              <span>
                <Label htmlFor="Observation" value="Observaciones" />
                <TextInput
                  id="Observation"
                  type="text"
                  sizing="md"
                  {...register("Observation")}
                />
              </span>
            </fieldset>
          </Modal.Body>

          <ModalFooters onClose={onClose} />
          {newEquipmentData && (
            <ConfirmModal
              isOpen={isModalOpen}
              onConfirm={handleConfirm}
              onCancel={handleCancel}
              Equip={newEquipmentData}
              Accion="Crear"
            />
          )}
        </form>
      </Modal>
      <ModalAddMoreActive
        open={NeedMore}
        Close={setNeedMore}
        setSNew={setSNew}
      />
    </>
  );
};

export default NewComponent;

import { Label, Modal, Select, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { Equipment } from "../../types/Computer";
import { Dispatch, SetStateAction } from "react";

import OptsConditions from "../../../../components/OptsConditions";
import OPTCategoryEquipment from "../OPTCategoryEquipment";
import ModalFooters from "../../../../components/ModalFooters";
import useEditComputer from "../../Hooks/useEditComputer";

const EditComponent = ({
  sEdit,
  setSEdit,
  component,
}: {
  sEdit: boolean;
  setSEdit: Dispatch<SetStateAction<boolean>>;
  component: Equipment;
}) => {
  const { register, handleSubmit } = useForm<Equipment>({
    defaultValues: {
      EquipmentCategory: component.EquipmentCategory,
      EquipmentSerial: component.EquipmentSerial,
      EquipmentBrand: component.EquipmentBrand,
      Observation: component.Observation,
      ConditionRating: component.ConditionRating,
      MachineNumber: component.MachineNumber,
      EquipmentUniqueCode: component.EquipmentUniqueCode,
    },
  });

  const onClose = () => {
    setSEdit(false);
  };

  const { mutate: Edit, isLoading } = useEditComputer();

  const onConfirm = (data: Equipment) => {
    Edit(data, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <>
      <Modal show={sEdit} onClose={onClose}>
        <Modal.Header>Editar componente del equipo</Modal.Header>
        <form onSubmit={handleSubmit(onConfirm)}>
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
                  placeholder="Ej. Daños..."
                />
              </span>
            </fieldset>
          </Modal.Body>
          <ModalFooters onClose={onClose} isLoading={isLoading}/>
        </form>
      </Modal>
    </>
  );
};

export default EditComponent;

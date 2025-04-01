import { Label, Modal, Select, TextInput } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import useNewComputer from "../../Hooks/useNewComputer";
import { Equipment } from "../../types/Computer";
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
  const { register, reset, handleSubmit } = useForm<Equipment>();

  const onClose = () => {
    setSNew(false);
    reset();
  };

  const { mutate: createNew, isLoading } = useNewComputer();

  const onConfirm = (data: Equipment) => {
    createNew(data, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <>
      <Modal  show={sNew} onClose={onClose}>
        <Modal.Header className="dark:bg-neutral-900">Añadir nuevo componente</Modal.Header>
        <form onSubmit={handleSubmit(onConfirm)}>
          <Modal.Body className="dark:bg-[#2d2d2d]">
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
                  placeholder="Ej. xxxx-123"
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
                  placeholder="Ej. Logitech"
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
                  value="Número de máquina"
                />
                <TextInput
                  id="MachineNumber"
                  type="number"
                  sizing="md"
                  placeholder="Ej. 12"
                  required
                  {...register("MachineNumber")}
                />
              </span>
            </fieldset>
            <fieldset className="grid grid-cols-2 gap-7 text-center mt-8">
              <legend>Información adicional</legend>
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
                  placeholder="Ej. Daños..."
                  id="Observation"
                  type="text"
                  sizing="md"
                  {...register("Observation")}
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

export default NewComponent;

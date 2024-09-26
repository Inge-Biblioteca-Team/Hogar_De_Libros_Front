import { Button, Label, Modal, Select, TextInput } from "flowbite-react";
import ConfirmModal from "../ConfirmModal";
import { useForm } from "react-hook-form";
import { Equipment } from "../../types/Computer";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import useEditComputer from "../../Hooks/useEditComputer";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";

const EditComponent = ({
  sEdit,
  setSEdit,
  component,
}: {
  sEdit: boolean;
  setSEdit: Dispatch<SetStateAction<boolean>>;
  component: Equipment;
}) => {
  const queryClient = useQueryClient();
  const { register, handleSubmit, setValue } = useForm<Equipment>();
  const { mutate: editEquip } = useEditComputer();

  const [isModalOpen, setModalOpen] = useState(false);
  const [NewData, setNewData] = useState<Equipment | null>(null);

  useEffect(() => {
    if (component) {
      setValue("EquipmentCategory", component.EquipmentCategory);
      setValue("EquipmentSerial", component.EquipmentSerial);
      setValue("EquipmentBrand", component.EquipmentBrand);
      setValue("Observation", component.Observation);
      setValue("ConditionRating", component.ConditionRating);
      setValue("MachineNumber", component.MachineNumber);
    }
  }, [component, setValue]);

  const handleConfirm = () => {
    if (component?.EquipmentUniqueCode && NewData) {
      editEquip(
        { equipment: NewData, Code: component.EquipmentUniqueCode },
        {
          onSuccess: () => {
            toast.success("Información de equipo actualizada con Exito");
            setSEdit(false);
            queryClient.invalidateQueries("EquipCatalog");
          },
          onError: () => {
            toast.error("Error al editar Equipo:");
          },
        }
      );
    }
    setModalOpen(false);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  const onSubmit = (formData: Equipment) => {
    setNewData(formData);
    setModalOpen(true);
  };

  return (
    <>
      <Modal show={sEdit} onClose={() => setSEdit(false)}>
        <Modal.Header>Editar componente del equipo</Modal.Header>
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
                  <option value={""}>Selecciones la categoría</option>
                  <option value={"CPU"}>CPU</option>
                  <option value={"Teclado"}>Teclado</option>
                  <option value={"Monitor"}>Monitor</option>
                  <option value={"Mouse"}>Mouse</option>
                  <option value={"UPS"}>UPS</option>
                  <option value={"Otros"}>Otros</option>
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
                  <option value={0}>Seleccione la condición</option>
                  <option value={5}>Óptimo</option>
                  <option value={4}>Bueno</option>
                  <option value={3}>Regular</option>
                  <option value={2}>Deficiente</option>
                  <option value={1}>Deplorable</option>
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

          <Modal.Footer className=" flex w-full items-center justify-center">
            <Button color={"failure"} onClick={() => setSEdit(false)}>
              Cancelar
            </Button>
            <Button color={"blue"} type="submit">
              Confirmar
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
      {NewData && (
        <ConfirmModal
          Accion="Editar"
          isOpen={isModalOpen}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          Equip={NewData}
        />
      )}
    </>
  );
};

export default EditComponent;

import { useEffect, useState } from "react";
import { furniture } from "../../type/furniture";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import useEditFurniture from "../../Hooks/useEditFuniture";
import toast from "react-hot-toast";
import { Button, Label, Modal, Select, TextInput } from "flowbite-react";
import ConfirmModalFurniture from "./ConfirmModalFurniture";

const ModalEditFurniture = ({
  sEdit,
  setEdit,
  furniture,
}: {
  sEdit: boolean;
  setEdit: (open: boolean) => void;
  furniture: furniture;
}) => {
  const queryClient = useQueryClient();
  const [NewData, setNewData] = useState<furniture | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const { register, handleSubmit, setValue } = useForm<furniture>();
  const { mutate: editFurniture } = useEditFurniture();

  useEffect(() => {
    if (furniture) {
      setValue("LicenseNumber", furniture.LicenseNumber);
      setValue("Description", furniture.Description);
      setValue("Location", furniture.Location);
      setValue("InChargePerson", furniture.InChargePerson);
      setValue("ConditionRating", furniture.ConditionRating);
      setValue("Status", furniture.Status);
    }
  }, [furniture, setValue]);

  const onSubmit = (formData: furniture) => {
    setNewData(formData);
    setModalOpen(true);
  };

  const handleConfirm = () => {
    if (furniture?.Id && NewData) {
      editFurniture(
        { furniture: NewData, Id: furniture.Id.toString() },
        {
          onSuccess: () => {
            setEdit(false);
            queryClient.invalidateQueries("FurnitureCatalog");
          },
          onError: () => {
            toast.error("Error al editar mobiliario");
          },
        }
      );
    }
    setModalOpen(false);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Modal show={sEdit} size="md" onClose={() => setEdit(false)}>
        <Modal.Header>Editar Mobiliario</Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body className="flex flex-col gap-3">
            <fieldset className="grid grid-cols-2 gap-2 text-center">
              <legend className="pb-3">Información del Mobiliario</legend>
              <span>
                <Label htmlFor="LicenseNumber" value="Número de placa" />
                <TextInput
                  id="LicenseNumber"
                  type="text"
                  sizing="md"
                  {...register("LicenseNumber")}
                  readOnly
                  disabled
                />
              </span>
              <span>
                <Label htmlFor="Description" value="Descripción" />
                <TextInput
                  id="Description"
                  type="text"
                  sizing="md"
                  {...register("Description")}
                  required
                />
              </span>
              <span>
                <Label htmlFor="Location" value="Ubicación" />
                <TextInput
                  id="Location"
                  type="text"
                  {...register("Location")}
                  sizing="md"
                  required
                />
              </span>
              <span>
                <Label htmlFor="InChargePerson" value="Persona a Cargo" />
                <TextInput
                  id="InChargePerson"
                  type="text"
                  {...register("InChargePerson")}
                  sizing="md"
                  required
                />
              </span>
            </fieldset>
            <fieldset className="grid grid-cols-1 gap-7 text-center">
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
                  <option value={4}>Regular</option>
                  <option value={3}>Deficiente</option>
                  <option value={2}>Deplorable</option>
                  <option value={1}>Deplorable</option>
                </Select>
              </span>
            </fieldset>
          </Modal.Body>
          <Modal.Footer className="flex w-full items-center justify-center">
            <Button color={"failure"} onClick={() => setEdit(false)}>
              Cancelar
            </Button>
            <Button color={"blue"} type="submit">
              Confirmar
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
      {NewData && (
        <ConfirmModalFurniture
          Accion="Editar"
          isOpen={isModalOpen}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          FurnitureItem={NewData}
        />
      )}
    </>
  );
};
export default ModalEditFurniture;

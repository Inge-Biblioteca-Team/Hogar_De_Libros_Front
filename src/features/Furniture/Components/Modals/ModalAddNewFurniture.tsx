import { Button, Label, Modal, Select, TextInput } from "flowbite-react";
import ModalAddMoreActive from "../../../../components/ModalAddMoreActive";
import ConfirmModalFurniture from "./ConfirmModalFurniture";
import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction, useState } from "react";
import { furniture } from "../../type/furniture";
import useNewFurniture from "../../Hooks/useNewFurniture";

const ModalAddNewFurniture = ({
  sNewF,
  setSNewF,
}: {
  sNewF: boolean;
  setSNewF: Dispatch<SetStateAction<boolean>>;
}) => {
  const { register, reset, handleSubmit } = useForm<furniture>();
  const [NeedMore, setNeedMore] = useState(false);
  const { mutate: CreateFurniture } = useNewFurniture({
    Open: setNeedMore,
    Reset: reset,
  });

  const [newFurnitureData, setNewFurnitureData] = useState<furniture | null>(
    null
  );
  const [isModalOpen, setModalOpen] = useState(false);

  const onSubmit = (NewFurniture: furniture) => {
    setNewFurnitureData(NewFurniture);
    setModalOpen(true);
  };

  const handleConfirm = (furniture: furniture) => {
    CreateFurniture(furniture);
    reset();
    setModalOpen(false);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Modal show={sNewF} size="md" onClose={() => setSNewF(false)}>
        <Modal.Header>Agregar Mobiliario</Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <fieldset className="grid grid-cols-2 gap-7 text-center">
              <legend className="pb-3">Información del mobiliario</legend>
              <span>
                <Label htmlFor="LicenseNumber" value="Número de placa" />
                <TextInput
                  id="LicenseNumber"
                  type="text"
                  sizing="md"
                  {...register("LicenseNumber")}
                  required
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
                  sizing="md"
                  {...register("Location")}
                  required
                />
              </span>
              <span>
                <Label htmlFor="InChargePerson" value="Persona a Cargo" />
                <TextInput
                  id="InChargePerson"
                  type="text"
                  sizing="md"
                  {...register("InChargePerson")}
                  required
                />
              </span>
            </fieldset>
            <fieldset className="grid grid-cols-1 gap-7 text-center mt-6">
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
            </fieldset>
          </Modal.Body>

          <Modal.Footer className="flex w-full items-center justify-center">
            <Button color={"failure"} onClick={() => setSNewF(false)}>
              Cancelar
            </Button>
            <Button color={"blue"} type="submit">
              Confirmar
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
      {newFurnitureData && (
        <ConfirmModalFurniture
          isOpen={isModalOpen}
          onConfirm={() => handleConfirm(newFurnitureData)}
          onCancel={handleCancel}
          FurnitureItem={newFurnitureData}
          Accion="Crear"
        />
      )}
      <ModalAddMoreActive
        open={NeedMore}
        Close={setNeedMore}
        setSNew={setSNewF}
      />
    </>
  );
};

export default ModalAddNewFurniture;

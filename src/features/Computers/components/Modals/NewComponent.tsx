import { Button, Label, Modal, Select, TextInput } from "flowbite-react";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import useNewComputer from "../../Hooks/useNewComputer";
import { Equipment } from "../../types/Computer";
import ConfirmModal from "../ConfirmModal";
import ModalAddMoreActive from "../../../../components/ModalAddMoreActive";

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

  return (
    <>
      <Modal show={sNew} onClose={() => setSNew(false)}>
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
                  value="Numero de Maquina"
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
            <fieldset className="grid grid-cols-2 gap-7 text-center">
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
            <Button color={"failure"} onClick={() => setSNew(false)}>
              Cancelar
            </Button>
            <Button color={"blue"} type="submit">
              Confirmar
            </Button>
          </Modal.Footer>
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
      <ModalAddMoreActive open={NeedMore} Close={setNeedMore} setSNew={setSNew} />
    </>
  );
};

export default NewComponent;

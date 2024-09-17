import { Label, Modal, Select, TextInput } from "flowbite-react";
import ModalAddMoreActive from "../../../../components/ModalAddMoreActive";
import ConfirmModalFurniture from "./ConfirmModalFurniture";
import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction, useState } from "react";
import { furniture } from "../../type/furniture";
import useNewFurniture from "../../Hooks/useNewFurniture";

const ModalAddNewFurniture = ({
    sNew,
    setSNew,
  }: {
    sNew: boolean;
    setSNew: Dispatch<SetStateAction<boolean>>;
  }) => {
    const { register, reset, handleSubmit, setValue } = useForm<furniture>();
    const [NeedMore, setNeedMore] = useState(false);
    const { mutate: CreateFurniture } = useNewFurniture({
      Open: setNeedMore,
      Reset: reset,
    });
    
    const [newFurnitureData, setNewFurnitureData] = useState<furniture | null>(null);
    const [isModalOpen, setModalOpen] = useState(false);
  
   
    setValue("Id", 0);
  
    const onSubmit = (NewFurniture: furniture) => {
      setNewFurnitureData(NewFurniture);
      setModalOpen(true);
    };
  
    const handleConfirm = (furniture: furniture) => {
      CreateFurniture(furniture);
      reset();
      setModalOpen(false); 
      setSNew(false);
    };
  
    const handleCancel = () => {
      setModalOpen(false);
    };
  
    return (
      <Modal show={sNew} size="md" onClose={() => setSNew(false)}>
        <Modal.Header>Agregar Mobiliario</Modal.Header>
        <Modal.Body>
          <form className="flex flex-col gap-7" onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="grid grid-cols-2 gap-7 text-center">
              <legend className="pb-3">Información del mobiliario</legend>
              <span>
                <Label htmlFor="Lincensenumber" value="Número de placa" />
                <TextInput
                  id="Lincensenumber"
                  type="text"
                  sizing="md"
                  {...register("Lincensenumber")}
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
            <div>
              <button
                type="submit"
                className="bg-Bottoms w-full text-Text text-lg rounded-lg p-2 hover:bg-Bottoms-dark hover:scale-105 mt-6"
              >
                Confirmar
              </button>
            </div>
          </form>
          {newFurnitureData && (
            <ConfirmModalFurniture
              isOpen={isModalOpen}
              onConfirm={() => handleConfirm(newFurnitureData)}
              onCancel={handleCancel}
              FurnitureItem={newFurnitureData}
              Accion="Crear"
            />
          )}
          <ModalAddMoreActive open={NeedMore} Close={setNeedMore} />
        </Modal.Body>
      </Modal>
    );
  };
  
  export default ModalAddNewFurniture;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { furniture } from "../../type/furniture";
import { useQuery } from "react-query";
import { GetFurniturebyID } from "../../services/SvFurniture";
import { useForm } from "react-hook-form";
import useEditFurniture from "../../Hooks/useEditFuniture";
import { Button, Label, Modal, Select, TextInput } from "flowbite-react";
import ConfirmModalFurniture from "./ConfirmModalFurniture";

const ModalEditFurniture = ({
    open,
    setOpen,
  }: {
    open: boolean;
    setOpen: (open: boolean) => void;
  }) => {
    const { Id } = useParams<{ Id?: string }>();
    const [NewData, setNewData] = useState<furniture | null>(null);
    const [isModalOpen, setModalOpen] = useState(false);
    
    const { data: FurnitureI } = useQuery<furniture, Error>(
      ["FurnitureEdit", Id],
      () => {
        if (!Id) {
          throw new Error("Error: No existe ID de mobiliario para buscar");
        }
        return GetFurniturebyID(Id);
      },
      { enabled: !!Id, staleTime: 60000 }
    );
  
    const { register, handleSubmit, setValue } = useForm<furniture>();
  const { mutate: editFurniture } = useEditFurniture();

  useEffect(() => {
    if (FurnitureI) {
      setValue("Description", FurnitureI.Description);
      setValue("Location", FurnitureI.Location);
      setValue("InChargePerson", FurnitureI.InChargePerson);
      setValue("ConditionRating", FurnitureI.ConditionRating);
      setValue("Status", FurnitureI.Status);
    }
  }, [FurnitureI, setValue]);

  const onSubmit = (formData: furniture) => {
    if (!Id) {
      console.error("Id is undefined");
      return;
    }

    editFurniture({ furniture: formData, Id: Id.toString() }); 
    setNewData(formData);
    setModalOpen(true);
    setOpen(false);
  };
  
    const handleClose = () => setOpen(false);

    const handleConfirm = () => {
        if (FurnitureI?.Id && NewData) {
          editFurniture({ furniture: NewData, Id: FurnitureI.Id.toString() });
        }
        setModalOpen(false);
      };
  
    const handleCancel = () => {
      setModalOpen(false);
    };
  
  
    return (
      <>
      <Modal show={open} size="md" onClose={handleClose}>
        <Modal.Header>Editar Mobiliario</Modal.Header>
        <Modal.Body>
          <form
            className="flex flex-col gap-7"
            onSubmit={handleSubmit(onSubmit)}
          >
            <fieldset className="grid grid-cols-2 gap-7 text-center">
              <legend className="pb-3">Información del Mobiliario</legend>
              <span>
                <Label htmlFor="Id" value="Id" />
                <TextInput
                  id="Id"
                  type="text"
                  sizing="md"
                  {...register("Id")}
                  readOnly
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
                  <option value={4}>Regular</option>
                  <option value={3}>Deficiente</option>
                  <option value={2}>Deplorable</option>
                  <option value={1}>Deplorable</option>
                </Select>
              </span>
              <span>
                <Label htmlFor="Status" value="Estado" />
                <Select
                  id="Status"
                  {...register("Status")}
                  required
                >
                  <option value={"Active"}>Activo</option>
                  <option value={"Inactive"}>Inactivo</option>
                </Select>
              </span>
            </fieldset>
            <div className="flex justify-end gap-4">
              <Button color="gray" onClick={handleClose}>
                Cancelar
              </Button>
              <Button type="submit" color="success">
                Confirmar
              </Button>
            </div>
          </form>
        </Modal.Body>
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
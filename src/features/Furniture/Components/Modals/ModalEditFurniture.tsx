import { useEffect, useState } from "react";
import { furniture } from "../../type/furniture";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import useEditFurniture from "../../Hooks/useEditFuniture";
import toast from "react-hot-toast";
import { FloatingLabel, Label, Modal, Select } from "flowbite-react";
import ConfirmModalFurniture from "./ConfirmModalFurniture";
import OptsConditions from "../../../../components/OptsConditions";
import ModalFooters from "../../../../components/ModalFooters";

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

  const { register, handleSubmit, setValue, reset } = useForm<furniture>();
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

  const onClose = () => {
    setEdit(false);
    reset()
  };

  return (
    <>
      <Modal show={sEdit} size="md" onClose={onClose}>
        <Modal.Header>
          Editar Mobiliario {furniture.LicenseNumber}{" "}
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body className="flex flex-col gap-6">
            <fieldset className="grid grid-cols-2 gap-8 text-center">
              <FloatingLabel
                variant="outlined"
                label="Descripción"
                {...register("Description")}
                required
              />
              <FloatingLabel
                variant="outlined"
                label="Ubicación"
                {...register("Location")}
                required
              />
              <span>
                <Label htmlFor="ConditionRating" value="Persona a cargo" />
                <Select {...register("InChargePerson")}>
                  <option value="">Persona responsable</option>
                  <option value="Dian">Dian</option>
                </Select>
              </span>
              <div>
                <Label htmlFor="ConditionRating" value="Condición" />
                <Select
                  id="ConditionRating"
                  {...register("ConditionRating")}
                  required
                >
                  <OptsConditions />
                </Select>
              </div>
            </fieldset>

            <span className=" mt-2"></span>
          </Modal.Body>
          <ModalFooters onClose={onClose} />
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

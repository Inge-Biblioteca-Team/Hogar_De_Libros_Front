import { useEffect } from "react";
import { furniture } from "../../type/furniture";
import { useForm } from "react-hook-form";
import { FloatingLabel, Label, Modal, Select } from "flowbite-react";
import OptsConditions from "../../../../components/OptsConditions";
import ModalFooters from "../../../../components/ModalFooters";
import useEditFurniture from "../../Hooks/useEditFuniture";
import AdminList from "../AdminList";

const ModalEditFurniture = ({
  sEdit,
  setEdit,
  furniture,
}: {
  sEdit: boolean;
  setEdit: (open: boolean) => void;
  furniture: furniture;
}) => {
  const { register, handleSubmit, setValue, reset } = useForm<furniture>();

  useEffect(() => {
    if (furniture) {
      setValue("Id", furniture.Id);
      setValue("LicenseNumber", furniture.LicenseNumber);
      setValue("Description", furniture.Description);
      setValue("Location", furniture.Location);
      setValue("InChargePerson", furniture.InChargePerson);
      setValue("ConditionRating", furniture.ConditionRating);
      setValue("Status", furniture.Status);
    }
  }, [furniture, setValue]);

  const onClose = () => {
    setEdit(false);
    reset();
  };

  const { mutate: update, isLoading } = useEditFurniture();

  const onSubmit = async (data: furniture) => {
    update(data, {
      onSuccess: () => {
        setEdit(false);
      },
    });
  };

  return (
    <>
      <Modal show={sEdit} size="md" onClose={onClose}>
        <Modal.Header className="dark:bg-neutral-900">
          Editar mobiliario {furniture.LicenseNumber}{" "}
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body className="dark:bg-[#2d2d2d] flex flex-col gap-6">
            <fieldset className="grid grid-cols-2 gap-8 text-center">
              <FloatingLabel
                variant="outlined"
                className="dark:text-white"
                label="Descripción"
                {...register("Description")}
                required
              />
              <FloatingLabel
                variant="outlined"
                className="dark:text-white"
                label="Ubicación"
                {...register("Location")}
                required
              />
              <span>
                <Label htmlFor="ConditionRating" value="Persona a cargo" />
                <Select {...register("InChargePerson")}>
                  <AdminList />
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
          <ModalFooters onClose={onClose} isLoading={isLoading} />
        </form>
      </Modal>
    </>
  );
};
export default ModalEditFurniture;

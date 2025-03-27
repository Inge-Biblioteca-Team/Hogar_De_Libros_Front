import { Label, Modal, Select, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import { furniture } from "../../type/furniture";
import ModalFooters from "../../../../components/ModalFooters";
import useNewFurniture from "../../Hooks/useNewFurniture";
import OptInChangePersons from "../OptInChangePersons";

const ModalAddNewFurniture = ({
  sNewF,
  setSNewF,
}: {
  sNewF: boolean;
  setSNewF: Dispatch<SetStateAction<boolean>>;
}) => {
  const { register, reset, handleSubmit } = useForm<furniture>();

  const onClose = () => {
    setSNewF(false);
    reset();
  };

  const { mutate: create, isLoading } = useNewFurniture();

  const onSubmit = async (data: furniture) => {
    create(data, {
      onSuccess: () => {
        setSNewF(false);
        reset();
      },
    });
  };

  return (
    <>
      <Modal dismissible show={sNewF} size="md" onClose={onClose}>
        <Modal.Header className="dark:bg-neutral-900">Agregar mobiliario</Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body className="dark:bg-[#2d2d2d]">
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
                  placeholder="Ej. x222"
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
                  placeholder="Ej. Silla"
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
                  placeholder="Ej. Biblioteca.."
                />
              </span>
              <span>
                <Label htmlFor="InChargePerson" value="Persona a cargo" />
                <Select
                  id="InChargePerson"
                  {...register("InChargePerson")}
                  required
                >
                  <OptInChangePersons />
                </Select>
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
          <ModalFooters onClose={onClose} isLoading={isLoading} />
        </form>
      </Modal>
    </>
  );
};

export default ModalAddNewFurniture;

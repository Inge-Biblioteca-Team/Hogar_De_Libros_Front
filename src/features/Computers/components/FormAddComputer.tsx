import { Label, Select, TextInput } from "flowbite-react";
import { ComputerTest } from "../types/Computer";
import useNewComputer from "../Hooks/useNewComputer";
import { useForm } from "react-hook-form";

const FormAddComputer = () => {
  const { register, reset, handleSubmit, setValue } = useForm<ComputerTest>();

  setValue("MachineNumber", 0)
  const { mutate: CreateEquipment } = useNewComputer();
  const onSubmit = (NewEquipment: ComputerTest) => {
    CreateEquipment(NewEquipment);
    reset();
  };

  return (
    <form
      className="flex flex-col gap-7"
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset className=" grid grid-cols-2 gap-7 text-center">
        <legend className=" pb-3">Informacion del equipo</legend>
        <span>
          <Label htmlFor="EquipamentCategory" value="Categoría" />
          <Select
            id="EquipamentCategory"
            {...register("EquipmentCategory")}
            required
          >
            <option value={""}>Selecciones la categoría</option>
            <option value={"CPU"}>Monitor</option>
            <option value={"Teclado"}>Teclado</option>
            <option value={"Monitor"}>Monitor</option>
            <option value={"Mouse"}>Mouse</option>
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
          <Label htmlFor="EquipamentMachineNumber" value="Numero de Maquina" />
          <TextInput
            id="MachineNumber"
            type="number"
            sizing="md"
            {...register("MachineNumber")}
          />
        </span>
      </fieldset>
      <fieldset className="grid grid-cols-2 gap-7 text-center">
        <legend>Informacion Adicional</legend>
        <span>
          <Label htmlFor="ConditionRating" value="Condición" />
          <Select
            id="ConditionRating"
            {...register("ConditionRating")}
            required
          >
            <option value={""}>Seleccione la condición</option>
            <option value={1}>Nueva</option>
            <option value={2}>Buenas</option>
            <option value={3}>Aceptable</option>
            <option value={4}>Mala</option>
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
        <div>
          <button
            type="submit"
            className="bg-Bottoms w-full text-Text text-lg rounded-lg 
        p-2 hover:bg-Bottoms-dark hover:scale-105 
        mt-6"
          >
            Confirmar
          </button>
        </div>
    </form>
  );
};
export default FormAddComputer;

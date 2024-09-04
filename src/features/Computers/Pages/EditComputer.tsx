import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { GetByUniqueCode } from "../Services/SvComputer";
import { Equipment, EquipmentEdit } from "../types/Computer";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useEditComputer from "../Hooks/useEditComputer";
import { Breadcrumb, Label, Select, TextInput } from "flowbite-react";
import {
  HomeCrumb,
  ManageCrumb,
  ManageCrumbObj,
  LastCrumb,
} from "../../../components/BreadCrumb";

const EditComputer = () => {
  const { Code } = useParams<{ Code?: string }>();
  const navigate = useNavigate();

  const { data: EquipmentI } = useQuery<Equipment, Error>(
    ["EquipEdit", Code],
    () => {
      if (!Code) {
        throw new Error("Error No existe ID de equipo para buscar");
      }
      return GetByUniqueCode(Code);
    },
    { enabled: !!Code, staleTime: 60000 }
  );
  const { register, handleSubmit, setValue } = useForm<EquipmentEdit>();
  useEffect(() => {
    if (EquipmentI) {
      setValue("EquipmentCategory", EquipmentI.EquipmentCategory);
      setValue("EquipmentSerial", EquipmentI.EquipmentSerial);
      setValue("EquipmentBrand", EquipmentI.EquipmentBrand);
      setValue("Observation", EquipmentI.Observation);
      setValue("ConditionRating", EquipmentI.ConditionRating);
      setValue("MachineNumber", EquipmentI.MachineNumber);
    }
  }, [EquipmentI, setValue]);

  const { mutate: editEquip } = useEditComputer();

  const onSubmit = (formData: EquipmentEdit) => {
    if (EquipmentI?.EquipmentUniqueCode) {
      editEquip({ equipment: formData, Code: EquipmentI.EquipmentUniqueCode },
        {
          onSuccess: () => {
            navigate(-1); // Vuelve a la página anterior
          }});
    } else {
      console.error("No Code found for this");
    }
  };

  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeCrumb />
        <ManageCrumb />
        <ManageCrumbObj Objetive="Equipo De Computo" LK="Equipos" />
        <LastCrumb CurrentPage="Editar Equipo" />
        {EquipmentI?.EquipmentSerial && (
          <LastCrumb CurrentPage={EquipmentI?.EquipmentSerial} />
        )}
      </Breadcrumb>
      <form
        className="flex flex-col gap-7 items-center mt-20"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=" shadow-lg p-6 rounded-lg bg-gray-100">
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
                <option value={1}>Óptimo</option>
                <option value={2}>Bueno</option>
                <option value={3}>Regular</option>
                <option value={4}>Deficiente</option>
                <option value={5}>Deplorable</option>
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
        </div>
      </form>
    </>
  );
};

export default EditComputer;

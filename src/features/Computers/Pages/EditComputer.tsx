import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { GetByUniqueCode } from "../Services/SvComputer";
import { Equipment, EquipmentEdit } from "../types/Computer";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useEditComputer from "../Hooks/useEditComputer";
import { Breadcrumb } from "flowbite-react";
import {
  HomeCrumb,
  ManageCrumb,
  ManageCrumbObj,
  LastCrumb,
} from "../../../components/BreadCrumb";

const EditComputer = () => {
  const { Code } = useParams<{ Code?: string }>();

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
      editEquip({ equipment: formData, Code: EquipmentI.EquipmentUniqueCode });
    } else {
      console.error("No Code found for this");
    }
  };

  //La categoria es por select
  //El id no se cambia ni los estados eso es en otros lados

  return (
    <div>
      <Breadcrumb className="custom-breadcrumb">
        <HomeCrumb />
        <ManageCrumb />
        <ManageCrumbObj Objetive="Equipo De Computo" LK="Equipos" />
        <LastCrumb CurrentPage="Editar Equipo" />
        {EquipmentI?.EquipmentSerial && <LastCrumb CurrentPage={EquipmentI?.EquipmentSerial} /> }
      </Breadcrumb>
      <h1>Editar Equipo</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="EquipamentCategory">Categoría</label>
          <input
            id="EquipamentCategory"
            type="text"
            {...register("EquipmentCategory")}
          />
        </div>
        <div>
          <label htmlFor="EquipamentSerial">Serial del equipo</label>
          <input
            id="EquipamentSerial"
            type="text"
            {...register("EquipmentSerial")}
          />
        </div>
        <div>
          <label htmlFor="EquipamentBrand">Marca</label>
          <input
            id="EquipamentBrand"
            type="text"
            {...register("EquipmentBrand")}
          />
        </div>
        <div>
          <label htmlFor="Observation">Observaciones</label>
          <input id="Observation" type="text" {...register("Observation")} />
        </div>
        <div>
          <label htmlFor="ConditionRating">Condición</label>
          <input
            id="ConditionRating"
            type="number"
            {...register("ConditionRating")}
          />
        </div>
        <div>
          <label htmlFor="Machine Number">Numero de Maquina</label>
          <input
            id="ConditionRating"
            type="number"
            {...register("MachineNumber")}
          />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default EditComputer;

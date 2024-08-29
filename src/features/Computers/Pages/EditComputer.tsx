import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { apiResponseCE, Computer } from "../types/Computer";
import useEditComputer from "../Hooks/useEditComputer";
import useFetchComputer from "../Hooks/useFetchComputer";
import { useQuery } from "react-query";
import { GetComputerPaginated } from "../Services/SvComputer";

const EditComputer = () =>{
    const { id } = useParams<{ id: string }>();
  const { register, handleSubmit, setValue} = useForm<Computer>();
  const { data: computer } = useFetchComputer(id);
  const { mutate: editComputer } = useEditComputer();

  useEffect(() => {
    if (computer) {
      setValue('EquipamentCategory', computer.EquipamentCategory);
      setValue('EquipamentSerial', computer.EquipamentSerial);
      setValue('EquipamentUniqueCode', computer.EquipamentUniqueCode);
      setValue('EquipamentBrand', computer.EquipamentBrand);
      setValue('Status', computer.Status);
      setValue('Observation', computer.Observation);
      setValue('ConditionRating', computer.ConditionRating);
    }
  }, [computer, setValue]);
  
  const { data: computers } = useQuery<apiResponseCE, Error>(
    ["Computer", "", "", id],
    () => GetComputerPaginated(0 , 0 ,id),
    {
      keepPreviousData: true,
      staleTime: 600,
    }
  );
  

  const onSubmit = (data: Computer) => {
    editComputer({ ...data, Id: id });
  };

  return (
    <div>
      <h1>Editar Equipo</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="EquipamentCategory">Categoría</label>
          <input
            id="EquipamentCategory"
            type="text"
            {...register('EquipamentCategory', { required: true })}
          />
        </div>
        <div>
          <label htmlFor="EquipamentSerial">Serial del equipo</label>
          <input
            id="EquipamentSerial"
            type="text"
            {...register('EquipamentSerial', { required: true })}
          />
        </div>
        <div>
          <label htmlFor="EquipamentUniqueCode">Código</label>
          <input
            id="EquipamentUniqueCode"
            type="text"
            {...register('EquipamentUniqueCode', { required: true })}
          />
        </div>
        <div>
          <label htmlFor="EquipamentBrand">Marca</label>
          <input
            id="EquipamentBrand"
            type="text"
            {...register('EquipamentBrand', { required: true })}
          />
        </div>
        <div>
          <label htmlFor="Status">Estado</label>
          <input
            id="Status"
            type="text"
            {...register('Status')}
          />
        </div>
        <div>
          <label htmlFor="Observation">Observaciones</label>
          <input
            id="Observation"
            type="text"
            {...register('Observation')}
          />
        </div>
        <div>
          <label htmlFor="ConditionRating">Condición</label>
          <input
            id="ConditionRating"
            type="text"
            {...register('ConditionRating')}
          />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default EditComputer;


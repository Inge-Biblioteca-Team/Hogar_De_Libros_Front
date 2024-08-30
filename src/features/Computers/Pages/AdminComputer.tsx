import { useParams } from 'react-router-dom';
import { Equipment } from '../types/Computer';
import { GetByUniqueCode } from '../Services/SvComputer';
import { useQuery } from 'react-query';
import { Breadcrumb } from 'flowbite-react';
import { HomeCrumb, ManageCrumb, ManageCrumbObj, LastCrumb } from '../../../components/BreadCrumb';

const AdminComputerInformation = () => {
  const { Code } = useParams<{ Code?: string }>();

  const { data: EquipmentI  } = useQuery<Equipment, Error>(
    ["Equip", Code],
    () => {
      if (!Code) {
        throw new Error("Error No existe ID de equipo para buscar");
      }
      return GetByUniqueCode(Code);
    },
    { enabled: !!Code, staleTime: 60000 }
  );

//El codigo es el id no es de relevancia para el usuario
//Categoria estaba repetido
//El estado manejelo condicional {variable?  "Texto si" : "texto no"}
//Para la condicion haga algo similar a esto
// {book?.BookConditionRating ? <ConditionStatus condition={book.BookConditionRating}/> : null} esta en admin info linea 77
  return (
    <>
    <Breadcrumb className="custom-breadcrumb">
        <HomeCrumb />
        <ManageCrumb />
        <ManageCrumbObj Objetive="Equipo De Computo" LK="Equipos" />
        <LastCrumb CurrentPage="Ver Informacion del equipo" />
        {EquipmentI?.EquipmentSerial && <LastCrumb CurrentPage={EquipmentI?.EquipmentSerial} /> }
      </Breadcrumb>
      <div
        className="w-full grid text-xl gap-14 place-content-center mt-10"
        style={{ gridTemplateColumns: '35% 20% 25%' }}
      >
        <span className="inline-grid ">
          <strong>Marca</strong>
          <span>{EquipmentI?.EquipmentBrand}</span>
          <strong>Estado</strong>
          {EquipmentI?.Status}
          <strong>Observaciones</strong>
          <span>{EquipmentI?.Observation}</span>
        </span>
        <span className="inline-grid ">
          <strong>Número de Serie</strong>
          <span>{EquipmentI?.EquipmentSerial}</span>
          <strong>Número de Equipo</strong>
          <span>{EquipmentI?.MachineNumber}</span>
          <strong>Condición</strong>
          <span>{EquipmentI?.ConditionRating}</span>
          <strong>Categoría</strong>
          <span>{EquipmentI?.EquipmentCategory}</span>
        </span>
      </div>
    </>
  );
};

export default AdminComputerInformation;
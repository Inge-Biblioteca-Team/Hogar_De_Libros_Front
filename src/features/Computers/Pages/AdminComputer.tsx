import { useParams } from "react-router-dom";
import { Equipment } from "../types/Computer";
import { GetByUniqueCode } from "../Services/SvComputer";
import { useQuery } from "react-query";
import { Breadcrumb } from "flowbite-react";
import {
  HomeCrumb,
  ManageCrumb,
  ManageCrumbObj,
  LastCrumb,
} from "../../../components/BreadCrumb";
import BTNGoBack from "../../../components/BTNGoBack";
import ConditionStatusComputer from "../components/ConditionStatusComputer";

const AdminComputerInformation = () => {
  const { Code } = useParams<{ Code?: string }>();
  const { data: EquipmentI } = useQuery<Equipment, Error>(
    ["OneEquip", Code],
    () => {
      if (!Code) {
        throw new Error("Error No existe ID de equipo para buscar");
      }
      return GetByUniqueCode(Code);
    },
    { enabled: !!Code, staleTime: 60000 }
  );

  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeCrumb />
        <ManageCrumb />
        <ManageCrumbObj Objetive="Equipo De cómputo" LK="Equipos" />
        <LastCrumb CurrentPage="Ver Información del equipo" />
        {EquipmentI?.EquipmentSerial && (
          <LastCrumb CurrentPage={EquipmentI?.EquipmentSerial} />
        )}
      </Breadcrumb>
      <div className=" flex text-2xl text-center place-content-center mt-32">
        <div className=" shadow-lg p-6 rounded-2xl bg-white">
          <span className=" grid grid-cols-2 place-content-center gap-x-20 gap-y-11 ">
            <span>
              {" "}
              <strong>Número de Equipo</strong>
              <br />
              {EquipmentI?.MachineNumber}
            </span>
            <span>
              <strong>Número de Serie</strong>
              <br />
              {EquipmentI?.EquipmentSerial}
            </span>
            <span>
              <strong>Marca</strong>
              <br />
              {EquipmentI?.EquipmentBrand}
            </span>
            <span>
              <strong>Categoría</strong>
              <br />
              {EquipmentI?.EquipmentCategory}
            </span>
            <span className=" flex flex-col text-center">
            {EquipmentI?.ConditionRating && (
              <ConditionStatusComputer condition={EquipmentI?.ConditionRating} />
            )}
          </span>
            <span>
              {" "}
              <strong>Observaciones</strong>
              <br />
              {EquipmentI?.Observation}
            </span>
          </span>
     
          <BTNGoBack />
        </div>
      </div>
    </>
  );
};

export default AdminComputerInformation;

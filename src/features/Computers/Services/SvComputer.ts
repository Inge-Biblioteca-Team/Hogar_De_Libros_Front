import axios from "axios";
import api from "../../../Services/AxiosConfig";
import { Equipment, EquipmentEdit } from "../types/Computer";
import { downType } from "../../../Types/GlobalTypes";

//Testing
const GetComputersByCondition = async () => {
  try {
    const response = await api.get("/computers?ConditionRating");
    return response.data;
  } catch (error) {
    console.error("Error al cargar los equipos de cómputo:", error);
    throw error;
  }
};

//Agregar computadora
const PostNewComputer = async (computer: EquipmentEdit) => {
  try {
    const response = await api.post(`/computers`, computer);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al registrar el equipo:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error al registrar el equipo"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};
//paginacion
const GetComputerPaginated = async (
  page: number,
  limit: number,
  MNumber?: string,
  EquipamentBrand?: string,
  EquipamentCategory?: string,
  Status?: string
) => {
  try {
    const params: { [key: string]: string | number | undefined } = {
      Page: page,
      Limit: limit,
    };

    if (MNumber) params.MachineNumber = MNumber;
    if (EquipamentBrand) params.EquipmentBrand = EquipamentBrand;
    if (EquipamentCategory) params.EquipmentCategory = EquipamentCategory;
    if (Status) params.Status = Status;

    const response = await api.get("/computers", { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
//Get One

const GetByUniqueCode = async (UniqueCode: string) => {
  try {
    const response = await api.get(`computers/${UniqueCode}`);
    return response.data;
  } catch (error) {
    console.error("Error no se encontró el equipo de cómputo", error);
    throw error;
  }
};

//Put Edit info
const PutEditEquipment = async (Equipment: Equipment) => {
  try {
    const response = await api.put(
      `computers/${Equipment.EquipmentUniqueCode}`,
      Equipment
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Error al editar:", error.response?.data || error.message);
      throw new Error(
        error.response?.data.message || "Error al editar el recurso"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};
//Patch disable computer

const DownEquipment = async (data: downType) => {
  try {
    const response = await api.patch(`computers/${data.Id}`);
    return response.data;
  } catch (error) {
    console.error("Error al dar de baja el equipo de cómputo:", error);
    throw error;
  }
};

export {
  PostNewComputer,
  GetComputerPaginated,
  PutEditEquipment,
  DownEquipment,
  GetByUniqueCode,
  GetComputersByCondition,
};

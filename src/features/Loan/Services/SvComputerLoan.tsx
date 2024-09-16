import axios from "axios";
import { NewWSLoan, NewWSMantenance } from "../Types/ComputerLoan";

const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

//Gets
const GetStatus = async () => {
  try {
    const response = await api.get(`computers/workstation/Status`);
    return response.data;
  } catch (error) {
    console.error("Error to get Stattu:", error);
    throw error;
  }
};

const GetWSLoans = async (page: number, limit: number, StartDate?: string) => {
  try {
    const response = await api.get(`computer-loan`, {
      params: {
        Page: page,
        Limit: limit,
        ...(StartDate && { StartDate }), 
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error to get requests:", error);
    throw error;
  }
};


const FinalizeLoan = async (NMachine: number) => {
  try {
    const response = await api.patch(`computer-loan/finish/${NMachine}`);
    return response.data;
  } catch (error) {
    console.error("Error to get Stattu:", error);
    throw error;
  }
};
const ReactiveWS = async (NMachine: number) => {
  try {
    const response = await api.patch(`computers/${NMachine}/reactive`);
    return response.data;
  } catch (error) {
    console.error("Error to get Stattu:", error);
    throw error;
  }
};

const MantenanceWS = async (Data: NewWSMantenance) => {
  try {
    const response = await api.patch(
      `computers/${Data.machineNumber}/maintenance`,
      Data
    );
    return response.data;
  } catch (error) {
    console.error("Error to get Stattu:", error);
    throw error;
  }
};
const CreateNewWSLoan = async (Data: NewWSLoan) => {
  try {
    const response = await api.post(`computer-loan`, Data);
    return response.data;
  } catch (error) {
    console.error("Error to get Stattu:", error);
    throw error;
  }
};

export {
  GetStatus,
  GetWSLoans,
  FinalizeLoan,
  MantenanceWS,
  ReactiveWS,
  CreateNewWSLoan,
};

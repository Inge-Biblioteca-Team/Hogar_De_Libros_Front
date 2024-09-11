import axios from "axios";


const api = axios.create({
    baseURL: `https://66de71d6de4426916ee12042.mockapi.io/loand`,
    timeout: 1000,
  });

export const finalizeLoan = async (Id:string) => {
    const response = await api.put(`loand/${Id}/finalize`);
    return response.data;
  };
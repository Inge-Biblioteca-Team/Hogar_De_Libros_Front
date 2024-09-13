import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

const GetUsersList = async (page: number, limit: number) => {
  try {
    const response = await api.get(`user`, {
      params: {
        page: page,
        limit: limit,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error to get requests:", error);
    throw error;
  }
};

const api2 = axios.create({
  baseURL: "https://662bb9d2de35f91de1594809.mockapi.io/api/test/Test",
  timeout: 1000,
});

const GetUserData = async (NCedula: string) => {
  try {
    const response = await api2.get("", {
      params: {
        Cedula: NCedula,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Usuario no encontrado");
  }
};

const DownUser = async (cedula: number) => {
  try {
    const response = await api.patch(`user/status/${cedula}`);
    return response.data;
  } catch (error) {
    console.error("Error to disbale:", error);
    throw error;
  }
};

const signIn = async (username:string, password:string) => {
  try {
    const response = await api.post('auth/login', {
      username:username,
      password:password,
    });
    console.log(response.data.access_token); 
  } catch (error) {
    if (error) {
      console.error("Error to disbale:", error);
      throw error;
    }
  }
};

export { GetUsersList, GetUserData, DownUser, signIn };

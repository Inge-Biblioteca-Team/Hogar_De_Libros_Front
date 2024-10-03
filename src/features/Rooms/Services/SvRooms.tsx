import api from "../../../Services/AxiosConfig";

const GetRooms = async (
  page: number,
  limit: number,
  status?: string,
  roomNumber?: string,
  name?: string
) => {
  try {
    const params: { [key: string]: string | number | undefined } = {
      page: page,
      limit: limit,
    };

    if (status) params.status = status;
    if (roomNumber) params.roomNumber = roomNumber;
    if (name) params.name = name;

    console.log("Params enviados a la API:", params);

    const response = await api.get("/Rooms", { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const ActionRoom =async (roomId: number, action:string)  => {
  try {
    const response = await api.patch(`rooms/${action}/${roomId}`);
    return response.data;
  } catch (error) {
    console.error("Error closing room:", error);
    throw error;
  }
};


export {
  GetRooms,
  ActionRoom,
}

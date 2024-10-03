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

const CloseRoom =async (roomId: number)  => {
  try {
    const response = await api.patch(`rooms/closed/${roomId}`);
    return response.data;
  } catch (error) {
    console.error("Error closing room:", error);
    throw error;
  }
};


const RoomToAvailable = async (roomId: number) =>  {
  try {
    const response = await api.patch(`rooms/available/${roomId}`);
    return response.data;
  } catch (error) {
    console.error("Error setting room to available:", error);
    throw error;
  }
};

const MaintenanceRoom = async (roomId: number) => {
  try {
    const response = await api.patch(`rooms/maintenance/${roomId}`);
    return response.data;
  } catch (error) {
    console.error("Error putting room in maintenance:", error);
    throw error;
  }
};


export {
  GetRooms,
  CloseRoom,
  RoomToAvailable,
  MaintenanceRoom,
}

import axios from "axios";

// Funcion para obtener las salas mediante el fetch de la API
const GetRooms = async () => {
  const response = await axios.get(
    "https://668c2a850b61b8d23b0ca034.mockapi.io/Rooms"
  );
  return response.data;
};

export { GetRooms};

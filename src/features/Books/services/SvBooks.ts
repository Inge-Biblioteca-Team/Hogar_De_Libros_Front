import axios from "axios";

const GetPopularBooks = async () => {
  const response = await axios.get(
    "https://66456d5ab8925626f891d5c2.mockapi.io/Pacientes/test/Libros"
  );
  return response.data;
};
const GetFreeBooks = async () => {
  const response = await axios.get(
    "https://66456d5ab8925626f891d5c2.mockapi.io/Pacientes/test/Libros"
  );
  return response.data;
};

const GetBooks = async (type:string) => {
  try {
    const response = await axios.get(
      `https://66456d5ab8925626f891d5c2.mockapi.io/Pacientes/test/Libros?type=${type}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};
export { GetPopularBooks, GetFreeBooks, GetBooks };

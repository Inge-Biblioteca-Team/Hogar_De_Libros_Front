import axios from "axios";

const GetPopularBooks = async () => {
  const response = await axios.get(
    "https://66456d5ab8925626f891d5c2.mockapi.io/Pacientes/test/Libros"
  );
  return response.data;
};
const GetFreeBooks = async () => {
  const response = await axios.get(
    "https://66456d5ab8925626f891d5c2.mockapi.io/Pacientes/test/LibrosFree"
  );
  return response.data;
};

const GetBooks = async () => {
  try {
    const response = await axios.get(
      `https://668c2a850b61b8d23b0ca034.mockapi.io/Books`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};
const GetBookById = async (id:string) => {
  try {
    const response = await axios.get(
      `https://668c2a850b61b8d23b0ca034.mockapi.io/Books/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};
const GetAllBooks = async (page: number, limit: number) => {
  const BASE_URL = 'https://668c2a850b61b8d23b0ca034.mockapi.io/Books';
  try {
    const response = await axios.get(
      `${BASE_URL}?page=${page}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

export { GetPopularBooks, GetFreeBooks, GetBooks, GetAllBooks, GetBookById};
0
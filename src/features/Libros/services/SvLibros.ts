import axios from "axios";

const fetchLibrosRelevantes = async () => {
  const response = await axios.get(
    "https://66456d5ab8925626f891d5c2.mockapi.io/Pacientes/test/Libros"
  );
  console.log(response.data);
  return response.data;
};
const fetchLibrosRegalo = async () => {
  const response = await axios.get(
    "https://66456d5ab8925626f891d5c2.mockapi.io/Pacientes/test/Libros"
  );
  console.log(response.data);
  return response.data;
};
export { fetchLibrosRelevantes, fetchLibrosRegalo };

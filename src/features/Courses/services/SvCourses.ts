import axios from "axios";

const getCourses = async () => {
  const response = await axios.get(
    "https://668ee774bf9912d4c9301a38.mockapi.io/api/courses"
  );
  return response.data;
};

export { getCourses };

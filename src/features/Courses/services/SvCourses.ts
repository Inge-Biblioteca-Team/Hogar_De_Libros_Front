import axios from "axios";

const getCourses = async () => {
  const response = await axios.get(
    "https://668c2a850b61b8d23b0ca034.mockapi.io/Courses"
  );
  return response.data;
};

export { getCourses };

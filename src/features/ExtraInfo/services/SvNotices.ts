import axios from "axios";

const getExtraInfo = async () => {
  const response = await axios.get(
    "https://668c2a850b61b8d23b0ca034.mockapi.io/Notices"
  );
  return response.data;
};

export { getExtraInfo };

import axios from "axios";

const GetTypesAmiguitos  = async () => {
    try {
      const response = await axios.get(
        `https://668c2a850b61b8d23b0ca034.mockapi.io/Amiguitos`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching:", error);
      throw error;
    }
  };


export {GetTypesAmiguitos}
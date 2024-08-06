import axios from "axios";

const GetPrograms = async () =>{
    const response = await axios.get(
        "https://668c2a850b61b8d23b0ca034.mockapi.io/Programs"
      );
      return response.data;
}

export {GetPrograms}

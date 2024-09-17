import axios from "axios";

const token = sessionStorage.getItem("Token")
  
const api = axios.create({
    baseURL:"http://localhost:3000",
    timeout:1000,
    headers: {'Authorization': `Bearer ${token}`}
})

export default api
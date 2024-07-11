import { useState, useEffect } from "react";
import { GetSalas } from "../Services/ApiServices";

export const UseGetSalas = () => {

  /* 
  Este componente lo que hace es manejarse con el estado de las salas
  entre la carga de la pagina y la obtencion de los datos de la API
  a su vez maneja el estado de carga y error en caso de que la API
  */
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | Error>(null);

  useEffect(() => {
    const fetchSalas = async () => {
      try {
        const data = await GetSalas();
        setRooms(data);
        setLoading(false);
      } catch (error) {
        setError(null);
        setLoading(false);
      }
    };

    fetchSalas();
  }, []);

  return { rooms, loading, error };
};

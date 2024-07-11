import { useState, useEffect } from "react";
import { GetSalas } from "../Services/ApiServices";

export const UseGetSalas = () => {
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

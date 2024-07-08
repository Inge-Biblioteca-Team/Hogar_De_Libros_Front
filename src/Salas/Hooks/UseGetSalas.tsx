import { useState, useEffect } from "react";
import { GetSalas } from "../Services/ApiServices";

export const UseGetSalas = () => {
  const [salas, setSalas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | Error>(null);

  useEffect(() => {
    const fetchSalas = async () => {
      try {
        const data = await GetSalas();
        setSalas(data);
        setLoading(false);
      } catch (error) {
        setError(null);
        setLoading(false);
      }
    };

    fetchSalas();
  }, []);

  return { salas, loading, error };
};

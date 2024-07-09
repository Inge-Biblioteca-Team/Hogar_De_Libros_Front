import { useEffect, useState } from "react";
import { GetProgramasActividades } from "../Services/ApiServices";

export const UseGetProgramasActividades = () => {
  const [programas, setProgramas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | Error>(null);

  useEffect(() => {
    const fetchProgramas = async () => {
      try {
        const data = await GetProgramasActividades();
        setProgramas(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchProgramas();
  }, []); // Dependencia vacía para que se ejecute solo una vez

  return { programas, loading, error };
};
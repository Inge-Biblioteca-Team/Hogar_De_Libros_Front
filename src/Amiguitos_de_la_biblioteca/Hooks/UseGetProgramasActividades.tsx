import { useEffect, useState } from "react";
import { GetProgramasActividades } from "../Services/ApiServicesProgramas";

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
  }, []);

  return { programas, loading, error };
};
import { useEffect, useState } from "react";
import { GetVolunteeringPrograms } from "../Services/ApiServicesVolunteering";

// Hook para obtener los programas de voluntariado
export const UseGetVolunteeringPrograms = () => {
  const [programas, setProgramas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | Error>(null);

  useEffect(() => {
    const fetchProgramas = async () => {
      try {
        const data = await GetVolunteeringPrograms();
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
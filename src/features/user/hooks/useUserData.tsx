import { useEffect, useState } from "react";
import { GetByIdNumber } from "../services/SvUser";

const useUserData = (idNumber: string) => {
  const [userData, setUserData] = useState<{ name: string; email: string; phoneNumber: string }>({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [isUserRegistered, setIsUserRegistered] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!idNumber) {
        setUserData({ name: "", email: "", phoneNumber: "" });
        setIsUserRegistered(false);
        return;
      }

      try {
        const data = await GetByIdNumber(idNumber);
        if (data) {
          setUserData({
            name: data.name,
            email: data.email,
            phoneNumber: data.phone,
          });
          setIsUserRegistered(true);
          setError(null);
        } else {
          setUserData({ name: "", email: "", phoneNumber: "" });
          setIsUserRegistered(false);
          setError("Usuario no registrado");
        }
      } catch (error) {
        setUserData({ name: "", email: "", phoneNumber: "" });
        setIsUserRegistered(false);
        setError("Error al obtener la información del usuario");
      }
    };

    fetchUserData();
  }, [idNumber]);

  return { userData, isUserRegistered, error };
};

export default useUserData;
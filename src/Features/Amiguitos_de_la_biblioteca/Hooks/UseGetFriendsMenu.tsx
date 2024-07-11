import { useEffect, useState } from "react";
import { GetFriendsMenu } from "../Services/ApiServicesFriends";

// hook que obtiene la informacion de los amiguitos de la biblioteca
export const UseGetFriendsMenu = () => {
    const [menu, setMenu] = useState<any[]>([]);
    const [loading, setLoading] = useState(true); //estado de carga
    const [error, setError] = useState<null | Error>(null); //estado de error

    useEffect(() => {
        const fetchMenu = async () =>{
            try{
                const data = await GetFriendsMenu();
                setMenu(data);
                setLoading(false);
                setError(null);
            }catch (error) {
                setError(error as Error);
              } finally {
                setLoading(false);
              }
            };
        fetchMenu();
    }, []); 
    return { menu, loading, error };
};

import { useEffect, useState } from "react";
import { GetMenuAmiguitos } from "../Services/ApiServicesAmiguitosMain";
import { set } from "react-hook-form";


export const UseGetAmiguitosMenu = () => {
    const [menu, setMenu] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<null | Error>(null);

    useEffect(() => {
        const fetchMenu = async () =>{
            try{
                const data = await GetMenuAmiguitos();
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

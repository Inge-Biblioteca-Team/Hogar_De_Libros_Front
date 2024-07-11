const Api_Url = "https://668c2a850b61b8d23b0ca034.mockapi.io/Programas_Actividades"
// Obtiene los programas y actividades de la API
export const GetVolunteeringPrograms = async () =>{
    const response = await fetch(Api_Url)
    if(!response){
        throw new Error("la conexion fallo");
    }
    return response.json();
}
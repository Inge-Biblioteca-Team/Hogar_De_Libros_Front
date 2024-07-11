const ApiUrl = "https://668c2a850b61b8d23b0ca034.mockapi.io/Menu_Amiguitos"
/*Funcion para obtener los programas y actividades de los amiguitos de la
biblioteca mediante el fetch de la API*/
export const GetFriendsMenu = async () =>{
    const response = await fetch(ApiUrl)
    if(!response){
        throw new Error("la conexion fallo");
    }
    return response.json();
}
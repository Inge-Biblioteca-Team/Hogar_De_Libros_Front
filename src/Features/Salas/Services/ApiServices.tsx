const Api_Url = "https://668c2a850b61b8d23b0ca034.mockapi.io/Salas"

// Funcion para obtener las salas mediante el fetch de la API
export const GetSalas = async () =>{
    const response = await fetch(Api_Url)
    if(!response.ok){
        throw new Error("la conexion fallo")
    }
    return response.json()
}
const Api_Url = "https://668c2a850b61b8d23b0ca034.mockapi.io/Salas"

export const GetSalas = async () =>{
    const response = await fetch(Api_Url)
    if(!response.ok){
        throw new Error("la conexion fallo")
    }
    return response.json()
}
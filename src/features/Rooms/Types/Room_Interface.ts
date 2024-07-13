

//Interfaz de la sala "atributos que tiene la sala"
export interface IRoom{
    "Imagen": string,
    "Nombre": string,
    "Area": string,
    "Aforo": string,
    "Ubicacion": string,
    "Id": number
}

export type Room={
    Image: string,
    Name: string,
    Area: string,
    capacity: number,
    location: number,
    Id:number //Proximamente Numero de sala
}


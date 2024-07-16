export type AmiguitoInfo = {
    nameType: string,
    Image: string,
    Description:string,
    id:number
}

//Interfaz de los programas de voluntariado
export interface IVolunteeringPrograms{
    Id: number,
    Imagen: string,
    Categoria: string,
    Descripcion: string
}
export type Course = {
  CourseType: string;
  Quota: string;
  Image: string;
  Name: string;
  Id: number;
};

export type Course2 = {
  Nombre: string;
  Tipo: string;
  Cupos: string;
  Imagen: string;
  Id: number;
};

//cambiar a course cuando este el api

export type Event = {
  Fecha: string;
  titulo: string;
  Lugar: string;
  Descripcion: string;
};

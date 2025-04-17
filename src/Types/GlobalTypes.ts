import { Dispatch, SetStateAction } from "react";

export type downType = {
  reason: string;
  Id: string;
};

export type ModalOpen = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export type uploadImage = {
  image: File;
  folder: string;
};

export type BiblioStats = {
  month: string;
  eventsCount: number;
  coursesCount: number;
  loansCount: number;
  UsoComputo: number;
};

export type Counts = {
  EventosExitosos: number;
  CursosExitosos: number;
  PrestamosExitosos: number;
  EquiposExitosos: number;
};

export type ActivesCounts = {
  Eventos: number;
  Cursos: number;
  Prestamos: number;
  Libros: number;
  Equipos: number;
  Amigos: number;
  Usuarios: number;
  AsistenciaMes: number
};

export type weekItems = {
  title: string;
  date: string;
};

export interface OpenModals {
  setOpen1: Dispatch<SetStateAction<boolean>>;
  setOpen2: Dispatch<SetStateAction<boolean>>;
  setOpen3: Dispatch<SetStateAction<boolean>>;
  status?:boolean
  openTrigger?:boolean;
  setopenTrigger?:Dispatch<SetStateAction<boolean>>;
  text?:string
}

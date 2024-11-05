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
};

export type Book = {
  Title:string,
  Author: string,
  Editorial:  string,
  PublishedYear: string,
  ISBN: string,
  Cover:string,
  BookConditionRating: number,
  ShelfCategory:string,
  SignatureCode: string,
  InscriptionCode: number,
  Observations: string,
  ReserveBook: boolean,
  BoookCode: number;
}

export type BookTest = {
  Title:string,
  Author: string,
  Editorial:  string,
  PublicationYear: string, // renombrar
  ISBN: string,
  Cover:string,
  Condition: number, //Renombrar Front
  ShelfCategory:string, // Cambiar Back ShalfCategory Remplaza a book category
  SignatureCode: string,
  InscriptionCode: string,
  Observations: string, // Añadir back
  ReserveBook: boolean, //Renombrar Bacb
  id: string //Renombrar Front
}
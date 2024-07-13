export type Artista= {
  id_artista: number;
  name: string;
  biography: string;
  image: string;
  works: string[]; 
  socialLinks: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    website?: string;
  }
}
export type NewArtista ={
 id_artista: number;
  name: string;
  biography: string;
  image: string;
  works: string[]; 
  socialLinks: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    website?: string;
  }
}
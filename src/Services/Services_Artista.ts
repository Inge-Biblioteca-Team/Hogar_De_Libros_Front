import { Artista } from "../types/Artista";
const UrlBaseArtista = 'https://66901c04c0a7969efd9b065f.mockapi.io/artista/Artista';

const getArtists = async () => {
  const response = await fetch(`${UrlBaseArtista}`, {
    method: 'GET',
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(`Failed to fetch artists: ${errorMessage}`);
  }

  return response.json();
};

///no se uso
const createArtists = async (data: Artista) => {
  const response = await fetch(`${UrlBaseArtista}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(`Failed to create artist: ${errorMessage}`);
  }

  return response.json(); 
};

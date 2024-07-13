import { useCallback, useContext, useEffect, useState } from "react";
import ArtistsContext from "../../Contexts/ArtistaContext/artistaContext";
import { Artista } from "../../types/Artista";
 
function UseGetAllArtists() {
    const { artista} = useContext(ArtistsContext);
    const [artists, setArtists] = useState<Artista[]>([]);

  ///definir la funcion
    const getArtistaData = useCallback(async () => {
      try {
        const response = await fetch('https://66901c04c0a7969efd9b065f.mockapi.io/artista/Artista');
        const data: Artista[] = await response.json();
        setArtists(data);
      } catch (error) {
        console.error(error);
      }
    }, []);
  
    ///actualizar artistas
    useEffect(() => {
      if (artista) {
        setArtists(artista);
      }
    }, [artista]);
  
    return {
      artists,
      getArtistaData,
    };
}

export default UseGetAllArtists;
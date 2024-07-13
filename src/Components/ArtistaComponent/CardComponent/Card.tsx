import { useEffect } from "react";
import CardFlipp from "./CardFlip";
import { Artista } from "../../../types/Artista";
import UseGetAllArtists from "../../../hooks/Artistas/UseGetAllArtistas";

const Card = () => {
  const { artists, getArtistaData } = UseGetAllArtists();

  useEffect(() => {
    getArtistaData();
  }, [getArtistaData]);

  if (artists && artists.length > 0) {
    return (
      <div className="grid grid-cols-2 " style={{ padding: '0% 0% 1% 0%', gap: '1%'}}>
        {artists.map((artist: Artista) => ( 
          <div key={artist.id_artista} style={{ padding: '1% 0% 0% 0%'  }} className="w-full h-full">
            <CardFlipp artista={artist} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <span className="flex w-full h-full items-center justify-center
    dark:text-white text-3xl
    ">No artists found</span>
  );
}

export default Card;
import { ReactNode, useState } from "react";
import ArtistsContext from "./artistaContext";
import { Artista } from "../../types/Artista";

const ArtistsProvider = ({ children }: { children: ReactNode }) => {
  const [artista, setArtists] = useState<Artista[] | null>(null);

  return (
    <ArtistsContext.Provider value={{ artista, setArtists }}>
      {children}
    </ArtistsContext.Provider>
  );
};

export default ArtistsProvider;
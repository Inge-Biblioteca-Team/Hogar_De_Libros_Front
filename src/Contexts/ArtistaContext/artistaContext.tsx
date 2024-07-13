import { createContext } from "react";
import { Artista } from "../../types/Artista";

interface ArtistsContextType {
  artista: Artista[] | null;
  setArtists: React.Dispatch<React.SetStateAction<Artista[] | null>>;
}

const ArtistsContext = createContext<ArtistsContextType>({
  artista: null,
  setArtists: () => {},
});

export default ArtistsContext;
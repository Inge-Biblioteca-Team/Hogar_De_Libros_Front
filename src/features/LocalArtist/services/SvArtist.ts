import axios from "axios";

const getLocalArtist = async () => {
  const response = await axios.get(
    "https://66901c04c0a7969efd9b065f.mockapi.io/artista/Artista"
  );
  return response.data;
};

export { getLocalArtist };

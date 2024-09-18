import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

const getLocalArtist = async (page: number, limit: number) => {
  try {
    const response = await api.get(`local-artist`, {
      params: {
        page: page,
        limit: limit,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error to get requests:", error);
    throw error;
  }
};

const DownArtist = async (id: number) => {
  try {
    const response = await api.patch(`local-artist/${id}/Down`);
    return response.data;
  } catch (error) {
    console.error("Error to disbale:", error);
    throw error;
  }
};

export { getLocalArtist, DownArtist };

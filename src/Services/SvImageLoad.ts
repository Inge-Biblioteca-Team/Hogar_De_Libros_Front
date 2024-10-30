import api from "./AxiosConfig";

const uploadNewImage = async (file: File, folder: string): Promise<string> => {
  if (file) {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await api.post(`/files/upload/${folder}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data.filePath;
    } catch (error) {
      console.error("Error al subir imagen:", error);
      throw new Error("Error al subir imagen");
    }
  }
  throw new Error("Niingun archivo fue dado");
};

const GetImageList = async (category: string) => {
  try {
    const response = await api.get(`files/${category}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { uploadNewImage, GetImageList };

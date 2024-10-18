import api from "./AxiosConfig";

const uploadImage = async (file: File): Promise<string> => {
  if (file) {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await api.post("/files/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data.filePath;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw new Error("Error uploading image");
    }
  }
  throw new Error("No file provided");
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
export { uploadImage, GetImageList };

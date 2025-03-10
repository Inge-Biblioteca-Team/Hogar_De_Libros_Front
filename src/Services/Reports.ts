import axios from "axios";
import api from "./AxiosConfig";

const downloadLoanReport = async (
  startDate: string,
  endDate: string,
  reportType: string
) => {
  try {
    const response = await api.post(
      `reports/download-${reportType}-report`,
      { startDate, endDate },
      { responseType: "blob" }
    );

    const contentDisposition = response.headers["content-disposition"];
    const fileNameMatch = contentDisposition?.match(/filename="(.+)"/);
    const fileName = fileNameMatch
      ? fileNameMatch[1]
      : `Reporte_${reportType}.pdf`;

    downloadFile(response.data, fileName);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data;

      if (errorMessage instanceof Blob) {
        const errorText = await errorMessage.text();
        const errorJson = JSON.parse(errorText);
        throw new Error(errorJson.message || "Error al generar el reporte");
      } else {
        const message =
          errorMessage?.message || "Error desconocido al procesar el reporte";
        throw new Error(message);
      }
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

const downloadFile = (data: Blob, fileName: string) => {
  const url = window.URL.createObjectURL(data);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
};

export { downloadLoanReport };

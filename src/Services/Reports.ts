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

    const contentDisposition = response.headers['content-disposition'];
    console.log("Content-Disposition:", contentDisposition);

    const fileNameMatch = contentDisposition?.match(/filename="(.+)"/);
    const fileName = fileNameMatch ? fileNameMatch[1] : `Reporte_${reportType}.pdf`;


    downloadFile(response.data, fileName);
  } catch (error) {
    console.error("Error al descargar el reporte:", error);
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

import { useMutation } from "react-query";
import { downloadLoanReport } from "../Services/Reports";
import toast from "react-hot-toast";
import { ApiError } from "../Types/ApiTypes";

const UseDownloadReport = () => {
  return useMutation({
    mutationFn: async ({
      startDate,
      endDate,
      reportType,
    }: {
      startDate: string;
      endDate: string;
      reportType: string;
    }) =>
      toast.promise(downloadLoanReport(startDate, endDate, reportType), {
        loading: "Generando reporte porfavor...",
        success: <span>Reporte generado con exito.</span>,
        error: (error: ApiError) => (
          <span>Error al generar reporte: {error.message}</span>
        ),
      }),
  });
};

export default UseDownloadReport;

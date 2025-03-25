import { Button, Label, Modal, TextInput } from "flowbite-react";
import { Dispatch, SetStateAction, useState } from "react";
import UseDownloadReport from "../../hooks/UseDownloadReport";
import { formatToYMD } from "../FormatTempo";

const reportDescriptions: Record<string, string> = {
  WS: "usos de equipos de Cómputo",
  BL: "préstamo de Libros",
  CO: "cursos",
  EV: "eventos",
  AS:'asistencia',
  US: 'usuarios externos registrados'
};

const ReportModal = ({
  open,
  setOpen,
  reportType,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  reportType: string;
}) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { mutate: generateReport, isLoading } = UseDownloadReport();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generateReport(
      { startDate, endDate, reportType },
      { onSuccess: () => setOpen(false) }
    );
  };
  
    const minMax = formatToYMD(new Date());
  return (
    <Modal show={open} onClose={() => setOpen(false)}>
      <Modal.Header>
        Generar reporte de {reportDescriptions[reportType]}
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body className=" space-y-4">
          <div>
            <Label value="Fecha de incio" />
            <TextInput
              type="date"
              value={startDate}
              max={minMax}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div>
            <Label value="Fecha de fin" />
            <TextInput
              type="date"
              value={endDate}
              max={minMax}
              onChange={(e) => setEndDate(e.target.value)}
              min={startDate}
              required
            />
          </div>
        </Modal.Body>
        <Modal.Footer className=" flex items-center justify-around">
          <Button color={"red"} tabIndex={3} onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button type="submit" color="blue" disabled={isLoading}>
            {isLoading ? "Generando..." : "Generar Reporte"}
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default ReportModal;

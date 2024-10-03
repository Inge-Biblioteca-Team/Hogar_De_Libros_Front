import { Table } from "flowbite-react";
import BTNRequest from "./BTNRequest";
import { HourMapping, Reserve } from "../../Types/RoomsReservations";
import { formatToDMY } from "../../../../components/FormatTempo";

const TblRowsReservation = ({ reserve }: { reserve: Reserve }) => {
  const reserveDay = formatToDMY(reserve.date);
  const requestDay = formatToDMY(reserve.reservationDate);

  const start = Math.min(...reserve.selectedHours);
  const end = Math.max(...reserve.selectedHours);

  return (
    <>
      <Table.Head>
        <Table.HeadCell>Solicitante</Table.HeadCell>
        <Table.HeadCell>Fecha de Solicitud</Table.HeadCell>
        <Table.HeadCell>Fecha reservada</Table.HeadCell>
        <Table.HeadCell>Hora de inicio / Fin</Table.HeadCell>
        <Table.HeadCell>Actividad</Table.HeadCell>
        <Table.HeadCell></Table.HeadCell>
      </Table.Head>
      <Table.Body>
        <Table.Row className="h-20">
          <Table.Cell>{reserve.name} </Table.Cell>
          <Table.Cell>{requestDay} </Table.Cell>
          <Table.Cell>{reserveDay} </Table.Cell>
          <Table.Cell>
            {HourMapping[start]} / {HourMapping[end]}
          </Table.Cell>
          <Table.Cell>{reserve.reason} </Table.Cell>
          <Table.Cell>
            <BTNRequest reserve={reserve} />{" "}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </>
  );
};

export default TblRowsReservation;

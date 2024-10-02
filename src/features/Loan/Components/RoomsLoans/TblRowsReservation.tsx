import { Table } from "flowbite-react";
import BTNRequest from "./BTNRequest";
import { Reserve } from "../../../Rooms/Types/RoomType";
import { format } from "@formkit/tempo";
const TblRowsReservation = ({ reserve }: { reserve: Reserve }) => {
  const Time = reserve.startTime;
  const TimeE = reserve.startTime;
  const dateAux = reserve.date;
  const dateTimeString = `${dateAux}T${Time}`;
  const dateTimeEString = `${dateAux}T${TimeE}`;
  const dateTime = new Date(dateTimeString);
  const dateTimeE = new Date(dateTimeEString);

  const reserveDay = format({
    date: reserve.date,
    format: "DD/MM/YYYY",
    tz: "America/Costa_Rica",
  });
  const requestDay = format({
    date: reserve.reservationDate,
    format: "DD/MM/YYYY",
    tz: "America/Costa_Rica",
  });

  const start = format({
    date: dateTime,
    format: "h:mm A",
    tz: "America/Costa_Rica",
  });
  const end = format({
    date: dateTimeE,
    format: "h:mm A",
    tz: "America/Costa_Rica",
  });

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
            {" "}
            {start}/{end}{" "}
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

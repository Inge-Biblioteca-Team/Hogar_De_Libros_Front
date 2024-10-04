import { Table } from "flowbite-react";

import React from "react";
import { formatToDMY } from "../../../../../components/FormatTempo";
import { ReserveResponse, HourMapping } from "../../../Types/RoomsReservations";
import BTNRequest from "../BTNRequest";

const TblRowsReservation = ({ reserve }: { reserve: ReserveResponse }) => {
  return (
    <>
      <Table.Head className="h-11">
        <Table.HeadCell>Solicitante</Table.HeadCell>
        <Table.HeadCell>Fecha de Solicitud</Table.HeadCell>
        <Table.HeadCell>Fecha reservada</Table.HeadCell>
        <Table.HeadCell>Hora de inicio / Fin</Table.HeadCell>
        <Table.HeadCell>Actividad</Table.HeadCell>
        <Table.HeadCell></Table.HeadCell>
      </Table.Head>
      <Table.Body>
        {reserve.data.map((reservation) => {
          const reserveDay = formatToDMY(reservation.date);
          const requestDay = formatToDMY(reservation.reservationDate);

          const start = Math.min(...reservation.selectedHours);
          const end = Math.max(...reservation.selectedHours);
          return (
            <React.Fragment key={`${reservation.rommReservationId}`}>
              <Table.Row className="h-20" key={reservation.roomId}>
                <Table.Cell>{reservation.name} </Table.Cell>
                <Table.Cell>{requestDay} </Table.Cell>
                <Table.Cell>{reserveDay} </Table.Cell>
                <Table.Cell>
                  {HourMapping[start]} / {HourMapping[end]}
                </Table.Cell>
                <Table.Cell>{reservation.reason} </Table.Cell>
                <Table.Cell>
                  <BTNRequest reserve={reservation} />{" "}
                </Table.Cell>
              </Table.Row>
            </React.Fragment>
          );
        })}
      </Table.Body>
    </>
  );
};

export default TblRowsReservation;

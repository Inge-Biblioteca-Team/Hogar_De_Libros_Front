import { Table } from "flowbite-react";

import React from "react";
import { formatToDMY } from "../../../../../components/FormatTempo";
import { ReserveResponse, HourMapping } from "../../../Types/RoomsReservations";
import BTNRequest from "../BTNRequest";

const TblRowsReservation = ({ reserve }: { reserve: ReserveResponse }) => {
  return (
    <>
      <Table.Head className="dark:bg-neutral-900 dark:text-white h-11">
        <Table.HeadCell className="dark:bg-neutral-900 xl:w-1/5 2xl:w-1/5">Solicitante</Table.HeadCell>
        <Table.HeadCell className="dark:bg-neutral-900 xl:w-1/5 2xl:w-1/5 max-sm:hidden">Fecha de Solicitud</Table.HeadCell>
        <Table.HeadCell className="dark:bg-neutral-900 xl:w-1/5 2xl:w-1/5">Fecha reservada</Table.HeadCell>
        <Table.HeadCell className="dark:bg-neutral-900 xl:w-1/5 xl:table-cell 2xl:w-1/5 2xl:table-cell md:hidden max-sm:hidden">Hora de inicio / Fin</Table.HeadCell>
        <Table.HeadCell className="dark:bg-neutral-900 xl:w-1/5 2xl:w-1/5 max-sm:hidden">Actividad</Table.HeadCell>
        <Table.HeadCell className="dark:bg-neutral-900 xl:w-1/5 2xl:w-1/5 md:hidden"></Table.HeadCell>
      </Table.Head>
      <Table.Body className="dark:bg-[#2d2d2d] dark:text-white">
        {reserve.data.map((reservation) => {
          const reserveDay = formatToDMY(reservation.date);
          const requestDay = formatToDMY(reservation.reservationDate);

          const start = Math.min(...reservation.selectedHours);
          const end = Math.max(...reservation.selectedHours);
          return (
            <React.Fragment key={`${reservation.rommReservationId}`}>
              <Table.Row className="h-20" key={reservation.roomId}>
                <Table.Cell>{reservation.name} </Table.Cell>
                <Table.Cell className="max-sm:hidden">{requestDay} </Table.Cell>
                <Table.Cell>{reserveDay} </Table.Cell>
                <Table.Cell className="xl:table-cell 2xl:table-cell md:hidden max-sm:hidden">
                  {HourMapping[start]} / {HourMapping[end]}
                </Table.Cell>
                <Table.Cell className="max-sm:hidden" >{reservation.reason} </Table.Cell>
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

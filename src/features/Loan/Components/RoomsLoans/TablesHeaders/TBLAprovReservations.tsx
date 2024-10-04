import { Table } from "flowbite-react";

import { ReserveResponse } from "../../../Types/RoomsReservations";

import AprovRows from "../Rows/AprovRows";

const TBLAprovReservations = ({ reserve }: { reserve: ReserveResponse }) => {
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
        {reserve.data.map((reservation) => (
          <AprovRows
            key={reservation.rommReservationId}
            reservation={reservation}
          />
        ))}
      </Table.Body>
    </>
  );
};
export default TBLAprovReservations;

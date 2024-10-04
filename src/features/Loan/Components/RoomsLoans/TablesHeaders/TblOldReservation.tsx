import { Table } from "flowbite-react";

import { ReserveResponse } from "../../../Types/RoomsReservations";
import OldRows from "../Rows/OldRows";

const TblOldReservation = ({ reserve }: { reserve: ReserveResponse }) => {
  return (
    <>
      <Table.Head className="h-11">
        <Table.HeadCell>Solicitante</Table.HeadCell>
        <Table.HeadCell>Fecha de Solicitud</Table.HeadCell>
        <Table.HeadCell>Fecha reservada</Table.HeadCell>
        <Table.HeadCell>Hora de inicio / Fin</Table.HeadCell>
        <Table.HeadCell>Actividad</Table.HeadCell>
      </Table.Head>
      <Table.Body>
        {reserve.data.map((reservation) => (
          <OldRows
            key={reservation.rommReservationId}
            reservation={reservation}
          />
        ))}
      </Table.Body>
    </>
  );
};
export default TblOldReservation;

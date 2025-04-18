import { Table } from "flowbite-react";

import { ReserveResponse } from "../../../Types/RoomsReservations";
import OldRows from "../Rows/OldRows";

const TblOldReservation = ({ reserve }: { reserve: ReserveResponse }) => {
  return (
    <>
      <Table.Head className="dark:[&>tr>th]:!bg-neutral-800 dark:text-white">
        <Table.HeadCell className="">Solicitante</Table.HeadCell>
        <Table.HeadCell className="max-md:hidden">Fecha de Solicitud</Table.HeadCell>
        <Table.HeadCell className="">Fecha reservada</Table.HeadCell>
        <Table.HeadCell className="">Hora de inicio / Fin</Table.HeadCell>
        <Table.HeadCell className="max-md:hidden">Actividad</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
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

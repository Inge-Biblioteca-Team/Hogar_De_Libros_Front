import { Table } from "flowbite-react";

import { ReserveResponse } from "../../../Types/RoomsReservations";
import OldRows from "../Rows/OldRows";

const TblOldReservation = ({ reserve }: { reserve: ReserveResponse }) => {
  return (
    <>
      <Table.Head className="dark:text-white h-11">
        <Table.HeadCell className="dark:bg-neutral-900">Solicitante</Table.HeadCell>
        <Table.HeadCell className="dark:bg-neutral-900">Fecha de Solicitud</Table.HeadCell>
        <Table.HeadCell className="dark:bg-neutral-900">Fecha reservada</Table.HeadCell>
        <Table.HeadCell className="dark:bg-neutral-900">Hora de inicio / Fin</Table.HeadCell>
        <Table.HeadCell className="dark:bg-neutral-900">Actividad</Table.HeadCell>
      </Table.Head>
      <Table.Body className="dark:bg-[#2d2d2d] dark:text-white">
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

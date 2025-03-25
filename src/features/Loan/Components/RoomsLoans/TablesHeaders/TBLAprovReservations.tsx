import { Table } from "flowbite-react";

import { ReserveResponse } from "../../../Types/RoomsReservations";

import AprovRows from "../Rows/AprovRows";

const TBLAprovReservations = ({ reserve }: { reserve: ReserveResponse }) => {
  return (
    <>
      <Table.Head className="dark:bg-neutral-900 dark:text-white h-11">
        <Table.HeadCell className="dark:bg-neutral-900 xl:h-1/5 2xl:w-1/5">Solicitante</Table.HeadCell>
        <Table.HeadCell className="dark:bg-neutral-900 xl:h-1/5 2xl:w-1/5 max-sm:hidden">Fecha de Solicitud</Table.HeadCell>
        <Table.HeadCell className="dark:bg-neutral-900 xl:h-1/5 2xl:w-1/5">Fecha reservada</Table.HeadCell>
        <Table.HeadCell className="dark:bg-neutral-900 xl:h-1/5 xl:table-cell 2xl:w-1/5 2xl:table-cell md:hidden max-sm:hidden">Hora de inicio / Fin</Table.HeadCell>
        <Table.HeadCell className="dark:bg-neutral-900 xl:h-1/5 2xl:w-1/5 max-sm:hidden">Actividad</Table.HeadCell>
        <Table.HeadCell className="dark:bg-neutral-900"></Table.HeadCell>
      </Table.Head>
      <Table.Body className="dark:bg-[#2d2d2d] dark:text-white">
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

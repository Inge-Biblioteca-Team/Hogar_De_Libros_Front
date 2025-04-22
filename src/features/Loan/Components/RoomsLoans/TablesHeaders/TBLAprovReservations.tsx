import { Table } from "flowbite-react";

import { ReserveResponse } from "../../../Types/RoomsReservations";

import AprovRows from "../Rows/AprovRows";

const TBLAprovReservations = ({ reserve }: { reserve: ReserveResponse }) => {
  return (
    <>
      <Table.Head className="dark:[&>tr>th]:!bg-neutral-800 dark:text-white">
        <Table.HeadCell>Solicitante</Table.HeadCell>
        <Table.HeadCell className="max-md:hidden">
          Fecha de Solicitud
        </Table.HeadCell>
        <Table.HeadCell>Fecha reservada</Table.HeadCell>
        <Table.HeadCell>Hora de inicio / Fin</Table.HeadCell>
        <Table.HeadCell className=" max-md:hidden">Actividad</Table.HeadCell>
        <Table.HeadCell className=" max-md:hidden"></Table.HeadCell>
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

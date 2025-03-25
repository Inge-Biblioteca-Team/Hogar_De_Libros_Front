import { Table } from "flowbite-react";

import { ReserveResponse } from "../../../Types/RoomsReservations";

import AprovRows from "../Rows/AprovRows";

const TBLAprovReservations = ({ reserve }: { reserve: ReserveResponse }) => {
  return (
    <>
      <Table.Head className="h-11">
        <Table.HeadCell className="xl:h-1/5 2xl:w-1/5">Solicitante</Table.HeadCell>
        <Table.HeadCell className="xl:h-1/5 2xl:w-1/5 max-sm:hidden">Fecha de Solicitud</Table.HeadCell>
        <Table.HeadCell className="xl:h-1/5 2xl:w-1/5">Fecha reservada</Table.HeadCell>
        <Table.HeadCell className="xl:h-1/5 xl:table-cell 2xl:w-1/5 2xl:table-cell md:hidden max-sm:hidden">Hora de inicio / Fin</Table.HeadCell>
        <Table.HeadCell className="xl:h-1/5 2xl:w-1/5 max-sm:hidden">Actividad</Table.HeadCell>
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

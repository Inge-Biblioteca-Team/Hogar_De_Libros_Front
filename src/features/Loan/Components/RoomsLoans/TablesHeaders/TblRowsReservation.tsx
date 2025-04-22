import { Table } from "flowbite-react"; 
import { ReserveResponse } from "../../../Types/RoomsReservations";
import RoomReservationRows from "../Rows/RoomReservationRows";

const TblRowsReservation = ({ reserve }: { reserve: ReserveResponse }) => {
  return (
    <>
      <Table.Head className="dark:[&>tr>th]:!bg-neutral-800 dark:text-white">
        <Table.HeadCell>Solicitante</Table.HeadCell>
        <Table.HeadCell className=" max-md:hidden">Fecha de Solicitud</Table.HeadCell>
        <Table.HeadCell>Fecha reservada</Table.HeadCell>
        <Table.HeadCell>Hora de inicio / Fin</Table.HeadCell>
        <Table.HeadCell className=" max-md:hidden">Actividad</Table.HeadCell>
        <Table.HeadCell className=" max-md:hidden"></Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {reserve.data.map((reservation) => (
          <RoomReservationRows
            reservation={reservation}
            key={reservation.rommReservationId}
          />
        ))}
      </Table.Body>
    </>
  );
};

export default TblRowsReservation;

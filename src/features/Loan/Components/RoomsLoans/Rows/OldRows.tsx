import { Table } from "flowbite-react";
import { useState } from "react";
import { formatToDMY } from "../../../../../components/FormatTempo";
import { Reserve, HourMapping } from "../../../Types/RoomsReservations";
import MDSeeReservation from "../Modals/MDSeeReservation";

const OldRows = ({ reservation }: { reservation: Reserve }) => {
  const reserveDay = formatToDMY(reservation.date);
  const requestDay = formatToDMY(reservation.reservationDate);
  const start = HourMapping[Math.min(...reservation.selectedHours)];
  const end = HourMapping[Math.max(...reservation.selectedHours)];

  const [openS, setOpenS] = useState<boolean>(false);
  return (
    <>
      <Table.Row
             className="dark:border-zinc-700  dark:bg-[#2d2d2d]"
        onClick={() => setOpenS(true)}
      >
        <Table.Cell>{reservation.name} </Table.Cell>
        <Table.Cell className="max-sm:hidden">{requestDay} </Table.Cell>
        <Table.Cell>{reserveDay} </Table.Cell>
        <Table.Cell>
          {start === end ? `${end}` : `${start} a ${end}`}
        </Table.Cell>
        <Table.Cell className="max-sm:hidden">{reservation.reason} </Table.Cell>
      </Table.Row>
      <MDSeeReservation open={openS} setOpen={setOpenS} reserve={reservation} />
    </>
  );
};

export default OldRows;

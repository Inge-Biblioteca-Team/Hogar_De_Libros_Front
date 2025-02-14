import React, { useState } from "react";
import { HourMapping, Reserve } from "../../../Types/RoomsReservations";
import { Table } from "flowbite-react";
import { formatToDMY } from "../../../../../components/FormatTempo";
import FinishLoan from "../Modals/FinishLoan";
import MDSeeReservation from "../Modals/MDSeeReservation";
import { FaRegCalendarXmark } from "react-icons/fa6";
import { PiEyeFill } from "react-icons/pi";

const AprovRows = ({ reservation }: { reservation: Reserve }) => {
  const reserveDay = formatToDMY(reservation.date);
  const requestDay = formatToDMY(reservation.reservationDate);
  const start = Math.min(...reservation.selectedHours);
  const end = Math.max(...reservation.selectedHours);

  const [openS, setOpenS] = useState<boolean>(false);
  const [openF, setOpenF] = useState<boolean>(false);
  return (
    <>
      <React.Fragment key={`${reservation.rommReservationId}`}>
        <Table.Row className="h-20">
          <Table.Cell>{reservation.name} </Table.Cell>
          <Table.Cell className="max-sm:hidden">{requestDay} </Table.Cell>
          <Table.Cell>{reserveDay} </Table.Cell>
          <Table.Cell className="xl:table-cell 2xl:table-cell md:hidden max-sm:hidden">
            {HourMapping[start]} / {HourMapping[end]}
          </Table.Cell>
          <Table.Cell className="max-sm:hidden" >{reservation.reason} </Table.Cell>
          <Table.Cell>
            <div className=" flex justify-center md:gap-x-4 max-sm:gap-4 gap-x-12">
              <button
                type="button"
                className=" hover:text-Body"
                onClick={() => setOpenS(true)}
              >
                {""} <PiEyeFill className="size-6" size={28} />
              </button>
              <button
                type="button"
                title="Rechazar préstamo"
                className="hover:text-red-600"
                onClick={() => setOpenF(true)}
              >
                <FaRegCalendarXmark  className="size-6" size={25} />
              </button>
            </div>
          </Table.Cell>
        </Table.Row>
        <MDSeeReservation 
          open={openS}
          setOpen={setOpenS}
          reserve={reservation}
        />
        <FinishLoan open={openF} setOpen={setOpenF} reserve={reservation} />
      </React.Fragment>
    </>
  );
};

export default AprovRows;

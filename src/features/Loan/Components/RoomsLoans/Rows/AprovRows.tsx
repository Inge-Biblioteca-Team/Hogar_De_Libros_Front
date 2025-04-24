import React, { useState } from "react";
import { HourMapping, Reserve } from "../../../Types/RoomsReservations";
import { Table } from "flowbite-react";
import { formatToDMY } from "../../../../../components/FormatTempo";
import FinishLoan from "../Modals/FinishLoan";
import MDSeeReservation from "../Modals/MDSeeReservation";
import MobilePopOverOptions from "../../../../../components/MobileComponents/MobilePopOverOptions";
import BTNAccions from "../../../../../components/DesktopComponents/BTNAccions";

const AprovRows = ({ reservation }: { reservation: Reserve }) => {
  const reserveDay = formatToDMY(reservation.date);
  const requestDay = formatToDMY(reservation.reservationDate);
  const start = Math.min(...reservation.selectedHours);
  const end = Math.max(...reservation.selectedHours);

  const [openS, setOpenS] = useState<boolean>(false);
  const [openF, setOpenF] = useState<boolean>(false);
  const [openTrigger, setopenTrigger] = useState<boolean>(false);
  const handleRowClick = () => {
    setopenTrigger(true);
  };

  return (
    <>
      <React.Fragment key={`${reservation.rommReservationId}`}>
        <Table.Row
          className="dark:border-zinc-700  dark:bg-[#2d2d2d]"
          onClick={handleRowClick}
        >
          <Table.Cell>{reservation.name} </Table.Cell>
          <Table.Cell className="max-md:hidden">{requestDay} </Table.Cell>
          <Table.Cell>
            <MobilePopOverOptions
              setopenTrigger={setopenTrigger}
              openTrigger={openTrigger}
              setOpen1={setOpenS}
              setOpen12={setOpenF}
              text={reserveDay}
              status
            />
          </Table.Cell>
          <Table.Cell>
            {HourMapping[start]} / {HourMapping[end]}
          </Table.Cell>
          <Table.Cell className="max-md:hidden">
            {reservation.reason}{" "}
          </Table.Cell>
          <Table.Cell className=" max-md:hidden">
            <BTNAccions setOpen1={setOpenS} setOpen11={setOpenF} status />
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

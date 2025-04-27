import { Table } from "flowbite-react";
import { formatToDMY } from "../../../../../components/FormatTempo";
import { HourMapping, Reserve } from "../../../Types/RoomsReservations";
import { useState } from "react";
import MDRefuseReservation from "../Modals/MDRefuseReservation";
import AproveReservation from "../Modals/AproveReservation";
import MDSeeReservation from "../Modals/MDSeeReservation";
import MobilePopOverOptions from "../../../../../components/MobileComponents/MobilePopOverOptions";
import BTNAccions from "../../../../../components/DesktopComponents/BTNAccions";

const RoomReservationRows = ({ reservation }: { reservation: Reserve }) => {
  const reserveDay = formatToDMY(reservation.date);
  const requestDay = formatToDMY(reservation.reservationDate);
  const start = Math.min(...reservation.selectedHours);
  const end = Math.max(...reservation.selectedHours);

  const [openV, setOpenV] = useState<boolean>(false);
  const [openA, setOpenA] = useState<boolean>(false);
  const [openD, setOpenD] = useState<boolean>(false);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const handleRowClick = () => {
    setPopoverVisible(true);
  };

  return (
    <>
      <Table.Row
        className="dark:border-zinc-700  dark:bg-[#2d2d2d]"
        onClick={handleRowClick}
      >
        <Table.Cell>{reservation.name} </Table.Cell>
        <Table.Cell className="max-md:hidden">{requestDay} </Table.Cell>
        <Table.Cell>
          <MobilePopOverOptions
            openTrigger={popoverVisible}
            setopenTrigger={setPopoverVisible}
            setOpen1={setOpenV}
            setOpen4={setOpenA}
            setOpen5={setOpenD}
            text={reserveDay}
            status={false}
          />
        </Table.Cell>
        <Table.Cell>
          {HourMapping[start]} / {HourMapping[end]}
        </Table.Cell>
        <Table.Cell className="max-md:hidden">{reservation.reason} </Table.Cell>
        <Table.Cell className="max-md:hidden">
          <BTNAccions
            setOpen1={setOpenV}
            setOpen4={setOpenA}
            setOpen5={setOpenD}
            status={false}
          />
        </Table.Cell>
      </Table.Row>
      <MDSeeReservation open={openV} setOpen={setOpenV} reserve={reservation} />
      <MDRefuseReservation
        open={openD}
        setOpen={setOpenD}
        reserve={reservation}
      />
      <AproveReservation
        open={openA}
        setOpen={setOpenA}
        ID={reservation.rommReservationId}
      />
    </>
  );
};

export default RoomReservationRows;

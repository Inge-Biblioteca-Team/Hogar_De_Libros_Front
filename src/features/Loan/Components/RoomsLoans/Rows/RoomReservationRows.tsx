import { Table } from "flowbite-react";
import { formatToDMY } from "../../../../../components/FormatTempo";
import { HourMapping, Reserve } from "../../../Types/RoomsReservations";
import { useState } from "react";
import BTNMobileLoan from "../../../../../components/MobileComponents/BTNMobileLoan";
import MDRefuseReservation from "../Modals/MDRefuseReservation";
import AproveReservation from "../Modals/AproveReservation";
import MDSeeReservation from "../Modals/MDSeeReservation";
import BTNLoans from "../../../../../components/DesktopComponents/BTNLoans";

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
          <BTNMobileLoan
            openTrigger={popoverVisible}
            setopenTrigger={setPopoverVisible}
            setOpen1={setOpenV}
            setOpen2={setOpenA}
            setOpen3={setOpenD}
            text={reserveDay}
            status={false}
          />
        </Table.Cell>
        <Table.Cell>
          {HourMapping[start]} / {HourMapping[end]}
        </Table.Cell>
        <Table.Cell className="max-md:hidden">{reservation.reason} </Table.Cell>
        <Table.Cell className="max-md:hidden">
          <BTNLoans
            setOpen1={setOpenV}
            setOpen2={setOpenA}
            setOpen3={setOpenD}
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

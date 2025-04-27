import { Table } from "flowbite-react";
import { useState } from "react";
import { Events } from "../types/Events";
import EditEvent from "./Modals/EditEvent";
import ViewEvent from "./Modals/ViewEvent";
import CancelEvent from "./Modals/CancelEvent";
import { formatToDMY } from "../../../components/FormatTempo";
import MobilePopOverOptions from "../../../components/MobileComponents/MobilePopOverOptions";
import BTNAccions from "../../../components/DesktopComponents/BTNAccions";

const EventsRows = ({ event }: { event: Events }) => {
  const [see, setSee] = useState<boolean>(false);
  const [down, setDown] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const handleRowClick = () => {
    setPopoverVisible(true);
  };
  const eventDay = formatToDMY(event.Date);
  return (
    <>
      <Table.Row
        className="dark:border-zinc-700  dark:bg-[#2d2d2d]"
        key={event.EventId}
        onClick={handleRowClick}
      >
        <Table.Cell>{event.Title}</Table.Cell>
        <Table.Cell className="max-md:hidden">{event.Location}</Table.Cell>
        <Table.Cell className="max-lg:hidden">
          {event.InchargePerson}
        </Table.Cell>
        <Table.Cell className="">
          <MobilePopOverOptions
            openTrigger={popoverVisible}
            setopenTrigger={setPopoverVisible}
            setOpen1={setSee}
            setOpen2={setEdit}
            setOpen3={setDown}
            text={eventDay}
            status={true}
          />
        </Table.Cell>
        <Table.Cell className="max-md:hidden">{event.Time}</Table.Cell>
        <Table.Cell className=" max-sm:hidden">{event.Status}</Table.Cell>
        <Table.Cell className="max-md:hidden">
          <BTNAccions
            setOpen1={setSee}
            setOpen2={setEdit}
            setOpen3={setDown}
            status={true}
          />
        </Table.Cell>
      </Table.Row>
      <EditEvent edit={edit} setEdit={setEdit} event={event} />
      <ViewEvent see={see} setSee={setSee} event={event} />
      <CancelEvent open={down} setOpen={setDown} event={event} />
    </>
  );
};

export default EventsRows;

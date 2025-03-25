import { Table } from "flowbite-react";
import { useState } from "react";
import { Events } from "../types/Events";
import EventBTNAccions from "./BTN/EventBTNAccions";
import EditEvent from "./Modals/EditEvent";
import ViewEvent from "./Modals/ViewEvent";
import CancelEvent from "./Modals/CancelEvent";
import { formatToDMY } from "../../../components/FormatTempo";

const EventsRows = ({ event }: { event: Events }) => {
  const [see, setSee] = useState<boolean>(false);
  const [down, setDown] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const eventDay = formatToDMY(event.Date);
  return (
    <>
      <Table.Row key={event.EventId}>
        <Table.Cell>{event.Title}</Table.Cell>
        <Table.Cell className="2xl:table-cell xl:table-cell md:hidden max-sm:hidden">{event.Location}</Table.Cell>
        <Table.Cell className="max-sm:hidden">{event.InchargePerson}</Table.Cell>
        <Table.Cell className="max-sm:hidden">{eventDay}</Table.Cell>
        <Table.Cell className="2xl:table-cell xl:table-cell md:hidden max-sm:hidden">{event.Time}</Table.Cell>
        <Table.Cell>
          {event.Status}
        </Table.Cell>
        <Table.Cell>
          <EventBTNAccions
            setSee={setSee}
            setEdit={setEdit}
            setDown={setDown}
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
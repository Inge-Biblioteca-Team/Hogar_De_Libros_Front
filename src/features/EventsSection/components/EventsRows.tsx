import { Table } from "flowbite-react";
import { useState } from "react";
import { Events } from "../types/Events";
import EventBTNAccions from "./BTN/EventBTNAccions";
import EditEvent from "./Modals/EditEvent";
import ViewEvent from "./Modals/ViewEvent";

const EventsRows = ({ event }: { event: Events }) => {
  const [see, setSee] = useState<boolean>(false);
  const [down, setDown] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  return (
    <>
      <Table.Row key={event.EventId} className=" h-24">
        <Table.Cell className="w-52">{event.Title}</Table.Cell>
        <Table.Cell className="w-52">{event.Location}</Table.Cell>
        <Table.Cell className="w-44">{event.InchargePerson}</Table.Cell>
        <Table.Cell className="w-52">{new Date(event.Date).toLocaleDateString()}</Table.Cell>
        <Table.Cell className="w-64">{event.Time}</Table.Cell>
        <Table.Cell className="w-64">
          {event.Status === "P"
            ? "Próximamente"
            : event.Status === "F"
              ? "Finalizado"
              : "En Ejecución"}
        </Table.Cell>
        <Table.Cell>
          <EventBTNAccions
            setSee={setSee}
            setEdit={setEdit}
            setDown={setDown} />
        </Table.Cell>
      </Table.Row>
      <EditEvent edit={edit} setEdit={setEdit} event={event} />
      <ViewEvent see={see}  setSee={setSee} event={event}/>
    </>
  );
};

export default EventsRows;
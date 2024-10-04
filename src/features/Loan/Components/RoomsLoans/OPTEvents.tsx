import { useQuery } from "react-query";
import { getEventList } from "../../Services/SVReservations";
import { Events } from "../../../EventsSection/types/Events";
const OPTEvents = ({ date }: { date: string }) => {
  const { data: events } = useQuery<Events[], Error>(
    ["EventsList", date],
    () => getEventList(date),
    {
      staleTime: 600,
    }
  );
  return (
    <>
      <option value="NULL">No aplica</option>
      {events?.map((program) => (
        <option key={program.EventId} value={program.EventId}>
          {program.Title}
        </option>
      ))}
    </>
  );
};

export default OPTEvents;

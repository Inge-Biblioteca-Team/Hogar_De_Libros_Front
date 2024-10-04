import { useQuery } from "react-query";
import { getEventList } from "../../Services/SVReservations";
import { Events } from "../../../EventsSection/types/Events";
const OPTEvents = () => {
  const { data: events } = useQuery<Events[], Error>(
    ["EventsList"],
    () => getEventList(),
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

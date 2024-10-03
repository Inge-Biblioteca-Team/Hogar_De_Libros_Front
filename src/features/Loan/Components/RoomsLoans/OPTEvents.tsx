import { useQuery } from "react-query";
import { program } from "../../../Courses/types/Courses";
import { getEventList } from "../../Services/SVReservations";
const OPTEvents = () => {
  const { data: programs } = useQuery<program[], Error>(
    ["ProgramList"],
    () => getEventList(),
    {
      staleTime: 600,
    }
  );
  return (
    <>
      <option value="0">Cursos Libres</option>
      {programs?.map((program) => (
        <option key={program.programsId} value={program.programsId}>
          {program.programName}
        </option>
      ))}
    </>
  );
};

export default OPTEvents;

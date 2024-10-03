import { useQuery } from "react-query";
import { program } from "../../../Courses/types/Courses";
import { getCoursesList } from "../../Services/SVReservations";

const OPTCourses = () => {
  const { data: programs } = useQuery<program[], Error>(
    ["ProgramList"],
    () => getCoursesList(),
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

export default OPTCourses;

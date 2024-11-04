import { useQuery } from "react-query";
import { GetProgramsIntoCourses } from "../../services/SvCourses";
import { program } from "../../types/Courses";

const ProgramsOPT = () => {
  const { data: programs } = useQuery<program[], Error>(
    ["ProgramList"],
    () => GetProgramsIntoCourses(),
    {
      staleTime: 600,
    }
  );
  return (
    <>
      <option value="">Cursos libres</option>
      {programs?.map((program) => (
        <option key={program.programsId} value={program.programsId}>
          {program.programName}
        </option>
      ))}
    </>
  );
};

export default ProgramsOPT;

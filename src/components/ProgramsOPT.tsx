import { useQuery } from "react-query";
import { GetProgramsIntoCourses } from "../features/Courses/services/SvCourses";
import { program } from "../features/Courses/types/Courses";


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
      {programs?.map((program) => (
        <option key={program.programsId} value={program.programsId}>
          {program.programName}
        </option>
      ))}
    </>
  );
};

export default ProgramsOPT;

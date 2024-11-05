import { useQuery } from "react-query";
import CardProgram from "../components/CardProgram";
import { ApiProgramsResponse, Program } from "../types/Programs";
import { GetProgramsList } from "../services/SvPrograms";
import { Carousel } from "flowbite-react";

const CurrentPrograms = () => {
  const { data: Programs } = useQuery<ApiProgramsResponse, Error>(
    ["ProgramCatalog"],
    () => GetProgramsList(1, 100, "", "1"),
    {
      staleTime: 600,
    }
  );

  const chunkArray = (arr: Program[], size: number): Program[][] => {
    const result: Program[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const groupedProgram = chunkArray(Programs?.data || [], 4);

  return (
    <>
      {Programs && Programs?.count > 0 && (
        <section
          className="flex items-center w-4/5 flex-col max-sm:m-0"
          id="Programs"
        >
          <h2 className="font-bold text-2xl">Nuestros programas</h2>
          <Carousel
            indicators={false}
            pauseOnHover
            leftControl
            rightControl
            style={{ height: "40rem" }}
          >
            {groupedProgram.map((group, groupIndex) => (
              <div key={groupIndex} className=" flex justify-center gap-x-4">
                {group.map((program) => (
                  <CardProgram
                    key={"PR" + program.programsId}
                    program={program}
                  />
                ))}
              </div>
            ))}
          </Carousel>
        </section>
      )}
    </>
  );
};

export default CurrentPrograms;

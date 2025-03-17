import { useQuery } from "react-query";
import CardProgram from "../components/CardProgram";
import { ApiProgramsResponse, Program } from "../types/Programs";
import { GetProgramsList } from "../services/SvPrograms";
import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CurrentPrograms = ({ home }: { home?: boolean }) => {
  const { data: Programs, isLoading } = useQuery<ApiProgramsResponse, Error>(
    ["ProgramCatalog"],
    () => GetProgramsList(1, 100, "", "1"),
    {
      staleTime: 600,
    }
  );

  const [itemsPerGroup, setItemsPerGroup] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerGroup(1);
      } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
        setItemsPerGroup(2);
      } else {
        setItemsPerGroup(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chunkArray = (arr: Program[], size: number): Program[][] => {
    const result: Program[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const groupedProgram = chunkArray(Programs?.data || [], itemsPerGroup);

  return (
    <>
      <section className="space-y-4 w-11/12" id="Programs">
        <h2
          className="font-bold text-4xl text-center 
          max-sm:text-xl"
        >
          Nuestros programas
        </h2>
        {home && (
          <h3 className=" text-center text-md">
            La biblioteca cuenta con diversos programas, los cuales tienen
            actividades para todas las edades. Aquí te mostramos cuales son.
          </h3>
        )}
        {isLoading ? (
          <div
            className="grid lg:grid-cols-3 xl:grid-cols-3  2xl:grid-cols-3  max-sm:pl-4 max-sm:pr-4 md:pl-2 md:pr-2
            lg:pl-0 lg:pr-0 xl:pl-0 xl:pr-0 2xl:pl-0 2xl:pr-0 max-sm:grid-cols-1 md:grid-cols-2  w-full h-full gap-8"
          >
            <div className="w-full flex flex-col gap-4  h-[26rem] bg-white p-2 rounded-md">
              <Skeleton className="w-full h-40" />
              <div className="flex flex-col gap-0 items-center justify-center">
                <Skeleton className="w-72 h-8" />
                <Skeleton className="w-56 h-8" />
                <Skeleton className="w-20 h-8" />
                <Skeleton className="w-44 h-8" />
                <Skeleton className="w-52 h-8" />
                <Skeleton className="w-36 h-8" />
              </div>
            </div>

            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className="max-sm:hidden w-full flex flex-col gap-4  h-[26rem] bg-white rounded-md p-2"
              >
                <Skeleton className="w-full h-40" />
                <div className="flex flex-col gap-0 items-center justify-center">
                  <Skeleton className="w-72 h-8" />
                  <Skeleton className="w-56 h-8" />
                  <Skeleton className="w-20 h-8" />
                  <Skeleton className="w-44 h-8" />
                  <Skeleton className="w-52 h-8" />
                  <Skeleton className="w-36 h-8" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          Programs &&
          Programs?.count > 0 && (
            <Carousel
              indicators={false}
              pauseOnHover
              leftControl
              rightControl
              className="w-[64rem] lg:w-full md:w-full md:h-[30rem] md:pl-2 md:pr-2  max-sm:w-full max-sm:h-[500px] "
            >
              {groupedProgram.map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  className=" flex md:gap-4 md:h-full md:w-full justify-center max-sm:h-full lg:h-full lg:w-full  max-sm:pr-4 max-sm:pl-4 lg:gap-x-4"
                >
                  {group.map((program) => (
                    <CardProgram
                      key={"PR" + program.programsId}
                      program={program}
                    />
                  ))}
                </div>
              ))}
            </Carousel>
          )
        )}
      </section>
    </>
  );
};

export default CurrentPrograms;

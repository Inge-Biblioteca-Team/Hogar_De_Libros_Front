import { useQuery } from "react-query";
import CardProgram from "../components/CardProgram";
import { ApiProgramsResponse } from "../types/Programs";
import { GetProgramsList } from "../services/SvPrograms";
import { Carousel } from "flowbite-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  ChevronsLeft,
  ChevronsRight,
} from "../../../components/Chrevrons/Chevrons";

const CurrentPrograms = ({ home }: { home?: boolean }) => {
  const { data: Programs, isLoading } = useQuery<ApiProgramsResponse, Error>(
    ["ProgramCatalog"],
    () => GetProgramsList(1, 100, "", "1"),
    {
      staleTime: 900,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <>
      {isLoading && (
        <>
          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              className="max-sm:hidden w-full flex flex-col gap-4  h-[26rem] bg-white rounded-md p-2 max-sm:p-0"
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
        </>
      )}
      {!isLoading && Programs && Programs?.count > 0 && (
        <article className=" flex flex-col items-center space-y-4">
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
          <Carousel
            slideInterval={5000}
            pauseOnHover
            leftControl={<ChevronsLeft />}
            rightControl={<ChevronsRight />}
          >
            {Programs.data.map((program) => (
              <CardProgram key={"PR" + program.programsId} program={program} />
            ))}
          </Carousel>
        </article>
      )}
    </>
  );
};

export default CurrentPrograms;

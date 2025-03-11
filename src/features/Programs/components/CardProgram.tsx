import { Card } from "flowbite-react";
import { Program } from "../types/Programs";

const CardProgram = ({ program }: { program: Program }) => {
  return (
    <Card className="p0 lg:w-full h-full md:flex md:flex-col max-sm:h-auto md:w-full md:h-full">
      <figure className="flex md:h-full flex-col md:justify-between max-sm:w-full max-sm:h-full">
        <img
          className="w-full md:h-52  h-60 object-cover max-sm:w-ful max-sm:h-64"
          src={program.image}
          alt={program.programName}
        />
        <figcaption
          className=" text-base break-words max-w-96 px-4 sm:h-auto
      max-sm:text-sm lg:h-80 md:h-full flex flex-col justify-between p-4"
        >
         <div className="flex flex-col justify-between flex-grow">
         <p className="text-center sm:m-4">
            <strong className="lg:text-xl">{program.programName}</strong>
            <br />
            <span className=" text-base lg:text-lg line-clamp-6">
              Descripción del programa: {program.description}
            </span>
          </p>
         </div>
        </figcaption>
      </figure>
    </Card>
  );
};
export default CardProgram;

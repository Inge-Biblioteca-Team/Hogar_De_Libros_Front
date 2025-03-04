import { Card } from "flowbite-react";
import { Program } from "../types/Programs";

const CardProgram = ({ program }: { program: Program }) => {
  return (
    <Card className="p0 lg:w-full max-sm:h-auto">
      <figure className="flex flex-col max-sm:w-full max-sm:h-full">
        <img
          className="w-full h-60 object-cover max-sm:w-ful max-sm:h-64"
          src={program.image}
          alt={program.programName}
        />
        <figcaption
          className=" text-base break-words max-w-96 px-4 sm:h-auto
      max-sm:text-sm lg:h-80 flex flex-col justify-between p-4"
        >
          <p className="text-center sm:m-4">
            <strong className="">{program.programName}</strong>
            <br />
            <span className=" text-base line-clamp-6">
              Descripción del programa: {program.description}
            </span>
          </p>
        </figcaption>
      </figure>
    </Card>
  );
};
export default CardProgram;

import { Button, Card } from "flowbite-react";
import { Program } from "../types/Programs";

const CardProgram = ({ program }: { program: Program }) => {
  return (
    <Card className="p0">
      <figure className=" ">
        <img
          className="w-full h-60 object-cover"
          src={program.image}
          alt={program.programName}
        />
        <figcaption
          className=" text-base break-words max-w-96 px-4 
      max-sm:text-sm h-80 flex flex-col justify-between p-4"
        >
          <p>
            <strong>{program.programName}</strong>
            <br />
            <span className=" text-base">
              Descripción del programa: {program.description}
            </span>
          </p>
          <div>
          <Button color={"blue"}>Mas información</Button>
          </div>
        </figcaption>
      </figure>
    </Card>
  );
};
export default CardProgram;

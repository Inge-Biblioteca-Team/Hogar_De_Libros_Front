import { Table } from "flowbite-react";
import { Program } from "../types/Programs";
import BTNProgramsAct from "./BTNProgramsAct";
import { useState } from "react";
import RelatedActivitiesList from "./Modals/RelatedCourses";

const ProgramsRows = ({ program }: { program: Program }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  return (
    <>
      <Table.Row className="h-20">
        <Table.Cell className="xl:table-cell 2xl:table-cell md:hidden max-sm:hidden">{program.programsId} </Table.Cell>
        <Table.Cell>{program.programName} </Table.Cell>
        <Table.Cell className="max-sm:hidden ">
          <div>
            <span className="line-clamp-1">{program.description}</span>
          </div>
        </Table.Cell>
        <Table.Cell className="max-sm:hidden">
          <span
            className=" hover:text-Body cursor-pointer pon"
            onClick={() => (setOpen(true),(setId(program.programsId)))}
          >
            Ver Relacionados
          </span>
        </Table.Cell>
        <Table.Cell>{program.status ? "Activo" : "Inactivo"} </Table.Cell>
        <Table.Cell>
          {" "}
          <BTNProgramsAct program={program} />{" "}
        </Table.Cell>
      </Table.Row>
      {program && (
        <RelatedActivitiesList open={open} setOpen={setOpen} id={id}
        programName={program.programName} />
      )}
    </>
  );
};

export default ProgramsRows;

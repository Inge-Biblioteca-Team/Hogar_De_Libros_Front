import { Table } from "flowbite-react";
import { Program } from "../types/Programs";
import BTNProgramsAct from "./BTNProgramsAct";

const ProgramsRows = ({ program }: { program: Program }) => {
  return (
    <>
      <Table.Row className="h-20">
        <Table.Cell>{program.programsId} </Table.Cell>
        <Table.Cell>{program.programName} </Table.Cell>
        <Table.Cell>
          <div>
            <span className=" line-clamp-1">{program.description}</span>
          </div>
        </Table.Cell>
        <Table.Cell>Click Aqui</Table.Cell>
        <Table.Cell>{program.status ? "Activo" : "Inactivo"} </Table.Cell>
        <Table.Cell>
          {" "}
          <BTNProgramsAct program={program} />{" "}
        </Table.Cell>
      </Table.Row>
    </>
  );
};

export default ProgramsRows;

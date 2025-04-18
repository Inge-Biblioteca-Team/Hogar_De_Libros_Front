import { Table } from "flowbite-react";
import { Program } from "../types/Programs";
import { useState } from "react";
import RelatedActivitiesList from "./Modals/RelatedCourses";
import MobilePopOverOptions from "../../../components/MobileComponents/MobilePopOverOptions";
import BTNAccions from "../../../components/DesktopComponents/BTNAccions";
import MDChangeProgramStatus from "./Modals/MDChangeProgramStatus";
import MDEditProgram from "./Modals/MDEditProgram";
import MDSeeProgram from "./Modals/MDSeeProgram";

const ProgramsRows = ({ program }: { program: Program }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [openV, setOpenV] = useState<boolean>(false);
  const [openD, setOpenD] = useState<boolean>(false);
  const [openE, setOpenE] = useState<boolean>(false);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const handleRowClick = () => {
    setPopoverVisible(true);
  };

  const [id, setId] = useState<string>("");
  return (
    <>
      <Table.Row className="dark:border-zinc-700  dark:bg-[#2d2d2d]" onClick={handleRowClick}>
        <Table.Cell className=" max-md:hidden">
          {program.programsId}{" "}
        </Table.Cell>
        <Table.Cell>{program.programName} </Table.Cell>
        <Table.Cell className=" ">
          <div>
            <MobilePopOverOptions
              openTrigger={popoverVisible}
              setopenTrigger={setPopoverVisible}
              setOpen1={setOpenV}
              setOpen2={setOpenE}
              setOpen3={setOpenD}
              setOpen4={setOpen}
              text2="Relacionados"
              text={program.description}
              status={program.status}
            />
          </div>
        </Table.Cell>
        <Table.Cell className=" max-lg:hidden">
          <span
            className=" hover:text-Body cursor-pointer pon"
            onClick={() => (setOpen(true), setId(program.programsId))}
          >
            Ver Relacionados
          </span>
        </Table.Cell>
        <Table.Cell>{program.status ? "Activo" : "Inactivo"} </Table.Cell>
        <Table.Cell className=" max-md:hidden">
          <BTNAccions
            setOpen1={setOpenV}
            setOpen2={setOpenE}
            setOpen3={setOpenD}
            status={program.status}
          />
        </Table.Cell>
      </Table.Row>
      {program && (
        <RelatedActivitiesList
          open={open}
          setOpen={setOpen}
          id={id}
          programName={program.programName}
        />
      )}
      <MDChangeProgramStatus
        open={openD}
        setOpen={setOpenD}
        program={program}
      />
      <MDEditProgram open={openE} setOpen={setOpenE} program={program} />
      <MDSeeProgram open={openV} setOpen={setOpenV} program={program} />
    </>
  );
};

export default ProgramsRows;

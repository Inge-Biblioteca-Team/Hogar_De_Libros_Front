import { PiEyeLight, PiPencilDuotone, PiTrash } from "react-icons/pi";
import { Program } from "../types/Programs";
import { useState } from "react";
import MDChangeProgramStatus from "./Modals/MDChangeProgramStatus";
import MDEditProgram from "./Modals/MDEditProgram";
import MDSeeProgram from "./Modals/MDSeeProgram";

const BTNProgramsAct = ({ program }: { program: Program }) => {
  const [openS, setOpenS] = useState<boolean>(false);
  const [openE, setOpenE] = useState<boolean>(false);
  const [openD, setOpenD] = useState<boolean>(false);

  return (
    <div className=" flex gap-5 items-center justify-center">
      <button
        title="ver información"
        type="button"
        onClick={() => setOpenS(true)}
      >
        <PiEyeLight size={24} />
      </button>
      <button
        title="Editar información"
        type="button"
        className={`${program.status ? "" : "cursor-not-allowed"}`}
        onClick={() => setOpenE(true)}
        disabled={!program.status}
      >
        <PiPencilDuotone size={24} />
      </button>

      <button
        title="Deshabilitar Activo"
        type="button"
        className={`${program.status ? "" : "cursor-not-allowed"}`}
        onClick={() => setOpenD(true)}
        disabled={!program.status}
      >
        <PiTrash size={24} />
      </button>
      <MDChangeProgramStatus open={openD} setOpen={setOpenD} program={program}/>
      <MDEditProgram open={openE} setOpen={setOpenE} program={program}/>
      <MDSeeProgram open={openS} setOpen={setOpenS} program={program} />
    </div>
  );
};

export default BTNProgramsAct;

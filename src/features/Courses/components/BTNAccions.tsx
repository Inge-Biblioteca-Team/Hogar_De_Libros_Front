import { PiEyeLight, PiPencilDuotone, PiTrash } from "react-icons/pi";
import { TbTruckReturn } from "react-icons/tb";
import CourseInfo from "./Crud/CourseInfo";
import { Courses } from "../types/Courses";
import { useState } from "react";
import EditCourse from "./Crud/EditCourse";
import DisableCourse from "./Crud/DisableCourse";
const BTNAccions = ({ Course }: { Course: Courses }) => {
  const [openS, setOpenS] = useState<boolean>(false);
  const [openE, setOpenE] = useState<boolean>(false);
  const [openD, setOpenD] = useState<boolean>(false);
  return (
    <>
      <div className=" w-full flex gap-3 items-center justify-center text-3xl">
        <button
          type="button"
          title="Ver Información del Curso"
          className="hover:text-Body"
          onClick={() => setOpenS(true)}
        >
          <PiEyeLight size={24} />
        </button>
        <button
          type="button"
          title="Editar Información del Curso"
          className={`${Course.Status ? "" : "cursor-not-allowed"} hover:text-yellow-400`}
          onClick={() => setOpenE(true)}
          disabled={!Course.Status}
        >
          <PiPencilDuotone size={24} />
        </button>
        <button
          type="button"
          title="Desabilitar Curso"
          className={`${Course.Status ? "" : "cursor-not-allowed"} hover:text-red-800`}
          disabled={!Course.Status}
          onClick={() => setOpenD(true)}
        >
          <PiTrash size={24} />
        </button>
        <button type="button" title="Rehabilitar Curso" className="hidden">
          <TbTruckReturn />
        </button>
        <CourseInfo course={Course} open={openS} setOpen={setOpenS} />
        <EditCourse course={Course} open={openE} setOpen={setOpenE} />
        <DisableCourse dow={openD} setDow={setOpenD} Course={Course} />
      </div>
    </>
  );
};

export default BTNAccions;

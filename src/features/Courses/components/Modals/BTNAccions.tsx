import { PiEyeLight, PiPencilDuotone, PiTrash } from "react-icons/pi";
import { TbTruckReturn } from "react-icons/tb";
import CourseInfo from "../Crud/CourseInfo";
import { Courses } from "../../types/Courses";
import { useState } from "react";
const BTNAccions = ({
  Course
}: {
  Course:Courses
}) => {

const [openS, setOpenS]= useState<boolean>(false)
const [openE, setOpenE]= useState<boolean>(false)
  const [openD, setOpenD]= useState<boolean>(false)
  return (
    <>
      <div className=" w-full flex gap-3 items-center justify-center text-3xl">
        <button
          type="button"
          
          title="Ver Información del Curso"
          onClick={() => setOpenS(true)}
        >
          <PiEyeLight size={24} />
        </button>
        <button
          type="button"
          title="Editar Información del Curso"
          onClick={() => setOpenE(true)}
        >
          <PiPencilDuotone size={24} />
        </button>
        <button
          type="button"
          title="Desabilitar Curso"
          className=""
          onClick={() => setOpenD(true)}
        >
          <PiTrash size={24} />
        </button>
        <button type="button" title="Rehabilitar Curso" className="hidden">
          <TbTruckReturn />
        </button>
        <CourseInfo course={Course} open={openS} setOpen={setOpenS} />
        
      </div>
    </>
  );
};

export default BTNAccions;

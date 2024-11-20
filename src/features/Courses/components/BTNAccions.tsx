import { TbTruckReturn } from "react-icons/tb";
import CourseInfo from "./Crud/CourseInfo";
import { Courses } from "../types/Courses";
import EditCourse from "./Crud/EditCourse";
import DisableCourse from "./Crud/DisableCourse";
import AccionsBTN from "../../../components/BTNS/AccionsBTN";
import { useState } from "react";
const BTNAccions = ({ Course }: { Course: Courses }) => {
  const [openS, setOpenS] = useState<boolean>(false);
  const [openE, setOpenE] = useState<boolean>(false);
  const [openD, setOpenD] = useState<boolean>(false);

  return (
    <>
      <div className=" w-full flex max-sm:gap-1 gap-3 items-center justify-center text-3xl">
        {Course && (
          <AccionsBTN
            Status={Course.Status}
            setOpenS={setOpenS}
            setOpenE={setOpenE}
            setOpenD={setOpenD}
          />
        )}
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

import { Button, Modal, Popover } from "flowbite-react";
import { Courses } from "../types/Courses";
import { Dispatch, SetStateAction } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import EnrollBody from "./EnrollBody";

const EnrolList = ({
  Course,
  open,
  setOpen,
}: {
  Course: Courses;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal show={open} onClose={() => setOpen(false)} size={"7xl"} popup>
      <Modal.Body className="dark:bg-[#2d2d2d] p-1">
        <div className=" grid grid-cols-3">
          <div></div>
          <div className="w-full text-center font-bold text-2xl mt-2 mb-3">
            Matricula del curso {Course.courseName}{" "}
          </div>
          <div className=" flex justify-end items-center">
            <Popover
              trigger="hover"
              content={
                <div className=" flex flex-col items-center gap-4 m-3">
                  <span className="hover:text-Body cursor-pointer">
                    Imprimir
                  </span>
                  <span
                    className="hover:text-red-700 cursor-pointer"
                    onClick={() => setOpen(false)}
                  >
                    Cerrar
                  </span>
                </div>
              }
            >
              <Button color={""}>
                <SlOptionsVertical className=" text-3xl" />
              </Button>
            </Popover>
          </div>
        </div>
        <EnrollBody courseId={Course.courseId} key={Course.courseId} />
      </Modal.Body>
    </Modal>
  );
};

export default EnrolList;

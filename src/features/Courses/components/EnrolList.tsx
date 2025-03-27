import { Button, Modal, Popover } from "flowbite-react";
import { Courses } from "../types/Courses";
import { Dispatch, SetStateAction } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import EnrollBody from "./EnrollBody";
import UseSaveEnrollList from "../Hooks/UseSaveEnrollList";

const EnrolList = ({
  Course,
  open,
  setOpen,
}: {
  Course: Courses;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { mutate: generate, isLoading } = UseSaveEnrollList();

  const saveList = () => {
    generate({ courseID: Course.courseId });
  };

  return (
    <Modal
      dismissible
      show={open}
      onClose={() => setOpen(false)}
      size={"9xl"}
      popup
    >
      <Modal.Body className="dark:bg-[#2d2d2d] p-0">
        <div className=" flex items-center justify-between p-2">
          <div className=" w-full font-bold text-2xl">
            Matricula del curso {Course.courseName}{" "}
          </div>
          <Popover
            trigger="click"
            content={
              <div className=" flex flex-col items-center gap-4 m-3">
                <span className="hover:text-Body cursor-pointer">
                  <Button
                    title="Guardar lista de matricula"
                    color="alternative"
                    disabled={isLoading}
                    onClick={saveList}
                  >
                    Guardar
                  </Button>
                </span>
                <span
                  className="hover:text-red-700 cursor-pointer"
                  onClick={() => setOpen(false)}
                  title="Cerrar"
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
        <EnrollBody courseId={Course.courseId} key={Course.courseId} />
      </Modal.Body>
    </Modal>
  );
};

export default EnrolList;

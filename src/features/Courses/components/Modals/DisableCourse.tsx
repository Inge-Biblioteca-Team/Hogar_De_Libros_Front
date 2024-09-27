import { Dispatch, SetStateAction } from "react";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Courses } from "../../types/Courses";
import UseDownCourse from "../../Hooks/UseDownCourse";

const DisableCourse = ({
  dow,
  setDow,
  Course,
}: {
  dow: boolean;
  setDow: Dispatch<SetStateAction<boolean>>;
  Course: Courses;
}) => {
  const { mutate: Disable } = UseDownCourse();

  const handleDisbale = () => {
    Disable(Course.courseId);
    setDow(false);
  };

  return (
    <Modal show={dow} onClose={() => setDow(false)}>
      <Modal.Body>
        <div className="text-center">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            ¿Estás seguro de que deseas dar de baja al Curso?
          </h3>
          <p className="mb-6 text-md font-bold text-gray-600 dark:text-gray-300">
            {Course.courseType}
          </p>
          <div className="flex justify-center gap-4">
            <Button color="failure" onClick={() => setDow(false)}>
              Cancelar
            </Button>
            <Button color="blue" onClick={() => handleDisbale()}>
              Confirmar
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DisableCourse;
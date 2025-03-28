import { Dispatch, SetStateAction } from "react";
import { Button, Modal, Spinner } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Courses } from "../../types/Courses";
import UseCancelCourse from "../../Hooks/UseCancelCourse";

const DisableCourse = ({
  dow,
  setDow,
  Course,
}: {
  dow: boolean;
  setDow: Dispatch<SetStateAction<boolean>>;
  Course: Courses;
}) => {

  const { mutate: PatchStatus, isLoading } = UseCancelCourse();
  const handleDisbale = () => {
    PatchStatus(Course.courseId, {
      onSuccess: () => {
        setDow(false);
      },
    });
  };

  return (
    <Modal dismissible show={dow} onClose={() => setDow(false)} size={"lg"}>
      <Modal.Body className="dark:bg-[#2d2d2d]">
        <div className="text-center mt-4">
          <HiOutlineExclamationCircle className="mx-auto h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="dark:text-white mb-5 text-lg font-normal text-gray-500">
            ¿Estás seguro de que deseas deshabilitar el curso?
          </h3>
          <p className="mb-6 text-md font-bold text-gray-600 dark:text-gray-300">
            {Course.courseName}
          </p>
          <div className="flex justify-center gap-4">
            <Button color="red" onClick={() => setDow(false)} disabled={isLoading}>
              Cancelar
            </Button>
            <Button color="blue" onClick={() => handleDisbale()} disabled={isLoading}>
            {isLoading ? (
          <><Spinner aria-label="Spinner button example" size="sm" /> <p className="pl-3">Cargando...</p></>
        ) : (
          "Confirmar"
        )}
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DisableCourse;
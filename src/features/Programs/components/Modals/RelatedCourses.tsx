import { Button, Modal } from "flowbite-react";
import { useQuery } from "react-query";
import { GetProgramsCourses } from "../../services/SvPrograms";
import { Course } from "../../types/Programs";
import CourseCard from "../CourseCard";
import { Dispatch, SetStateAction } from "react";

interface data {
  message: string;
  error: string;
  statusCode: number;
}
interface response {
  data: data;
}
interface QueryError {
  response: response;
  message: string;
}

const RelatedCourses = ({
  open,
  setOpen,
  id,
  programName,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  id: string;
  programName: string;
}) => {
  const { data: courses, error } = useQuery<Course[], QueryError>(
    ["ProgramCourses", id],
    () => GetProgramsCourses(id),
    {
      staleTime: 6000,
      enabled: !!id,
      retry: 2,
    }
  );

  const errorMessage =
    error?.response?.data?.message || error?.message || "Error desconocido";

  return (
    <Modal show={open} onClose={() => setOpen(false)}>
      <Modal.Header>Actividades relacionadas al programa {programName}</Modal.Header>
      <Modal.Body className=" flex flex-col gap-4">
        {error && <span className="text-red-500">{errorMessage}</span>}
        {courses?.map((course) => (
          <CourseCard key={course.courseId} course={course} />
        ))}
      </Modal.Body>
      <Modal.Footer className=" flex items-center justify-center">
        <Button color={"blue"} onClick={() => setOpen(false)}>
          Regresar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RelatedCourses;

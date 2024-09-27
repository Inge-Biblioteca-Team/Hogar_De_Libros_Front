import { Button, Modal } from "flowbite-react";
import { format } from "@formkit/tempo";
import UseCancelEnrollment from "../../Hooks/UseCancelEnrollment";
import { Courses } from "../../types/Courses";

const CancelEnrollment = ({
  course,
  open,
  setopen,
}: {
  course: Courses;
  open: boolean;
  setopen: (open: boolean) => void;
}) => {
  const courseDate = course.Date;
  const Cedula = sessionStorage.getItem("cedula");
  const fullDate = format({
    date: courseDate,
    format: "DD MMMM YYYY",
    tz: "America/Costa_Rica",
  });

  const { mutate } = UseCancelEnrollment();

  const handleCancel = () => {
    if (Cedula) {
        mutate(
          { courseId: course.Id, userCedula: Cedula },
          {
            onSuccess: () => {
              setopen(false);
            },
          }
        );
      }
  };

  return (
    <Modal show={open} onClose={() => setopen(false)}>
      <Modal.Header>Cancelar Matricula</Modal.Header>
      <Modal.Body>
        <span>
          {" "}
          Esta seguro que desea cancelar la matricula del curso{" "}
          <strong>{course.courseType}</strong> del dia <br />
          <strong>{fullDate}. </strong> <br />
        </span>
        <span>
          {" "}
          En caso de aceptar y cancelar, no podra revertir esta accion.
        </span>
      </Modal.Body>
      <Modal.Footer className=" flex items-center justify-center">
        <Button color={"failure"} onClick={() => setopen(false)}>
          Regresar
        </Button>
        <Button color={"blue"} onClick={handleCancel}>
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CancelEnrollment;

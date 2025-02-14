import { Button, Modal, Spinner } from "flowbite-react";
import { format } from "@formkit/tempo";
import UseCancelEnrollment from "../../Hooks/UseCancelEnrollment";
import { NextCourses } from "../../types/Courses";
import { useContext } from "react";
import UserContext from "../../../../Context/UserContext/UserContext";

const CancelEnrollment = ({
  course,
  open,
  setopen,
}: {
  course: NextCourses;
  open: boolean;
  setopen: (open: boolean) => void;
}) => {
  const { currentUser } = useContext(UserContext);

  const courseDate = course.Date;
  const fullDate = format({
    date: courseDate,
    format: "DD MMMM YYYY",
    tz: "America/Costa_Rica",
  });

  const { mutate, isLoading } = UseCancelEnrollment();

  const handleCancel = () => {
    mutate(
      { courseID: course.Id, userCedula: currentUser?.cedula || "" },
      {
        onSuccess: () => {},
      }
    );
  };

  return (
    <Modal show={open} onClose={() => setopen(false)}>
      <Modal.Header>Cancelar Matricula</Modal.Header>
      <Modal.Body>
        <span>
          {" "}
          Está seguro que desea cancelar la matricula del curso{" "}
          <strong>{course.courseType}</strong> del día <br />
          <strong>{fullDate}. </strong> <br />
        </span>
        <span>
          {" "}
          En caso de aceptar y cancelar, no podra revertir está acción.
        </span>
      </Modal.Body>
      <Modal.Footer className=" flex items-center justify-center">
        <Button color={"red"} onClick={() => setopen(false)} disabled={isLoading}>
          Volver
        </Button>
        <Button color={"blue"} onClick={handleCancel} disabled={isLoading}>
        {isLoading ? (
          <><Spinner aria-label="Spinner button example" size="sm" /> <p className="pl-3">Cargando...</p></>
        ) : (
          "Confirmar"
        )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CancelEnrollment;

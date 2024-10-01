import { Modal, Button } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { Courses } from "../../types/Courses";
import { format } from "@formkit/tempo";

const CourseInfo = ({
  open,
  setOpen,
  course,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  course: Courses;
}) => {
  const Time = course.courseTime;
  const courseDate = course.date;
  const dateTimeString = `${courseDate}T${Time}`;
  const dateTime = new Date(dateTimeString);

  const date = format({
    date: courseDate,
    format: "DD-MM-YYYY",
    tz: "America/Costa_Rica",
  });
  const endDate = format({
    date: course.endDate,
    format: "DD-MM-YYYY",
    tz: "America/Costa_Rica",
  });
  const courseTime = format({
    date: dateTime,
    format: "h:mm A",
    tz: "America/Costa_Rica",
  });

  return (
    <Modal show={open} onClose={() => setOpen(false)}>
      <Modal.Header>Información del Curso</Modal.Header>
      <Modal.Body className=" flex flex-col gap-4">
        <div>
          <figure className="w-full flex items-center justify-center">
            <img
              className="w-full h-64 rounded-lg shadow-mdr"
              src={course.image || "src/Assets/course.jpg"}
              alt={course.courseType}
            />
          </figure>
        </div>
        <div className="flex justify-between h-fit">
          <div className=" flex flex-col gap-3">
            <span>
              <strong className="font-bold">Nombre:</strong>{" "}
              <span>{course.courseName}</span>
            </span>
            <span>
              <strong className="font-bold">Tipo de curso:</strong>{" "}
              <span>{course.courseType}</span>
            </span>
            <span>
              <strong className="font-bold">Encargado:</strong>{" "}
              <span>{course.instructor}</span>
            </span>
            <span>
              <strong className="font-bold">Duración:</strong>{" "}
              <span>{course.duration} Meses</span>
            </span>
            <span>
              <strong className="font-bold">Ubicación:</strong>{" "}
              <span>{course.location}</span>
            </span>
            <span>
              <strong className="font-bold">Fecha de inicio:</strong>{" "}
              <span>{date}</span>
            </span>

            <br />
          </div>
          <div className=" flex-col flex gap-3">
            <span>
              <strong className="font-bold">Estado de ejecución:</strong>{" "}
              <span>{course.currentStatus}</span>
            </span>
            <span>
              <strong className="font-bold">Rango de Edad:</strong>{" "}
              <span>{course.targetAge}</span>
            </span>
            <span>
              <strong className="font-bold">Cupos Disponibles:</strong>{" "}
              <span>{course.availableQuota}</span>
            </span>
            <span>
              <strong className="font-bold">Matricula maxima:</strong>{" "}
              <span>{course.capacity}</span>
            </span>
            <span>
              <strong className="font-bold">Hora:</strong>{" "}
              <span>{courseTime}</span>
            </span>
            <span>
              <strong className="font-bold">Fecha de fin:</strong>{" "}
              <span>{endDate}</span>
            </span>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="flex items-center justify-center">
        <Button color={"blue"} onClick={() => setOpen(false)}>
          Regresar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CourseInfo;

import { Modal, Button } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { Courses } from "../../types/Courses";

const CourseInfo = ({
  open,
  setOpen,
  course,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  course: Courses;
}) => {
  return (
    <Modal show={open} onClose={() => setOpen(false)}>
      <Modal.Header>Información del Curso</Modal.Header>
      <Modal.Body className="grid grid-cols-3 gap-5">
        <div>
          <figure className="w-full flex items-center justify-center">
            <img
              className="w-full h-64 rounded-lg shadow-md object-cover"
              src={course.image || 'src/Assets/course.jpg'}
              alt={course.courseType}
            />
          </figure>
        </div>
        <div className="col-span-2 flex flex-col justify-center space-y-4">
          <div>
            <strong className="font-bold">Curso:</strong>{" "}
            <span>{course.courseType}</span>
          </div>
          <div>
            <strong className="font-bold">Encargado:</strong>{" "}
            <span>{course.instructor}</span>
          </div>
          <div>
            <strong className="font-bold">Fecha Inicial:</strong>{" "}
            <span>{new Date(course.date).toLocaleDateString()}</span>
          </div>
          <div>
            <strong className="font-bold">Ubicación:</strong>{" "}
            <span>{course.location}</span>
          </div>
          <div>
            <strong className="font-bold">Hora:</strong>{" "}
            <span>{course.courseTime}</span>
          </div>
          <div>
            <strong className="font-bold">Cupos Disponibles:</strong>{" "}
            <span>{course.capacity}</span>
          </div>
          <div>
            <strong className="font-bold">Rango de Edad:</strong>{" "}
            <span>{course.targetAge}</span>
          </div>
          <div>
            <strong className="font-bold">Fecha Final:</strong>{" "}
            <span>{new Date(course.endDate).toLocaleDateString()}</span>
          </div>
          <div>
            <strong className="font-bold">Estado:</strong>{" "}
            <span>{course.Status ? "Activo" : "Inactivo"}</span>
          </div>
          <div>
            <strong className="font-bold">Duración:</strong>{" "}
            <span>{course.duration} Meses</span>
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


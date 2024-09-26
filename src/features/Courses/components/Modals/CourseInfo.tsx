// import { Button, Modal } from "flowbite-react";
// import { Dispatch, SetStateAction } from "react";
// import { Courses } from "../../types/Courses";
// const CourseInfo = ({
//   see,
//   setSee,
//   Course,
// }: {
//   see: boolean;
//   setSee: Dispatch<SetStateAction<boolean>>;
//   Course: Courses;
// }) => {
//   return (
//     <Modal show={see} onClose={() => setSee(false)}>
//       <Modal.Header>
//         <span>Curso: {Course.courseType} </span>
//       </Modal.Header>
//       <Modal.Body className="flex flex-col gap-2 ml-3">
//         <figure className=" w.full flex items-center justify-center">
//           <img
//             src={Course.image}
//             alt=""
//             className=" rounded-full h-64 shadow-2xl w-64"
//           />
//         </figure>
//         <span className=" flex-col flex gap-2 text-center">
//           <strong>Información Del Curso</strong>
//           <span>Nombre: {Course.courseType}</span>
//           <span>Encargado: {Course.instructor}</span>
//           <span>Fecha: {Course.date.toString()}</span>
//           <span>Hora: {Course.courseTime}</span>
//           {Course.location == "" ? (
//             ""
//           ) : (
//             <span>Ubicación: {Course.location}</span>
//           )}
//           <span>Cupos Disponibles: {Course.capacity}</span>
//           <span>Duración del Curso: {Course.duration}</span>
//           <span>Rango de Edad: {Course.targetAge}</span>
//           <span>Fecha Final del Curso: {Course.endDate.toString()}</span>
//           <span>Estado: {Course.Status ? "Activo" : "Inactivo"}{" "}</span>
//         </span>
//       </Modal.Body>
//       <Modal.Footer className=" flex items-center justify-center">
//         <Button color={"blue"} onClick={() => setSee(false)}>
//           Cerrar
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default CourseInfo;


import { useLocation, useNavigate } from 'react-router-dom';
import { Card } from "flowbite-react";
import { Courses } from "../../types/Courses";
import { Navbar } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

const CourseInfo = () => {
  const location = useLocation();
  const course: Courses = location.state.course;

  const navi = useNavigate();
  const Goto = () => {
    navi(`/`);
  };

  return (
    <>
    <Navbar className="sticky top-0 z-50 text-white w-full bg-Body py-4">
      <Navbar.Brand className="w-full flex items-center justify-between p-4 max-sm:w-4/5 max-sm:p-0">
        <div className="flex items-center flex-grow justify-center space-x-2">
          <FontAwesomeIcon
            onClick={Goto}
            icon={faBookOpen}
            className="text-white h-6 w-6 cursor-pointer"
          />
          <span className="text-white text-3xl font-semibold break-words max-sm:text-xl">
            Biblioteca Pública Municipal de Nicoya
          </span>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle className="bg-white" />
    </Navbar>
    <div className="flex justify-center items-center p-4">
  <Card className="w-full max-w-5xl bg-white shadow-lg rounded-lg">
    <div className="flex">
      <figure className="w-1/3 flex items-center justify-center p-4">
        <img
          src={course.image}
          alt={course.courseType}
          className="rounded-lg h-64 shadow-md w-64 object-cover"
        />
      </figure>
      <div className="w-2/3 p-6 grid grid-cols-2 gap-4">
        <h2 className="col-span-2 text-3xl font-bold text-gray-800 mb-4">
          Curso: {course.courseType}
        </h2>
        <p className="text-gray-600">
          <strong>Encargado:</strong> {course.instructor}
        </p>
        <p className="text-gray-600">
          <strong>Fecha:</strong> {new Date(course.date).toLocaleDateString()}
        </p>
        <p className="text-gray-600">
          <strong>Hora:</strong> {course.courseTime}
        </p>
        {course.location && (
          <p className="text-gray-600">
            <strong>Ubicación:</strong> {course.location}
          </p>
        )}
        <p className="text-gray-600">
          <strong>Cupos Disponibles:</strong> {course.capacity}
        </p>
        <p className="text-gray-600">
          <strong>Duración:</strong> {course.duration}
        </p>
        <p className="text-gray-600">
          <strong>Rango de Edad:</strong> {course.targetAge}
        </p>
        <p className="text-gray-600">
          <strong>Fecha Final:</strong> {new Date(course.endDate).toLocaleDateString()}
        </p>
        <p className="text-gray-600">
          <strong>Estado:</strong> {course.Status ? "Activo" : "Inactivo"}
        </p>
      </div>
    </div>
    <div className="flex justify-center mt-6">
      <a
        href="/HogarDeLibros/Gestion/Cursos"
        className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Regresar
      </a> 
    </div>
  </Card>
</div>

    </>
  );
};

export default CourseInfo;
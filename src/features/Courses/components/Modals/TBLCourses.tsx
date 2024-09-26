import { Table } from "flowbite-react";
import { useState } from "react";
import { Courses } from "../../types/Courses";
import BTNAccions from "./BTNAccions";
// import CourseInfo from "./CourseInfo";
import DisableCourse from "./DisableCourse";
// import EditCourse from "./EditCourse";
import { useNavigate } from 'react-router-dom';


const TBLCourses = ({ course }: { course: Courses }) => {
  // const [see, setSee] = useState<boolean>(false);
  const [down, setDow] = useState<boolean>(false);
  // const [edit, setEdit] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleViewCourse = () => {
    navigate('/vista-curso', { state: { course } });
  };

  const handleEditCourse = () => {
    navigate('/editar-curso', { state: { course } });
  };

  return (
    <>
      <Table.Row className=" h-20" key={course.courseId}>
        <Table.Cell className="w-56">{course.courseType}</Table.Cell>
        <Table.Cell className="w-56">{course.instructor} </Table.Cell>
        <Table.Cell className="w-56">
          <div>
            {/* <a href={course.date.toString()}>Fecha</a> / <a href={course.courseTime}>Hora</a> */}
            <span>Fecha: {new Date(course.date).toLocaleDateString()}</span> / 
            <span>Hora: {course.courseTime}</span>
          </div>
        </Table.Cell>
        <Table.Cell className="w-56">
          {course.location}
        </Table.Cell>
        <Table.Cell className="w-56">
          {course.capacity}
        </Table.Cell>
        <Table.Cell className="w-56">
          {course.duration}
        </Table.Cell>
        <Table.Cell className="w-56">
          {course.Status ? "Activo" : "Inactivo"}{" "}
        </Table.Cell>
        <Table.Cell className="w-52">
          <BTNAccions setSee={handleViewCourse} setDow={setDow} setEdit={handleEditCourse} />
        </Table.Cell>
      </Table.Row>
      {/* <CourseInfo see={see} setSee={setSee} Course={course} /> */}
      {/* <EditCourse edit={edit} setEdit={setEdit} Course={course} /> */}
      <DisableCourse dow={down} setDow={setDow} Course={course} />
    </>
  )
}
export default TBLCourses;
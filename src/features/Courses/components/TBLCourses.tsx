import { Table } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Courses } from "../types/Courses";
import BTNAccions from "./Modals/BTNAccions";
import DisableCourse from "./Modals/DisableCourse";


const TBLCourses = ({ course }: { course: Courses }) => {
  const [down, setDow] = useState<boolean>(false);
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
            <span>{new Date(course.date).toLocaleDateString()}</span>... 
            <span>{course.courseTime}</span>
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
      <DisableCourse dow={down} setDow={setDow} Course={course} />
    </>
  )
}
export default TBLCourses;
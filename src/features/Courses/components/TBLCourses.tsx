import { Table } from "flowbite-react";
import { Courses } from "../types/Courses";
import BTNAccions from "./Modals/BTNAccions";

const TBLCourses = ({ course }: { course: Courses }) => {
  return (
    <>
      <Table.Row className=" h-20" key={course.courseId}>
        <Table.Cell>{course.courseType}</Table.Cell>
        <Table.Cell>{course.instructor} </Table.Cell>
        <Table.Cell>
            {new Date(course.date).toLocaleDateString()}
        </Table.Cell>
        <Table.Cell>
            {course.courseTime}
        </Table.Cell>
        <Table.Cell>
          {course.capacity}
        </Table.Cell>
        <Table.Cell>
          {course.Status ? "Activo" : "Inactivo"}{" "}
        </Table.Cell>
        <Table.Cell>
          {" "}
          <BTNAccions Course={course} />  {" "}
        </Table.Cell>
      </Table.Row>
    </>
  )
}
export default TBLCourses;
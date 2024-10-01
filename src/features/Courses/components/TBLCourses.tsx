import { Table } from "flowbite-react";
import { Courses } from "../types/Courses";
import BTNAccions from "./BTNAccions";
import { format } from "@formkit/tempo";

const TBLCourses = ({ course }: { course: Courses }) => {
  const Time = course.courseTime;
  const courseDate = course.date;
  const dateTimeString = `${courseDate}T${Time}`;
  const dateTime = new Date(dateTimeString);
  const date = format({
    date: courseDate,
    format: "DD/MM/YYYY",
    tz: "America/Costa_Rica",
  });
  const courseTime = format({
    date: dateTime,
    format: "h:mm A",
    tz: "America/Costa_Rica",
  });

  return (
    <>
      <Table.Row className=" h-20">
        <Table.Cell>{course.courseName}</Table.Cell>
        <Table.Cell>{course.instructor} </Table.Cell>
        <Table.Cell>{date}</Table.Cell>
        <Table.Cell>{courseTime}</Table.Cell>
        <Table.Cell>
          {course.availableQuota} / {course.capacity}
        </Table.Cell>
        <Table.Cell>{course.currentStatus}</Table.Cell>
        <Table.Cell>
          {" "}
          <BTNAccions Course={course} />{" "}
        </Table.Cell>
      </Table.Row>
    </>
  );
};
export default TBLCourses;

import { Table } from "flowbite-react";
import { Courses } from "../types/Courses";
import BTNAccions from "./BTNAccions";
import { format } from "@formkit/tempo";
import { useState } from "react";
import EnrolList from "./EnrolList";
import toast from "react-hot-toast";

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

  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    if (course.capacity == course.availableQuota) {
      toast.error("No existe lista de matricula para el curso");
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <Table.Row className=" h-20">
        <Table.Cell>{course.courseName}</Table.Cell>
        <Table.Cell className="max-sm:hidden">{course.instructor} </Table.Cell>
        <Table.Cell className="max-sm:hidden">{date}</Table.Cell>
        <Table.Cell className="max-sm:hidden">{courseTime}</Table.Cell>
        <Table.Cell className="max-sm:hidden">
          {course.availableQuota} / {course.capacity}
        </Table.Cell>
        <Table.Cell
          className="hover:text-Body cursor-pointer max-sm:hidden"
          onClick={handleOpen}
        >
          Lista de Matricula
        </Table.Cell>
        <Table.Cell>{course.currentStatus}</Table.Cell>
        <Table.Cell>
          {" "}
          <BTNAccions Course={course} />{" "}
        </Table.Cell>
      </Table.Row>
      <EnrolList Course={course} open={open} setOpen={setOpen} />
    </>
  );
};
export default TBLCourses;

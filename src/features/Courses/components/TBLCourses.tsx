import { Table } from "flowbite-react";
import { Courses } from "../types/Courses";
import { format } from "@formkit/tempo";
import { useState } from "react";
import EnrolList from "./EnrolList";
import toast from "react-hot-toast";
import MobilePopOverOptions from "../../../components/MobileComponents/MobilePopOverOptions";
import CourseInfo from "./Crud/CourseInfo";
import DisableCourse from "./Crud/DisableCourse";
import EditCourse from "./Crud/EditCourse";
import BTNAccions from "../../../components/DesktopComponents/BTNAccions";

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
  const [openV, setOpenV] = useState<boolean>(false);
  const [openD, setOpenD] = useState<boolean>(false);
  const [openE, setOpenE] = useState<boolean>(false);
  const [popoverVisible, setPopoverVisible] = useState(false);

  const handleOpen = () => {
    if (course.capacity == course.availableQuota) {
      toast.error("No existe lista de matricula para el curso");
    } else {
      setOpen(true);
    }
  };

  const handleRowClick = () => {
    setPopoverVisible(true);
  };
  return (
    <>
      <Table.Row
        className="dark:border-zinc-700  dark:bg-[#2d2d2d]"
        onClick={handleRowClick}
      >
        <Table.Cell>{course.courseName}</Table.Cell>
        <Table.Cell className="max-lg:hidden">{course.instructor} </Table.Cell>
        <Table.Cell>
          <MobilePopOverOptions
            openTrigger={popoverVisible}
            setopenTrigger={setPopoverVisible}
            setOpen1={setOpenV}
            setOpen2={setOpenE}
            setOpen3={setOpenD}
            setOpen4={handleOpen}
            text2="Matricula"
            text={date}
            status={course.Status}
          />
        </Table.Cell>
        <Table.Cell className=" max-lg:hidden">{courseTime}</Table.Cell>
        <Table.Cell className="">
          {course.availableQuota} / {course.capacity}
        </Table.Cell>
        <Table.Cell
          className="hover:text-Body cursor-pointer max-md:hidden"
          onClick={handleOpen}
        >
          Lista de Matrícula
        </Table.Cell>
        <Table.Cell className=" max-md:hidden">
          {course.currentStatus}
        </Table.Cell>
        <Table.Cell className=" max-md:hidden">
          <BTNAccions
            setOpen1={setOpenV}
            setOpen2={setOpenE}
            setOpen3={setOpenD}
            text={date}
            status={course.Status}
          />
        </Table.Cell>
      </Table.Row>
      <CourseInfo course={course} open={openV} setOpen={setOpenV} />
      <EditCourse course={course} open={openE} setOpen={setOpenE} />
      <DisableCourse dow={openD} setDow={setOpenD} Course={course} />
      <EnrolList Course={course} open={open} setOpen={setOpen} />
    </>
  );
};
export default TBLCourses;

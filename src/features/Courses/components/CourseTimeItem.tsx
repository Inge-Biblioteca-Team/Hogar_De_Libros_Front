import { Button, Timeline } from "flowbite-react";
import { NextCourses } from "../types/Courses";

import { CiCalendarDate } from "react-icons/ci";
import { format } from "@formkit/tempo";
import { useState } from "react";
import EnrollmentToCourse from "./Modals/EnrollmentToCourse";
const CourseTimeItem = ({ course }: { course: NextCourses }) => {
  const courseTime = course.CourseTime;
  const courseDate = course.Date;
  const dateTimeString = `${courseDate}T${courseTime}`;
  const dateTime = new Date(dateTimeString);

  const CourseDate = format({
    date: courseDate,
    format: "MMMM YYYY",
    tz: "America/Costa_Rica",
  });
  const time = format({
    date: dateTime,
    format: "h:mm A",
    tz: "America/Costa_Rica",
  });
  const fullDate = format({
    date: courseDate,
    format: "DD MMMM YYYY",
    tz: "America/Costa_Rica",
  });

  const [open, setopen] = useState<boolean>(false);

  return (
    <>
      <Timeline.Item className="">
        <Timeline.Point icon={CiCalendarDate} className="custom" />
        <Timeline.Content>
          <Timeline.Time className=" text-xl max-md:text-lg">
            {CourseDate}
          </Timeline.Time>
          <Timeline.Title className=" line-clamp-1 text-2xl max-md:text-xl">
            {course.courseType}
          </Timeline.Title>
          <Timeline.Body>
            <div className="dark:bg-[#2d2d2d] bg-white dark:text-white rounded-lg p-2 grid grid-cols-3 text-black text-xl max-md:text-sm">
              <img
                src={course.image}
                alt={course.courseName}
                className="w-full h-96 max-md:h-full rounded-l"
              />
              <div className=" flex flex-col ml-6 gap-5 col-span-2 ">
                <span className="font-extrabold">{course.courseName}</span>
                <span className="">Comienzo: {fullDate.toUpperCase()}</span>
                <span className="">Número de sesiones: {course.duration}</span>
                <span className="">
                  {course.location} {time}
                </span>
                <span className="">
                  A Cargo de <br />
                  Instructor: {course.instructor}
                </span>
                <span>
                  Cupos:
                  {course.avaibleQuota}/{course.capacity}{" "}
                </span>
                <Button
                  className="dark:bg-neutral-900 dark:hover:bg-neutral-950"
                  color={"blue"}
                  onClick={() => setopen(true)}
                >
                  Matricular
                </Button>
              </div>
            </div>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <EnrollmentToCourse course={course} open={open} setOpen={setopen} />
    </>
  );
};

export default CourseTimeItem;

import { Button, Card, Timeline } from "flowbite-react";
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
      <Timeline.Item className=" !w-72 min-w-72">
        <Timeline.Point icon={CiCalendarDate} className="custom" />
        <Timeline.Content>
          <Timeline.Time>{CourseDate}</Timeline.Time>
          <Timeline.Title className=" line-clamp-1">
            {course.courseType}
          </Timeline.Title>
          <Timeline.Body>
            <Card className="p0 ">
              <figure className=" w-full rounded-xl">
                <img
                  className=" w-full rounded-t-lg h-28"
                  src={course.image}
                  alt=""
                />
              </figure>
              <div className=" flex flex-col ml-3 justify-between mr-3 h-80 ">
                <span className=" font-bold text-black">
                  {course.courseName}{" "}
                </span>
                <span>Comienzo: {fullDate.toUpperCase()}</span>
                <span>Numero de sesiones: {course.duration} </span>
                <span>
                  {course.location} {time}{" "}
                </span>
                <span>
                  Instructor: {course.instructor}{" "}
                </span>
                <span>
                  Cupos: 
                  {course.avaibleQuota}/{course.capacity}{" "}
                </span>
              </div>
              <div className=" flex justify-center items-center mb-2">
                <Button color={"blue"} onClick={() => setopen(true)}>
                  Matricular
                </Button>
              </div>
            </Card>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <EnrollmentToCourse course={course} open={open} setOpen={setopen} />
    </>
  );
};

export default CourseTimeItem;

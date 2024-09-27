import { Card } from "flowbite-react";
import { NextCourses } from "../types/Courses";
import { format } from "@formkit/tempo";
import CancelEnrollment from "./Modals/CancelEnrollment";
import { useState } from "react";

const CarEnrolment = ({ course }: { course: NextCourses }) => {
  const courseTime = course.CourseTime;
  const courseDate = course.Date;
  const dateTimeString = `${courseDate}T${courseTime}`;
  const dateTime = new Date(dateTimeString);

  const [open, setopen] = useState<boolean>(false);

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
  return (
    <>
      <Card className=" hover:scale-105" onClick={() => setopen(true)}>
        <div className=" flex gap-4">
          <figure className="rounded-xl">
            <img
              className=" w-52 rounded-t-lg h-40 rounded-2xl shadow-xl"
              src={course.image}
              alt=""
            />
          </figure>
          <div className=" flex flex-col">
            <span>{course.courseType}</span>
            <span>{course.instructor} </span>
            <span>{course.location} </span>
            <span>{fullDate} </span>
            <span>{time} </span>
          </div>
        </div>
      </Card>
      <CancelEnrollment course={course} open={open} setopen={setopen} />
    </>
  );
};

export default CarEnrolment;

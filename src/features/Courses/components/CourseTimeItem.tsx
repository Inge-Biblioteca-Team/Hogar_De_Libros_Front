import { Button, Card, Timeline } from "flowbite-react";
import { Courses } from "../types/Courses";

import { CiCalendarDate } from "react-icons/ci";
import { format } from "@formkit/tempo";
const CourseTimeItem = ({ course }: { course: Courses }) => {
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

  return (
    <>
      <Timeline.Item className=" !w-72 min-w-72">
        <Timeline.Point icon={CiCalendarDate} className="custom" />
        <Timeline.Content>
          <Timeline.Time>{CourseDate}</Timeline.Time>
          <Timeline.Title className=" h-14 line-clamp-1">
            {course.courseType}
          </Timeline.Title>
          <Timeline.Body>
            <Card className="p0">
              <figure className=" w-full rounded-xl">
                <img
                  className=" w-full rounded-t-lg h-40"
                  src={course.image}
                  alt=""
                />
              </figure>
              <div className=" flex flex-col ml-6 gap-2 h-72 ">
                <span className=" font-bold text-black">
                  {course.courseType}{" "}
                </span>
                <span>
                  Impartido por <br />
                  {course.instructor}{" "}
                </span>
                <span>
                  Matricula <br />
                  {course.avaibleQuota}/{course.capacity}{" "}
                </span>
                <span>Comienzo: {fullDate.toUpperCase()}</span>
                <span>Duracion: {course.duration} </span>
                <span>
                  {course.location} {time}{" "}
                </span>
              </div>
              <div className=" flex justify-center items-center mb-2">
                <Button color={"blue"}>Matricular</Button>
              </div>
            </Card>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </>
  );
};

export default CourseTimeItem;

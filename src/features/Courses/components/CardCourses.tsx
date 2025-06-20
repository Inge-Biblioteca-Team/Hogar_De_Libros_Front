import { Button, Card } from "flowbite-react";
import { NextCourses } from "../types/Courses";
import { format } from "@formkit/tempo";
import { useState } from "react";
import EnrollmentToCourse from "./Modals/EnrollmentToCourse";

const CardCourses = ({ Courses }: { Courses: NextCourses }) => {
  const courseTime = Courses.CourseTime;
  const courseDate = Courses.Date;
  const dateTimeString = `${courseDate}T${courseTime}`;
  const dateTime = new Date(dateTimeString);

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
      <Card className="dark:bg-[#2d2d2d] p0 2xl:w-full">
        <figure>
          <img
            className="h-40 w-full object-fill rounded-t-lg
            max-sm:h-48 max-sm:rounded-md"
            src={Courses.image}
            alt={Courses.courseType}
          />
          <figcaption className="p-4 max-sm:p-1 max-lg:text-xs">
            <strong>{Courses.courseName}</strong>
            <p className=" max-sm:hidden">
              Impartido por: {Courses.instructor}
              <br />
              Comienzo: {fullDate.toUpperCase()}
              <br />
              {Courses.location} {time} <br />
              Cupos: {Courses.avaibleQuota}/{Courses.capacity} <br />
              Duración: {Courses.duration} sesiones <br />
              {Courses.materials === "" ? (
                <span className=" max-lg:hidden">Te esperamos</span>
              ) : (
                <span className=" max-lg:hidden">
                  Necesitarás: {Courses.materials}
                </span>
              )}
            </p>
            <Button
              className="max-lg:hidden"
              color={"blue"}
              onClick={() => setopen(true)}
            >
              Matrícula ahora
            </Button>
          </figcaption>
        </figure>
      </Card>
      <EnrollmentToCourse course={Courses} open={open} setOpen={setopen} />
    </>
  );
};
export default CardCourses;

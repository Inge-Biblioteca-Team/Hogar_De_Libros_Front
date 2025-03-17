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
      <Card className="p0 2xl:w-full max-sm:w-full md:h-full md:w-full">
        <figure className="md:flex md:flex-col md:justify-between md:h-full">
          <img
            className="h-40 w-full object-fill rounded-t-lg
            max-sm:h-48 max-sm:rounded-md"
            src={Courses.image}
            alt={Courses.courseType}
          />
          <figcaption className="p-4">
            <div className=" flex flex-col justify-between mr-3">
              <span className=" lg:text-xl font-bold text-black">
                {Courses.courseName}{" "}
              </span>
              <span className="text-lg">
                Impartido por: {Courses.instructor}{" "}
              </span>
              <span className="text-lg">
                Comienzo: {fullDate.toUpperCase()}
              </span>
              <span className="text-lg">Duración: {Courses.duration} </span>
              <span className="text-lg">
                {Courses.location} {time}{" "}
              </span>
              <span className="text-lg">
                Cupos: {Courses.avaibleQuota}/{Courses.capacity}{" "}
              </span>
              {Courses.materials === "" ? (
                <span className="text-lg">Te esperamos</span>
              ) : (
                <span className="text-lg">
                  Necesitarás: {Courses.materials}
                </span>
              )}
              <div className=" flex justify-center items-center mt-3">
                <Button
                  className=""
                  color={"blue"}
                  onClick={() => setopen(true)}
                >
                  Matrícula ahora
                </Button>
              </div>
            </div>
          </figcaption>
        </figure>
      </Card>
      <EnrollmentToCourse course={Courses} open={open} setOpen={setopen} />
    </>
  );
};
export default CardCourses;

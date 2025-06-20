import { useState } from "react";
import { NextCourses } from "../types/Courses";
import { format } from "@formkit/tempo";
import { Button } from "flowbite-react";
import EnrollmentToCourse from "./Modals/EnrollmentToCourse";

const CardCourseForCarrousel = ({ Courses }: { Courses: NextCourses }) => {
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
      <div
        className="w-full dark:text-black gap-8 
          bg-white flex rounded-md h-full"
      >
        <img src={Courses.image} alt={Courses.courseType} className="w-6/12" />
        <span className="m-3 !bg-transparent">
          <h3 className="text-2xl font-bold max-md:text-base">
            {Courses.courseName}
          </h3>
          <div className=" text-lg max-md:text-sm">
            <p className="">
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
            className="dark:bg-[#2d2d2d] dark:hover:bg-neutral-800"
              color={"blue"}
              onClick={() => setopen(true)}
            >
              Matrícula ahora
            </Button>
          </div>
        </span>
      </div>
      {open && (
        <EnrollmentToCourse course={Courses} open={open} setOpen={setopen} />
      )}
    </>
  );
};

export default CardCourseForCarrousel;

import { Card } from "flowbite-react";
import { Course } from "../types/Programs";
import { format } from "@formkit/tempo";

const CourseCard = ({ course }: { course: Course }) => {
  const startDate = course.date;
  const endtDate = course.endDate;

  const DateA = format({
    date: startDate,
    format: "DD/MM/YYYY",
    tz: "America/Costa_Rica",
  });
  const DateB = format({
    date: endtDate,
    format: "DD/MM/YYYY",
    tz: "America/Costa_Rica",
  });

  return (
    <Card className=" hover:scale-105">
      <div className=" grid-cols-3 grid">
        <figure className=" col-span-1">
          <img
            className="h-28 w-full rounded-lg shadow-2xl"
            src={course.image}
            alt={course.courseName}
          />
        </figure>
        <div className=" pl-2 col-span-2">
          <div className="line-clamp-1">
            <b>Curso: </b>
            <span>{course.courseName}</span>
          </div>
          <div>
            <b>Realizado en: </b>
            <span>{course.location} </span>
          </div>
          <div>
            <b>Fechas: </b>
            <span>
              {DateA} al {DateB}{" "}
            </span>
          </div>
          <div>
            <b>A cargo de: </b>
            <span>{course.instructor} </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;

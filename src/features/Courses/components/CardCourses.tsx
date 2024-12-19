import { Button, Card } from "flowbite-react";
import { NextCourses } from "../types/Courses";
import { format } from "@formkit/tempo";

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

  return (
    <Card className="">
      <figure>
        <img
          className="h-40 w-full object-fill rounded-t-lg
            max-sm:h-48 max-sm:rounded-md"
          src={Courses.image}
          alt={Courses.courseType}
        />
        <figcaption className="p-4">
          <div className=" flex flex-col justify-between mr-3">
            <span className=" font-bold text-black">{Courses.courseName} </span>
            <span>
              Impartido por <br />
              {Courses.instructor}{" "}
            </span>
            <span>Comienzo: {fullDate.toUpperCase()}</span>
            <span>Duracion: {Courses.duration} </span>
            <span>
              {Courses.location} {time}{" "}
            </span>
            <span>
              Cupos <br />
              {Courses.avaibleQuota}/{Courses.capacity}{" "}
            </span>
            {Courses.materials == "" ? (
              "Te esperamos"
            ) : (
              <span>Necesitaras: {Courses.materials}</span>
            )}
            <Button color={"blue"}>
              Matricula ahora
            </Button>
          </div>
        </figcaption>
      </figure>
    </Card>
  );
};
export default CardCourses;

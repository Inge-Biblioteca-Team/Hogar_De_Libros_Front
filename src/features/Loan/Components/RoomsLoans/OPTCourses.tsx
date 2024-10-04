import { useQuery } from "react-query";
import { Courses } from "../../../Courses/types/Courses";
import { getCoursesList } from "../../Services/SVReservations";

const OPTCourses = () => {
  const { data: courses } = useQuery<Courses[], Error>(
    ["CoursesList"],
    () => getCoursesList(),
    {
      staleTime: 600,
    }
  );
  return (
    <>
      <option value="0">No Aplica</option>
      {courses?.map((course) => (
        <option key={course.courseId} value={course.courseId}>
          {course.courseName}
        </option>
      ))}
    </>
  );
};

export default OPTCourses;

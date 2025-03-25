import { useQuery } from "react-query";
import { GetUserEnrollment } from "../services/SvCourses";
import { ApiCourseResponse } from "../types/Courses";
import CarEnrolment from "../components/CarEnrolment";
import {
  ProfileCrumbs,
} from "../../../components/Breadcrumbs/BreadCrumbsItems";
import { useContext } from "react";
import UserContext from "../../../Context/UserContext/UserContext";

const UserEnrollmentCourses = () => {
  const { currentUser } = useContext(UserContext);

  const Cedula = currentUser?.cedula || "";

  const { data: Courses } = useQuery<ApiCourseResponse, Error>(
    ["MyCourseCatalog"],
    () =>
      Cedula
        ? GetUserEnrollment(1, 15, Cedula)
        : Promise.reject("Cedula no encontrada"),
    {
      staleTime: 600,
      enabled: !!Cedula,
    }
  );

  return (
    <>
      <ProfileCrumbs text="Cursos matriculados"/>
      <div className="overflow-x-hidden w-full flex items-center justify-center mt-12">
        <div className=" w-4/5 grid max-sm:grid-cols-1 grid-cols-1 gap-5 my-4">
          {Courses?.count == 0 ? (
            <div className=" flex justify-center items-center w-full h-screen text-3xl font-bold text-center px-4 pb-40">
              No posee cursos matriculados
            </div>
          ) : (
            Courses?.data.map((course) => (
              <CarEnrolment course={course} key={course.Id} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default UserEnrollmentCourses;

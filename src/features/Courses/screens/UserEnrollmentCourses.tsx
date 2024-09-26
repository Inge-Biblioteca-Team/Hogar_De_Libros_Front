import { useQuery } from "react-query";
import { GetUserEnrollment } from "../services/SvCourses";
import { ApiCourseResponse } from "../types/Courses";
import { Breadcrumb } from "flowbite-react";
import { HomeCrumb, LastCrumb } from "../../../components/BreadCrumb";
import CarEnrolment from "../components/CarEnrolment";

const UserEnrollmentCourses = () => {
  const Cedula = sessionStorage.getItem("cedula");

  const { data: Courses } = useQuery<ApiCourseResponse, Error>(
    ["MyCourseCatalog"],
    () =>
      Cedula
        ? GetUserEnrollment(0, 0, Cedula)
        : Promise.reject("Cedula no encontrada"),
    {
      staleTime: 600,
    }
  );

  return (
    <>
      <Breadcrumb className=" custom-breadcrumb">
        <HomeCrumb />
        <LastCrumb CurrentPage="Cursos Matriculados" />
      </Breadcrumb>
      <div className=" w-full flex items-center justify-center mt-12">
        <div className=" w-4/5 grid grid-cols-3 gap-5">
          {Courses?.count == 0 ? (
            <span>No hay cursos matriculados</span>
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

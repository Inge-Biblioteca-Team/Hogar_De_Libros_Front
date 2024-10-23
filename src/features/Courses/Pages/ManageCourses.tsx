import { Label, Table, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";

import { useQuery } from "react-query";
import { getCourses } from "../services/SvCourses";
import { Courses, ResponseC } from "../types/Courses";
import TBLCourses from "../components/TBLCourses";
import UseDebounce from "../../../hooks/UseDebounce";
import { BsPersonSquare } from "react-icons/bs";
import CreateCourse from "../components/Crud/CreateCourse";
import NoRequest from "../components/NoRequest";
import { BreadCrumbManage } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import CustomPagination from "../../../components/CustomPagination";

const ManageCourses = () => {
  const [currentLimit, setCurrentLimit] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("CoursesPages");
    return savedPage ? Number(savedPage) : 1;
  });
  const [SName, SetSName] = useState<string>("");

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("CoursesPages", page.toString());
  };

  useEffect(() => {
    sessionStorage.setItem("CoursesPages", currentPage.toString());
  }, [currentPage]);

  const Name = UseDebounce(SName, 600);

  const { data: Courses } = useQuery<ResponseC, Error>(
    ["CourseMG", currentPage, currentLimit, Name],
    () => getCourses(currentPage, currentLimit, Name),
    {
      staleTime: 600,
    }
  );

  const MaxPage = Math.ceil((Courses?.count ?? 0) / 5);

  useEffect(() => {
    setCurrentPage(1);
  }, [Name]);

  return (
    <>
      <BreadCrumbManage text="Cursos" />
      <div className=" w-full flex items-center justify-center pt-12">
        <div className=" w-4/5">
          <div className="flex items-end justify-between mb-3">
            <div>
              <Label className=" text-lg">Nombre</Label>
              <TextInput
                type="text"
                placeholder="Nombre"
                icon={BsPersonSquare}
                onChange={(event) => SetSName(event.target.value)}
              />
            </div>
            <CreateCourse />
          </div>
          {Courses?.count && Courses.count > 0 ? (
            <>
              <Table hoverable className=" text-center">
                <Table.Head className=" h-20 text-sm">
                  <Table.HeadCell>Nombre</Table.HeadCell>
                  <Table.HeadCell>Encargado</Table.HeadCell>
                  <Table.HeadCell>Fecha</Table.HeadCell>
                  <Table.HeadCell>Hora</Table.HeadCell>
                  <Table.HeadCell>Cupos Disponibles</Table.HeadCell>
                  <Table.HeadCell>Matricula</Table.HeadCell>
                  <Table.HeadCell>Estado</Table.HeadCell>
                  <Table.HeadCell></Table.HeadCell>
                </Table.Head>
                <Table.Body className="h-96">
                  {Courses?.data.map((course: Courses) => (
                    <TBLCourses key={course.courseId} course={course} />
                  ))}
                </Table.Body>
              </Table>
              <CustomPagination
                page={currentPage}
                onPageChange={onPageChange}
                totalPages={MaxPage}
                setCurrentLimit={setCurrentLimit}
                total={Courses?.count || 0}
              />
            </>
          ) : (
            <NoRequest text="No existen registros de cursos"></NoRequest>
          )}
        </div>
      </div>
    </>
  );
};
export default ManageCourses;

import { Breadcrumb, Table } from "flowbite-react";
import SltCurrentLimit from "../../../components/SltCurrentLimit";
import PaginatationSelector from "../../../components/PaginatationSelector";
import { useEffect, useState } from "react";
import {
  HomeCrumb,
  LastCrumb,
  ManageCrumb,
} from "../../../components/BreadCrumb";
import { useQuery } from "react-query";
import { getCourses } from "../services/SvCourses";
import { Courses, ResponseC } from "../types/Courses";
import TBLCourses from "../components/TBLCourses";
import UseDebounce from "../../../hooks/UseDebounce";
import SearchCourses from "../components/Modals/SearchCourses";
import { useNavigate } from "react-router-dom";

const ManageCourses = () => {
  const [currentLimit, setCurrentLimit] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("CoursesPages");
    return savedPage ? Number(savedPage) : 1;
  });
  const [SName, SetSName] = useState<string>("");
  const navigate = useNavigate();

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("CoursesPages", page.toString());
  };

  useEffect(() => {
    sessionStorage.setItem("CoursesPages", currentPage.toString());
  }, [currentPage]);

  const Name = UseDebounce(SName, 5);

  const { data: Courses } = useQuery<ResponseC, Error>(
    ["CourseMG", currentPage, currentLimit, Name],
    () => getCourses(currentPage, currentLimit, Name),
    {
      staleTime: 600,
    }
  );

  const MaxPage = Math.ceil((Courses?.count ?? 0) / 5);

  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeCrumb />
        <ManageCrumb />
        <LastCrumb CurrentPage="Lista de Cursos" />
      </Breadcrumb>
      <div className=" w-full flex items-center justify-center pt-12">
        <div className=" w-4/5">
          <div className="flex items-center">
            <SearchCourses SName={SetSName} />
            <button
              className="w-40 bg-Body text-white mt-2 p-2 rounded-md hover:bg-blue-800"
              onClick={() => navigate("/añadir-curso")}
            >
              Añadir Curso
            </button>

          </div>
          <Table hoverable className=" text-center">
            <Table.Head className=" h-20 text-sm">
              <Table.HeadCell>Nombre</Table.HeadCell>
              <Table.HeadCell>Encargado</Table.HeadCell>
              <Table.HeadCell>Fecha y Hora</Table.HeadCell>
              <Table.HeadCell>Ubicación</Table.HeadCell>
              <Table.HeadCell>Cupos Disponibles</Table.HeadCell>
              <Table.HeadCell>Duración del Curso</Table.HeadCell>
              <Table.HeadCell>Estado</Table.HeadCell>
              <Table.HeadCell></Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {Courses?.data && Array.isArray(Courses.data) && Courses.data.length > 0 ? (
                Courses.data.map((course: Courses) => (
                  <TBLCourses key={course.courseId} course={course} />
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="text-center">No Existen Cursos Registrados</td>
                </tr>
              )}
            </Table.Body>
          </Table>
          <div className=" w-full flex justify-between">
            <div>
              <span className=" pl-5">
                Mostrar{" "}
                <span>
                  <SltCurrentLimit setCurrentLimit={setCurrentLimit} />
                </span>{" "}
                Cursos por página
              </span>
            </div>
            <PaginatationSelector
              totalPages={MaxPage}
              currentPage={currentPage}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default ManageCourses;

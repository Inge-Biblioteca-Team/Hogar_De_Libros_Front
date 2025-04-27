import { Label, Select, Table, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getCourses } from "../services/SvCourses";
import { Courses, ResponseC } from "../types/Courses";
import TBLCourses from "../components/TBLCourses";
import UseDebounce from "../../../hooks/UseDebounce";
import { BsPersonSquare } from "react-icons/bs";
import CreateCourse from "../components/Crud/CreateCourse";
import { ServicesCrumbs } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import DesktopPagination from "../../../components/DesktopComponents/DesktopPagination";
import MobilePagination from "../../../components/MobileComponents/MobilePagination";
import Loader from "../../../components/Loader";
import NoResults from "../../../components/NoResults";

const ManageCourses = () => {
  const [currentLimit, setCurrentLimit] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("CoursesPages");
    return savedPage ? Number(savedPage) : 1;
  });
  const [SName, SetSName] = useState<string>("");
  const [Status, SetStatus] = useState<string>("");

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("CoursesPages", page.toString());
  };

  useEffect(() => {
    sessionStorage.setItem("CoursesPages", currentPage.toString());
  }, [currentPage]);

  const Name = UseDebounce(SName, 600);

  const { data: Courses, isLoading } = useQuery<ResponseC, Error>(
    ["CourseMG", currentPage, currentLimit, Name, Status],
    () => getCourses(currentPage, currentLimit, Name, Status),
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
      <ServicesCrumbs text="Cursos" />
      <main className=" px-3 w-full">
        <section className=" flex justify-between items-end  max-md:flex-col max-md:items-stretch gap-y-3 mb-3">
          <div className=" flex gap-x-3 max-md:flex-col">
            <div>
              <Label className=" text-lg">Nombre</Label>
              <TextInput
                type="text"
                placeholder="Nombre"
                icon={BsPersonSquare}
                onChange={(event) => SetSName(event.target.value)}
              />
            </div>
            <div>
              <Label className=" text-lg">Estado</Label>
              <Select onChange={(event) => SetStatus(event.target.value)}>
                <option value="">Seleccione un estado</option>
                <option value="1">Próximos</option>
                <option value="0">Pasados</option>
              </Select>
            </div>
          </div>
          <CreateCourse />
        </section>
        <section>
          {isLoading && (
            <div className=" w-full flex items-center justify-center">
              <Loader />
            </div>
          )}

          {!isLoading && (!Courses || Courses.count == 0) && <NoResults />}

          {!isLoading && Courses && Courses.count > 0 && (
            <Table
              hoverable
              className="text-center min-h-[30rem] text-black dark:text-white"
            >
              <Table.Head className="dark:[&>tr>th]:!bg-neutral-800 dark:text-white">
                <Table.HeadCell>Nombre</Table.HeadCell>
                <Table.HeadCell className=" max-lg:hidden">
                  Encargado
                </Table.HeadCell>
                <Table.HeadCell>Fecha</Table.HeadCell>
                <Table.HeadCell className=" max-lg:hidden">Hora</Table.HeadCell>
                <Table.HeadCell className=" max-sm:hidden">Cupos Disponibles</Table.HeadCell>
                <Table.HeadCell className=" max-md:hidden">
                  Matrícula
                </Table.HeadCell>
                <Table.HeadCell className=" max-md:hidden">
                  Estado
                </Table.HeadCell>
                <Table.HeadCell className=" max-md:hidden"></Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {Courses?.data.map((course: Courses) => (
                  <TBLCourses key={course.courseId} course={course} />
                ))}
              </Table.Body>
            </Table>
          )}
          <DesktopPagination
            page={currentPage}
            onPageChange={onPageChange}
            totalPages={MaxPage}
            setCurrentLimit={setCurrentLimit}
          />
          <MobilePagination
            page={currentPage}
            onPageChange={onPageChange}
            totalPages={MaxPage}
            setCurrentLimit={setCurrentLimit}
          />
        </section>
      </main>
    </>
  );
};
export default ManageCourses;

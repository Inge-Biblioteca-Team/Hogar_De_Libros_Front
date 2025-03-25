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
import CustomPagination from "../../../components/CustomPagination";
import NoResults from "../../../components/NoResults";
import { Pagination } from "flowbite-react";
import Loader from "../../OPAC/Assets/LoaderOPAC.gif";

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
      <main className="w-full flex items-center justify-center flex-col gap-4">
        <section className=" w-4/5 md:w-full md:pr-4 md:pl-4 max-sm:w-full max-sm:p-2 max-sm:gap-4 max-sm:place-items-center max-sm:flex-col flex justify-between items-end">
          <div className=" flex max-sm:w-full max-sm:flex-col gap-2">
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
        <section className="w-4/5 md:w-full md:pr-4 md:pl-4 max-sm:w-full max-sm:p-2">
          {isLoading ? (
            <div className=" w-full flex items-center justify-center">
              <figure>
                <img width={400} src={Loader} alt="...Cargando" />
                <figcaption className=" text-center">...Cargando</figcaption>
              </figure>
            </div>
          ) : Courses ? (
            <>
              <Table hoverable className=" text-center">
                <Table.Head className="dark:text-white h-20 text-sm">
                  <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 xl:w-1/6">
                    Nombre
                  </Table.HeadCell>
                  <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 xl:w-1/6 max-sm:hidden">
                    Encargado
                  </Table.HeadCell>
                  <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 xl:w-1/6 max-sm:hidden">
                    Fecha
                  </Table.HeadCell>
                  <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 xl:w-1/6 xl:table-cell 2xl:table-cell md:hidden max-sm:hidden">
                    Hora
                  </Table.HeadCell>
                  <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 xl:w-1/6 xl:table-cell 2xl:table-cell md:hidden max-sm:hidden">
                    Cupos Disponibles
                  </Table.HeadCell>
                  <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 xl:w-1/6 xl:table-cell 2xl:table-cell md:hidden max-sm:hidden">
                    Matrícula
                  </Table.HeadCell>
                  <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 xl:w-1/6">
                    Estado
                  </Table.HeadCell>
                  <Table.HeadCell className="dark:bg-neutral-900"></Table.HeadCell>
                </Table.Head>
                <Table.Body className="dark:bg-[#2d2d2d] dark:text-white h-96">
                  {Courses?.data.map((course: Courses) => (
                    <TBLCourses key={course.courseId} course={course} />
                  ))}
                </Table.Body>
              </Table>
              <div className="block max-sm:hidden">
                <CustomPagination
                  page={currentPage}
                  onPageChange={onPageChange}
                  totalPages={MaxPage}
                  setCurrentLimit={setCurrentLimit}
                  total={Courses?.count || 0}
                />
              </div>

              <div className="sm:hidden  flex justify-center ">
                <Pagination
                  layout="navigation"
                  currentPage={currentPage}
                  totalPages={MaxPage}
                  onPageChange={onPageChange}
                />
              </div>
            </>
          ) : (
            <NoResults />
          )}
        </section>
      </main>
    </>
  );
};
export default ManageCourses;

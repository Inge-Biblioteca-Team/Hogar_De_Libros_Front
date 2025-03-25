import { Table } from "flowbite-react";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import TBLUsers from "../Components/TBLUsers";
import SearchUsers from "../Components/SearchUers";
import { GetUsersList } from "../Services/SvUsuer";
import { User, UsersResponse } from "../Type/UserType";
import UseDebounce from "../../../hooks/UseDebounce";
import {
  BreadCrumbsItems,
  BreadLastItems,
} from "../../../components/Breadcrumbs/BreadCrumbsItems";
import CustomPagination from "../../../components/CustomPagination";
import NoResults from "../../../components/NoResults";
import { Pagination } from "flowbite-react";
import Loader from "../../OPAC/Assets/LoaderOPAC.gif";

const ManageUsers = () => {
  const [currentLimit, setCurrentLimit] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("UersCPages");
    return savedPage ? Number(savedPage) : 1;
  });

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("UersCPages", page.toString());
  };

  useEffect(() => {
    sessionStorage.setItem("UersCPages", currentPage.toString());
  }, [currentPage]);

  const [name, setName] = useState<string>("");
  const [cedula, setCedula] = useState<string>("");
  const [rol, setRol] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const SName = UseDebounce(name, 500);
  const SCedula = UseDebounce(cedula, 500);
  const SYear = UseDebounce(year, 100);

  const { data: Users, isLoading } = useQuery<UsersResponse, Error>(
    ["UsersMG", currentPage, currentLimit, SName, SCedula, rol, SYear],
    () => GetUsersList(currentPage, currentLimit, SCedula, SName, rol, SYear),
    {
      staleTime: 600,
    }
  );

  const MaxPage = Math.ceil((Users?.count ?? 0) / 5);
  return (
    <>
      <BreadCrumbsItems>
        <BreadLastItems text="Gestión de usuarios" />
      </BreadCrumbsItems>
      <div className=" flex place-content-center">
        <div className="w-4/5 md:w-full md:pr-4 md:pl-4 flex flex-col items-center justify-center pt-1 max-sm:w-full max-sm:p-2 gap-2">
          <div className="max-sm:w-full sm:w-full md:w-full flex justify-center max-sm:pb-8">
            <SearchUsers
              setYear={setYear}
              setRol={setRol}
              setCedula={setCedula}
              setName={setName}
            />
          </div>
          {isLoading ? (
            <div className=" w-full flex items-center justify-center">
              <figure>
                <img width={400} src={Loader} alt="...Cargando" />
                <figcaption className=" text-center">...Cargando</figcaption>
              </figure>
            </div>
          ) : Users ? (
            <>
              <Table
                hoverable
                className=" text-center min-h-[30rem] max-sm:text-sm max-sm:justify-center"
              >
                <Table.Head className="dark:text-white bg-white">
                  <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 xl:w-1/6">
                    Cédula
                  </Table.HeadCell>
                  <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 xl:w-1/6">
                    Nombre
                  </Table.HeadCell>
                  <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 xl:w-1/6 max-sm:hidden">
                    Rol
                  </Table.HeadCell>
                  <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 xl:w-1/6 md:hidden max-sm:hidden lg:table-cell">
                    Provincia
                  </Table.HeadCell>
                  <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 xl:w-1/6 md:hidden max-sm:hidden lg:table-cell">
                    Teléfono
                  </Table.HeadCell>
                  <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 xl:w-1/6 md:hidden max-sm:hidden lg:table-cell">
                    Fecha de registro
                  </Table.HeadCell>
                  <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 xl:w-1/6 max-sm:hidden">
                    Estado
                  </Table.HeadCell>
                  <Table.HeadCell className="dark:bg-neutral-900"></Table.HeadCell>
                </Table.Head>
                <Table.Body className="dark:text-white dark:bg-[#2d2d2d]">
                  {Users?.data.map((user: User) => (
                    <TBLUsers user={user} key={user.cedula} />
                  ))}
                </Table.Body>
              </Table>
              <div className="block w-full max-sm:hidden">
                <CustomPagination
                  page={currentPage}
                  onPageChange={onPageChange}
                  totalPages={MaxPage}
                  setCurrentLimit={setCurrentLimit}
                  total={Users?.count || 0}
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
        </div>
      </div>
    </>
  );
};
export default ManageUsers;

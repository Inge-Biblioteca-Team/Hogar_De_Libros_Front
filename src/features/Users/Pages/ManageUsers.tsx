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

  const { data: Users } = useQuery<UsersResponse, Error>(
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
        <div className="w-4/5 flex flex-col items-center justify-center pt-1 max-sm:w-full max-sm:p-2 gap-2">
          <div className="max-sm:w-full sm:w-full flex justify-center max-sm:pb-8">
          <SearchUsers
            setYear={setYear}
            setRol={setRol}
            setCedula={setCedula}
            setName={setName}
          />
          </div>
          {Users && Users.count > 0 ?  (
            <>
              <Table hoverable className=" text-center min-h-[30rem] max-sm:text-sm max-sm:justify-center">
                <Table.Head className=" bg-white">
                  <Table.HeadCell>Cédula</Table.HeadCell>
                  <Table.HeadCell>Nombre</Table.HeadCell>
                  <Table.HeadCell className="max-sm:hidden">Rol</Table.HeadCell>
                  <Table.HeadCell className="max-sm:hidden">Provincia</Table.HeadCell>
                  <Table.HeadCell className="max-sm:hidden">Teléfono</Table.HeadCell>
                  <Table.HeadCell className="max-sm:hidden">Fecha de registro</Table.HeadCell>
                  <Table.HeadCell className="max-sm:hidden">Estado</Table.HeadCell>
                  <Table.HeadCell></Table.HeadCell>
                </Table.Head>
                <Table.Body>
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
          ):
          (
            <NoResults />
          )}
        </div>
      </div>
    </>
  );
};
export default ManageUsers;

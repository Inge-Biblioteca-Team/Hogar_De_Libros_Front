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
import NoResults from "../../../components/NoResults";
import Loader from "../../../components/Loader";
import MobilePagination from "../../../components/MobileComponents/MobilePagination";
import DesktopPagination from "../../../components/DesktopComponents/DesktopPagination";

const ManageUsers = () => {
  const [currentLimit, setCurrentLimit] = useState<number>(() => {
    const savedLimit = sessionStorage.getItem("UsersCLimit");
    return savedLimit ? Number(savedLimit) : 5;
  });
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("UersCPages");
    return savedPage ? Number(savedPage) : 1;
  });

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("UersCPages", page.toString());
  };

  useEffect(() => {
    sessionStorage.setItem("UsersCLimit", currentLimit.toString());
  }, [currentLimit]);

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

  useEffect(() => {
    setCurrentPage(1);
  }, [SName, SCedula, SYear, currentLimit]);

  const MaxPage = Math.ceil((Users?.count ?? 0) / currentLimit);
  return (
    <>
      <BreadCrumbsItems>
        <BreadLastItems text="Gestión de usuarios" />
      </BreadCrumbsItems>
      <main className=" px-3">
        <section className=" mb-2">
          <SearchUsers
            setYear={setYear}
            setRol={setRol}
            setCedula={setCedula}
            setName={setName}
          />
        </section>
        <section>
          {isLoading && (
            <div className="w-full flex items-center justify-center">
              <Loader />
            </div>
          )}
          {!isLoading && (!Users || Users.count == 0) && <NoResults />}
          {!isLoading && Users && Users.count > 0 && (
            <Table
              hoverable
              className="text-center min-h-[30rem] text-black dark:text-white"
            >
              <Table.Head className="dark:[&>tr>th]:!bg-neutral-800 dark:text-white">
                <Table.HeadCell className=" max-sm:hidden">Cédula</Table.HeadCell>
                <Table.HeadCell className="">Nombre</Table.HeadCell>
                <Table.HeadCell className="">Rol</Table.HeadCell>
                <Table.HeadCell className=" max-lg:hidden">Provincia</Table.HeadCell>
                <Table.HeadCell className=" max-lg:hidden">Teléfono</Table.HeadCell>
                <Table.HeadCell className=" max-lg:hidden">Fecha de registro</Table.HeadCell>
                <Table.HeadCell className=" max-md:hidden">Estado</Table.HeadCell>
                <Table.HeadCell className=" max-md:hidden"></Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {Users?.data.map((user: User) => (
                  <TBLUsers user={user} key={user.cedula} />
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
export default ManageUsers;

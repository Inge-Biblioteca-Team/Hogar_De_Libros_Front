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
import { Pagination } from "flowbite-react";
import Loader from "../../OPAC/Assets/LoaderOPAC.gif";

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

  const onLimitChange = (limit: number) => {
    setCurrentLimit(limit);
    sessionStorage.setItem("UsersCLimit", limit.toString());
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
      <div className=" flex place-content-center">
        <div className="w-full md:w-full md:pr-4 md:pl-4 flex flex-col items-center justify-center pt-1 max-sm:w-full max-sm:p-2 gap-2">
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
          ) : Users && Users.data && Users.count && Users.count > 0 ? (
            <section className="w-full">
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
            </section>
          ) : (
            <NoResults />
          )}
          <>
            <div className="block w-full max-sm:hidden">
              <div className=" flex items-center justify-between py-2">
                <div className=" flex items-center flex-col">
                  <div>
                    <span>Mostrar</span>
                    <select
                      name="Limit"
                      id="Limit"
                      title="Resultados por página"
                      className=" bg-transparent border-none rounded-lg"
                      onChange={(e) => onLimitChange(Number(e.target.value))}
                    >
                      <option value={5}>5</option>
                      <option value={10}>10</option>
                      <option value={15}>15</option>
                    </select>
                    <span>elementos por página. </span>
                  </div>
                </div>
                {Users && Users.count && Users.count > 0 && (
                  <Pagination
                    currentPage={currentPage}
                    onPageChange={onPageChange}
                    totalPages={MaxPage}
                    nextLabel="Siguiente"
                    previousLabel="Anterior"
                    showIcons
                    layout="pagination"
                  />
                )}
              </div>
            </div>
            <div className="sm:hidden  flex justify-center ">
              <Pagination
                layout="navigation"
                nextLabel="Siguiente"
                previousLabel="Anterior"
                currentPage={currentPage}
                totalPages={MaxPage}
                onPageChange={onPageChange}
              />
            </div>
          </>
        </div>
      </div>
    </>
  );
};
export default ManageUsers;

//! Separar el limite y la paginacion en 2 componentes para evitar que al cambiar el limite se oculte.
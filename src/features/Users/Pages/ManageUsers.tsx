import { Breadcrumb, Table } from "flowbite-react";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import {
  HomeCrumb,
  ManageCrumb,
  LoanCrumb,
  LastCrumb,
} from "../../../components/BreadCrumb";
import PaginatationSelector from "../../../components/PaginatationSelector";
import SltCurrentLimit from "../../../components/SltCurrentLimit";
import NoRequest from "../../Loan/Components/NoRequest";
import TBLUsers from "../Components/TBLUsers";
import SearchUsers from "../Components/SearchUers";
import { GetUsersList } from "../Services/SvUsuer";
import { User } from "../Type/UserType";

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

  const { data: Users } = useQuery<User[], Error>(
    ["UsersMG", currentPage, currentLimit],
    () => GetUsersList(currentPage, currentLimit),
    {
      staleTime: 600,
    }
  );

  const MaxPage = Math.ceil((Users?.length ?? 0) / 5);
  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeCrumb />
        <ManageCrumb />
        <LoanCrumb />
        <LastCrumb CurrentPage="Lista de Usuarios" />
      </Breadcrumb>
      {Users?.length == 0 ? (
        <NoRequest text="No hay" />
      ) : (
        <div className="flex place-content-center mt-14">
          <div className="w-4/5">
            <SearchUsers />
            <Table hoverable className=" text-center">
              <Table.Head className=" h-20 text-sm">
                <Table.HeadCell>Cedula</Table.HeadCell>
                <Table.HeadCell>Nombre</Table.HeadCell>
                <Table.HeadCell>Rol</Table.HeadCell>
                <Table.HeadCell>Provincia</Table.HeadCell>
                <Table.HeadCell>Telefono</Table.HeadCell>
                <Table.HeadCell>Fecha de registro</Table.HeadCell>
                <Table.HeadCell>Estado</Table.HeadCell>
                <Table.HeadCell></Table.HeadCell>
              </Table.Head>
              <Table.Body>
                {Users?.slice(0,5).map((user: User) => (
                  <TBLUsers user={user} />
                ))}
              </Table.Body>
            </Table>

            <div className=" w-full flex justify-between">
              <div>
                <span className=" pl-5">
                  Mostrar{" "}
                  <span>
                    <SltCurrentLimit setCurrentLimit={setCurrentLimit} />
                  </span>{" "}
                  Libros por pagina
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
      )}
    </>
  );
};
export default ManageUsers;

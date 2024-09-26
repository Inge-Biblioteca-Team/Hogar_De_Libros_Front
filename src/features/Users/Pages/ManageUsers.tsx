import { Breadcrumb, Table } from "flowbite-react";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import {
  HomeCrumb,
  LoanCrumb,
  LastCrumb,
} from "../../../components/BreadCrumb";
import PaginatationSelector from "../../../components/PaginatationSelector";
import SltCurrentLimit from "../../../components/SltCurrentLimit";
import NoRequest from "../../Loan/Components/NoRequest";
import TBLUsers from "../Components/TBLUsers";
import SearchUsers from "../Components/SearchUers";
import { GetUsersList } from "../Services/SvUsuer";
import { User, UsersResponse } from "../Type/UserType";
import UseDebounce from "../../../hooks/UseDebounce";

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
      <Breadcrumb className="custom-breadcrumb">
        <HomeCrumb />
        <LoanCrumb />
        <LastCrumb CurrentPage="Lista de Usuarios" />
      </Breadcrumb>
      <div className="flex place-content-center mt-14">
        <div className="w-4/5">
          <SearchUsers
          setYear={setYear}
          setRol={setRol}
          setCedula={setCedula}
          setName={setName}
          />
          {Users?.count == 0 ? (
            <NoRequest text="No hay" />
          ) : (
            <>
              <Table hoverable className=" text-center">
                <Table.Head className=" h-20 text-sm">
                  <Table.HeadCell>Cédula</Table.HeadCell>
                  <Table.HeadCell>Nombre</Table.HeadCell>
                  <Table.HeadCell>Rol</Table.HeadCell>
                  <Table.HeadCell>Provincia</Table.HeadCell>
                  <Table.HeadCell>Teléfono</Table.HeadCell>
                  <Table.HeadCell>Fecha de registro</Table.HeadCell>
                  <Table.HeadCell>Estado</Table.HeadCell>
                  <Table.HeadCell></Table.HeadCell>
                </Table.Head>
                <Table.Body>
                  {Users?.data.map((user: User) => (
                    <TBLUsers user={user} key={user.cedula} />
                  ))}
                </Table.Body>
              </Table>

              <div className=" w-full flex justify-between mt-4">
                <div>
                  <span className=" pl-5">
                    Mostrar{" "}
                    <span>
                      <SltCurrentLimit setCurrentLimit={setCurrentLimit} />
                    </span>{" "}
                    Usuarios por página
                  </span>
                </div>
                <PaginatationSelector
                  totalPages={MaxPage}
                  currentPage={currentPage}
                  onPageChange={onPageChange}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default ManageUsers;

import { useEffect, useState } from "react";
import UseDebounce from "../../hooks/UseDebounce";
import { useQuery } from "react-query";
import {Friend, FriendResponse } from "../Types/FriendType";
import { GetFriend } from "../Services/SvFriends";
import { Breadcrumb, Table } from "flowbite-react";
import PaginatationSelector from "../../components/Paginations/PaginatationSelector";
import {
    HomeCrumb,
    LoanCrumb,
    LastCrumb,
  } from "../../components/BreadCrumb";
import SearchFriend from "../Components/SearchFriend";
import NoRequest from "../../features/Loan/Components/NoRequest";
import SltCurrentLimit from "../../components/Paginations/SltCurrentLimit";
import TBLFriend from "../Components/TBLFriend";

const ManageFriendRequest = () => {
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
  
    const [PrincipalCategory, setPrincipalCategory] = useState<string>("");
    const [SubCategory, setSubCategory] = useState<string>("");
    const [Status, setStatus] = useState<string>("P");
    const [DateGenerated, setDateGenerated] = useState<string>("");
  
    const SPrincipalCategory = UseDebounce(PrincipalCategory, 500);
    const SSubCategory = UseDebounce(SubCategory, 500);
    const SDateGenerated = UseDebounce(DateGenerated, 100);
  
    const { data: Friends, refetch } = useQuery(
      ["FriendsMG", currentPage, currentLimit, PrincipalCategory, SubCategory, Status, DateGenerated],
      () => GetFriend(currentPage, currentLimit, PrincipalCategory, SubCategory, Status, DateGenerated),
      {
      }
    )
  
    const MaxPage = Math.ceil((Friends?.count ?? 0) / 5);
    return (
      <>
        <Breadcrumb className="custom-breadcrumb">
          <HomeCrumb />
          <LoanCrumb />
          <LastCrumb CurrentPage="Lista de Usuarios" />
        </Breadcrumb>
        <div className="flex place-content-center mt-14">
          <div className="w-4/5">
            <SearchFriend
            setPrincipalCategory={setPrincipalCategory}
            setSubCategory={setSubCategory}
            setDateGenerated={setDateGenerated}
            />
            {Friends?.count == 0 ? (
              <NoRequest text="No hay" />
            ) : (
              <>
                <Table hoverable className=" text-center">
                  <Table.Head className=" h-20 text-sm">
                    <Table.HeadCell>Nombre</Table.HeadCell>
                    <Table.HeadCell>Rango de edad</Table.HeadCell>
                    <Table.HeadCell>Cédula</Table.HeadCell>
                    <Table.HeadCell>Teléfono</Table.HeadCell>
                    <Table.HeadCell>Correo</Table.HeadCell>
                    <Table.HeadCell>Fecha de solicitud</Table.HeadCell>
                    <Table.HeadCell>Categoría</Table.HeadCell>
                    <Table.HeadCell>Sub categoría</Table.HeadCell>
                    <Table.HeadCell></Table.HeadCell>
                  </Table.Head>
                  <Table.Body >
                    {Friends?.data.map((friend: Friend) => (
                      <TBLFriend friend={friend} key={friend.FriendId} />
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
                      solicitudes por página
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
  export default ManageFriendRequest;
  
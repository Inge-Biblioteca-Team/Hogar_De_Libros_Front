import { Breadcrumb, Table } from "flowbite-react";
import { useState, useEffect } from "react";
import {
  HomeCrumb,
  LoanCrumb,
  LastCrumb,
} from "../../../../components/BreadCrumb";
import PaginatationSelector from "../../../../components/Paginations/PaginatationSelector";
import SltCurrentLimit from "../../../../components/Paginations/SltCurrentLimit";
import TBLAprovReservations from "../../Components/RoomsLoans/TBLAprovReservations";
import { useQuery } from "react-query";
import { ReserveResponse } from "../../Types/RoomsReservations";
import NoRequest from "../../Components/NoRequest";
import { getReservations } from "../../Services/SVReservations";

const AprovedReservationList = () => {
  const [currentLimit, setCurrentLimit] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("AprovPage");
    return savedPage ? Number(savedPage) : 1;
  });

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("AprovPage", page.toString());
  };

  useEffect(() => {
    sessionStorage.setItem("AprovPage", currentPage.toString());
  }, [currentPage]);

  const { data: reservations } = useQuery<ReserveResponse, Error>(
    ["reserveRequest", currentPage, currentLimit],
    () => getReservations(currentPage, currentLimit),
    {
      staleTime: 600,
    }
  );
  const MaxPage = Math.ceil((reservations?.count ?? 0) / 5);

  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeCrumb />
        <LoanCrumb />
        <LastCrumb CurrentPage="Historial de prestamos de salas" />
      </Breadcrumb>
      <div className=" w-full flex items-center justify-center mt-16">
        <div className="w-4/5">
          { reservations?.count == 0? <NoRequest text={"No existen solicitudes pendientes"}/> :
            <>
              <Table hoverable className="w-full text-center">
                {reservations?.data.map((reserve) => (
                  <TBLAprovReservations reserve={reserve} />
                ))}
              </Table>
              <div className=" w-full flex justify-between">
                <div>
                  <span className=" pl-5">
                    Mostrar{" "}
                    <span>
                      <SltCurrentLimit setCurrentLimit={setCurrentLimit} />
                    </span>{" "}
                    Solicitudes por página
                  </span>
                </div>
                <PaginatationSelector
                  currentPage={currentPage}
                  onPageChange={onPageChange}
                  totalPages={MaxPage}
                />
              </div>
            </>
          }
        </div>
      </div>
    </>
  );
};
export default AprovedReservationList;

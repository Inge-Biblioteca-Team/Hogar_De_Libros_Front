import { Breadcrumb, Table } from "flowbite-react";
import PaginatationSelector from "../../../../components/Paginations/PaginatationSelector";
import SltCurrentLimit from "../../../../components/Paginations/SltCurrentLimit";
import {
  HomeCrumb,
  LastCrumb,
  LoanCrumb,
} from "../../../../components/BreadCrumb";
import { useEffect, useState } from "react";
import TblOldReservation from "../../Components/RoomsLoans/TblOldReservation";
import { ReserveResponse } from "../../Types/RoomsReservations";
import { useQuery } from "react-query";
import NoRequest from "../../Components/NoRequest";
import { getReservations } from "../../Services/SVReservations";

const OldReservationList = () => {
  const [currentLimit, setCurrentLimit] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("OldR");
    return savedPage ? Number(savedPage) : 1;
  });

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("OldR", page.toString());
  };

  useEffect(() => {
    sessionStorage.setItem("OldR", currentPage.toString());
  }, [currentPage]);

  const { data: reservations } = useQuery<ReserveResponse, Error>(
    ["Oldreservations", currentPage, currentLimit],
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
          {reservations?.count == 0 ? (
            <NoRequest text={"No existen solicitudes pendientes"} />
          ) : (
            <>
              <Table hoverable className="w-full text-center">
                {reservations?.data.map((reserve) => (
                  <TblOldReservation reserve={reserve} />
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
          )}
        </div>
      </div>
    </>
  );
};

export default OldReservationList;

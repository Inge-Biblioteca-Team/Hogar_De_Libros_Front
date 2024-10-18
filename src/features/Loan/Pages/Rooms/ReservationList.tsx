import { Breadcrumb, Table } from "flowbite-react";
import {
  HomeCrumb,
  LastCrumb,
  LoanCrumb,
} from "../../../../components/BreadCrumb";
import PaginatationSelector from "../../../../components/Paginations/PaginatationSelector";
import { useEffect, useState } from "react";
import SltCurrentLimit from "../../../../components/Paginations/SltCurrentLimit";
import { useQuery } from "react-query";
import { ReserveResponse } from "../../Types/RoomsReservations";
import NoRequest from "../../Components/NoRequest";
import { getReservations } from "../../Services/SVReservations";
import TblRowsReservation from "../../Components/RoomsLoans/TablesHeaders/TblRowsReservation";

const ReservationList = () => {
  const [currentLimit, setCurrentLimit] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("PRpage");
    return savedPage ? Number(savedPage) : 1;
  });

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("PRpage", page.toString());
  };

  useEffect(() => {
    sessionStorage.setItem("PRpage", currentPage.toString());
  }, [currentPage]);

  const { data: reservations } = useQuery<ReserveResponse, Error>(
    ["PendingRreservations", currentPage, currentLimit],
    () => getReservations(currentPage, currentLimit, "Pendiente"),
    {
      staleTime: 600,
    }
  );

  const MaxPage = Math.ceil((reservations?.count ?? 0) / currentLimit);
  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeCrumb />
        <LoanCrumb />
        <LastCrumb CurrentPage="Solicitudes de salas aprobadas" />
      </Breadcrumb>
      <div className=" w-full flex items-center justify-center mt-16">
        <div className="w-4/5">
          {reservations?.count == 0 ? (
            <NoRequest text={"No existen solicitudes pendientes"} />
          ) : (
            <>
              <Table
                hoverable
                className="w-full text-center"
                style={{ height: "60vh" }}
              >
                {reservations && <TblRowsReservation reserve={reservations} />}
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

export default ReservationList;

import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ReserveResponse } from "../../Types/RoomsReservations";
import NoRequest from "../../Components/NoRequest";
import { getReservations } from "../../Services/SVReservations";
import TblRowsReservation from "../../Components/RoomsLoans/TablesHeaders/TblRowsReservation";
import CustomPagination from "../../../../components/CustomPagination";
import { LoansAndCirculationCrumbs } from "../../../../components/Breadcrumbs/BreadCrumbsItems";
import { Pagination } from "flowbite-react";

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
      <LoansAndCirculationCrumbs text="Solicitudes de salas" />
      <div className=" w-full flex items-center justify-center mt-16">
        <div className="w-4/5 max-sm:w-full max-sm:p-2">
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
              <div className="block max-sm:hidden">
              <CustomPagination
                page={currentPage}
                onPageChange={onPageChange}
                totalPages={MaxPage}
                setCurrentLimit={setCurrentLimit}
                total={reservations?.count || 0}
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
          )}
        </div>
      </div>
    </>
  );
};

export default ReservationList;

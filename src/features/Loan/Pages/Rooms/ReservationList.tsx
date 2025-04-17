import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ReserveResponse } from "../../Types/RoomsReservations";
import { getReservations } from "../../Services/SVReservations";
import TblRowsReservation from "../../Components/RoomsLoans/TablesHeaders/TblRowsReservation";
import { LoansAndCirculationCrumbs } from "../../../../components/Breadcrumbs/BreadCrumbsItems";
import Loader from "../../../../components/Loader";
import NoResults from "../../../../components/NoResults";
import DesktopPagination from "../../../../components/DesktopComponents/DesktopPagination";
import MobilePagination from "../../../../components/MobileComponents/MobilePagination";

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

  const { data: reservations, isLoading } = useQuery<ReserveResponse, Error>(
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
      <main className=" px-3">
        {isLoading && (
          <div className="w-full flex items-center justify-center">
            <Loader />
          </div>
        )}
        {!isLoading && (!reservations || reservations.count == 0) && (
          <NoResults />
        )}
        {!isLoading && reservations && reservations.count > 0 && (
          <Table
            hoverable
            className="text-center min-h-[30rem] text-black dark:text-white"
          >
            {reservations && <TblRowsReservation reserve={reservations} />}
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
      </main>
    </>
  );
};

export default ReservationList;

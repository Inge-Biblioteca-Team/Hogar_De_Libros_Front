import { Table } from "flowbite-react";
import { useState, useEffect } from "react";
import TBLAprovReservations from "../../Components/RoomsLoans/TablesHeaders/TBLAprovReservations";
import { useQuery } from "react-query";
import { ReserveResponse } from "../../Types/RoomsReservations";
import NoRequest from "../../Components/NoRequest";
import { getReservations } from "../../Services/SVReservations";
import CustomPagination from "../../../../components/CustomPagination";
import { LoansAndCirculationCrumbs } from "../../../../components/Breadcrumbs/BreadCrumbsItems";

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
    () => getReservations(currentPage, currentLimit, "Aprobado"),
    {
      staleTime: 600,
    }
  );
  const MaxPage = Math.ceil((reservations?.count ?? 0) / currentLimit);

  return (
    <>
     <LoansAndCirculationCrumbs text="Reservas de salas aprobadas"/>
      <div className=" w-full flex items-center justify-center mt-28">
        <div className="w-4/5">
          {reservations?.count == 0 ? (
            <NoRequest text={"No existen solicitudes aprobadas"} />
          ) : (
            <>
              <Table
                hoverable
                className="w-full text-center"
                style={{ height: "60vh" }}
              >
                {reservations && (
                  <TBLAprovReservations reserve={reservations} />
                )}
              </Table>
              <CustomPagination
                page={currentPage}
                onPageChange={onPageChange}
                totalPages={MaxPage}
                setCurrentLimit={setCurrentLimit}
                total={reservations?.count || 0}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default AprovedReservationList;

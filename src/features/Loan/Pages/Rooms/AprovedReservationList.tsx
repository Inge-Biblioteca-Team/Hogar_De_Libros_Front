import { Table } from "flowbite-react";
import { useState, useEffect } from "react";
import TBLAprovReservations from "../../Components/RoomsLoans/TablesHeaders/TBLAprovReservations";
import { useQuery } from "react-query";
import { ReserveResponse } from "../../Types/RoomsReservations";
import NoRequest from "../../Components/NoRequest";
import { getReservations } from "../../Services/SVReservations";
import CustomPagination from "../../../../components/CustomPagination";
import { LoansAndCirculationCrumbs } from "../../../../components/Breadcrumbs/BreadCrumbsItems";
import { Pagination } from "flowbite-react";
import Loader from "../../../OPAC/Assets/LoaderOPAC.gif";

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

  const { data: reservations, isLoading } = useQuery<ReserveResponse, Error>(
    ["reserveRequest", currentPage, currentLimit],
    () => getReservations(currentPage, currentLimit, "Aprobado"),
    {
      staleTime: 600,
    }
  );
  const MaxPage = Math.ceil((reservations?.count ?? 0) / currentLimit);

  return (
    <>
      <LoansAndCirculationCrumbs text="Reservas de salas aprobadas" />
      <div className=" w-full flex items-center justify-center mt-28">
        <div className="w-4/5 xl:w-full xl:ml-4 xl:mr-4 2xl:w-full 2xl:mr-4 2xl:ml-4 max-sm:w-full max-sm:p-2">
          {isLoading ? (
            <div className="w-full flex items-center justify-center">
              <figure>
                <img width={200} src={Loader} alt="Cargando..." />
                <figcaption className="text-center">Cargando...</figcaption>
              </figure>
            </div>
          ) : reservations && reservations.data.length > 0 ? (
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
            </>
          ) : (
            <NoRequest text={"No existen solicitudes aprobadas"} />
          )}
          <div className="block max-sm:hidden">
            <CustomPagination
              page={currentPage}
              onPageChange={onPageChange}
              totalPages={MaxPage}
              setCurrentLimit={setCurrentLimit}
              total={reservations?.count || 0}
            />
          </div>
          <div className="sm:hidden flex justify-center">
            <Pagination
              layout="navigation"
              currentPage={currentPage}
              totalPages={MaxPage}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default AprovedReservationList;

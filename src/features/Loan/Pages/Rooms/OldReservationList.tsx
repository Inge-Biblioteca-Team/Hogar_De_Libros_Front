import { Label, Select, Table, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import TblOldReservation from "../../Components/RoomsLoans/TablesHeaders/TblOldReservation";
import { ReserveResponse } from "../../Types/RoomsReservations";
import { useQuery } from "react-query";
import { getReservations } from "../../Services/SVReservations";
import OPTRooms from "../../Components/RoomsLoans/OPTRooms";
import { LoansCrumbs } from "../../../../components/Breadcrumbs/BreadCrumbsItems";
import NoResults from "../../../../components/NoResults";
import Loader from "../../../../components/Loader";
import DesktopPagination from "../../../../components/DesktopComponents/DesktopPagination";
import MobilePagination from "../../../../components/MobileComponents/MobilePagination";

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

  const [SroomN, setSroomN] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const { data: reservations, isLoading } = useQuery<ReserveResponse, Error>(
    ["Oldreservations", currentPage, currentLimit, SroomN, date],
    () =>
      getReservations(currentPage, currentLimit, "Finalizado", date, SroomN),
    {
      staleTime: 600,
    }
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [date, SroomN]);

  const MaxPage = Math.ceil((reservations?.count ?? 0) / currentLimit);

  return (
    <>
      <LoansCrumbs text="Salas" />
      <main className=" px-3">
        <section>
          <div className=" flex gap-3 pb-4 max-md:flex-col">
            <div>
              <Label value="Fecha reservada" />
              <TextInput
                type="date"
                onChange={(e) => {
                  setDate(e.target.value), setCurrentPage(1);
                }}
              />
            </div>
            <div>
              <Label value="Número de sala reservada" />
              <Select
                onChange={(e) => {
                  setSroomN(e.target.value), setCurrentPage(1);
                }}
              >
                <option value="">Seleccione el número de sala</option>
                <OPTRooms />
              </Select>
            </div>
          </div>
        </section>
        <section>
          {isLoading && (
            <div className=" w-full flex items-center justify-center">
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
              {reservations && <TblOldReservation reserve={reservations} />}
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
        </section>
      </main>
    </>
  );
};

export default OldReservationList;

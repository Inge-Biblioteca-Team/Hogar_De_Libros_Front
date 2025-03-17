import { Label, Select, Table, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import TblOldReservation from "../../Components/RoomsLoans/TablesHeaders/TblOldReservation";
import { ReserveResponse } from "../../Types/RoomsReservations";
import { useQuery } from "react-query";
import { getReservations } from "../../Services/SVReservations";
import OPTRooms from "../../Components/RoomsLoans/OPTRooms";
import CustomPagination from "../../../../components/CustomPagination";
import { LoansCrumbs } from "../../../../components/Breadcrumbs/BreadCrumbsItems";
import NoResults from "../../../../components/NoResults";
import Loader from "../../../OPAC/Assets/LoaderOPAC.gif";

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
      <div className=" w-full flex items-center justify-center">
        <div className="w-4/5 md:w-full md:pl-4 md:pr-4">
          <div className=" flex gap-3 pb-4">
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
          {isLoading ? (
            <div className=" w-full flex items-center justify-center">
              <figure>
                <img width={400} src={Loader} alt="...Cargando" />
                <figcaption className=" text-center">...Cargando</figcaption>
              </figure>
            </div>
          ) : reservations ? (
            <>
              <Table
                hoverable
                className="w-full text-center "
                style={{ height: "55vh" }}
              >
                {reservations && <TblOldReservation reserve={reservations} />}
              </Table>
              <CustomPagination
                page={currentPage}
                onPageChange={onPageChange}
                totalPages={MaxPage}
                setCurrentLimit={setCurrentLimit}
                total={reservations?.count || 0}
              />
            </>
          ) : (
            <NoResults />
          )}
        </div>
      </div>
    </>
  );
};

export default OldReservationList;

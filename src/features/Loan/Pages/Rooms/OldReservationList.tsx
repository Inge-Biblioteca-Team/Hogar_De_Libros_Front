import { Label, Select, Table, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import TblOldReservation from "../../Components/RoomsLoans/TablesHeaders/TblOldReservation";
import { ReserveResponse } from "../../Types/RoomsReservations";
import { useQuery } from "react-query";
import NoRequest from "../../Components/NoRequest";
import { getReservations } from "../../Services/SVReservations";
import OPTRooms from "../../Components/RoomsLoans/OPTRooms";
import CustomPagination from "../../../../components/CustomPagination";

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

  const { data: reservations } = useQuery<ReserveResponse, Error>(
    ["Oldreservations", currentPage, currentLimit, SroomN, date],
    () =>
      getReservations(currentPage, currentLimit, "Finalizado", date, SroomN),
    {
      staleTime: 600,
    }
  );

  const MaxPage = Math.ceil((reservations?.count ?? 0) / currentLimit);

  return (
    <>
      <div className=" w-full flex items-center justify-center mt-16">
        <div className="w-4/5">
          <div className=" flex gap-3">
            <div>
              <Label value="Día reservado" />
              <TextInput
                type="date"
                onChange={(e) => {
                  setDate(e.target.value), setCurrentPage(1);
                }}
              />
            </div>
            <div>
              <Label value="Numero de sala reservada" />
              <Select
                onChange={(e) => {
                  setSroomN(e.target.value), setCurrentPage(1);
                }}
              >
                <option value="">Seleccione el numero de sala</option>
                <OPTRooms />
              </Select>
            </div>
          </div>
          {reservations?.count == 0 ? (
            <NoRequest text={"No existen solicitudes"} />
          ) : (
            <>
              <Table
                hoverable
                className="w-full text-center my-3 "
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
          )}
        </div>
      </div>
    </>
  );
};

export default OldReservationList;

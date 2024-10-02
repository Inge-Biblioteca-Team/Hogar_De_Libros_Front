import { Breadcrumb, Table } from "flowbite-react";
import {
  HomeCrumb,
  LastCrumb,
  LoanCrumb,
} from "../../../../components/BreadCrumb";
import TblRowsReservation from "../../Components/RoomsLoans/TblRowsReservation";
import PaginatationSelector from "../../../../components/Paginations/PaginatationSelector";
import { useEffect, useState } from "react";
import SltCurrentLimit from "../../../../components/Paginations/SltCurrentLimit";

const ReservationList = () => {
  const [currentLimit, setCurrentLimit] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("ArtistPages");
    return savedPage ? Number(savedPage) : 1;
  });

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("ArtistCPages", page.toString());
  };

  useEffect(() => {
    sessionStorage.setItem("ArtistPages", currentPage.toString());
  }, [currentPage]);


  //const MaxPage = Math.ceil((Artists?.count ?? 0) / 5);

  const MaxPage = 1;
  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeCrumb />
        <LoanCrumb />
        <LastCrumb CurrentPage="Solicitudes de salas" />
      </Breadcrumb>
      <div className=" w-full flex items-center justify-center mt-16">
        <div className="w-4/5">
          <Table hoverable className="w-full text-center">
            <TblRowsReservation
              reserve={{
                observations: "",
                endTime: "03:11:00",
                startTime: "03:11:00",
                reservationDate: "2023-09-09",
                date: "2023-09-09",
                name: "Adrian Aguilar",
                EventId: undefined,
                courseId: undefined,
                userCedula: "504420813",
                roomId: 1,
                reason: "Curso X",
                personNumber: "",
              }}
            />
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
        </div>
      </div>
    </>
  );
};

export default ReservationList;

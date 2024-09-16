import { Breadcrumb, Table, TextInput } from "flowbite-react";
import {
  HomeCrumb,
  LastCrumb,
  ManageCrumb,
} from "../../../../components/BreadCrumb";
import HistoryRegist from "../../Components/WorkStations/HistoryRegist";
import PaginatationSelector from "../../../../components/PaginatationSelector";
import SltCurrentLimit from "../../../../components/SltCurrentLimit";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { GetWSLoans } from "../../Services/SvComputerLoan";
import { ApiWSResponse } from "../../Types/ComputerLoan";

const WorkStationsLoanHistory = () => {
  const [currentLimit, setCurrentLimit] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("WSPage");
    return savedPage ? Number(savedPage) : 1;
  });

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("WSPage", page.toString());
  };

  const [StartDate, SetStartDate] = useState<string>("");

  useEffect(() => {
    sessionStorage.setItem("WSPage", currentPage.toString());
  }, [currentPage]);
  const { data: WSLoan } = useQuery<ApiWSResponse, Error>(
    ["WSLoans", currentPage, currentLimit, StartDate],
    () => GetWSLoans(currentPage, currentLimit, StartDate),
    {
      staleTime: 600,
    }
  );
  const MaxPage = Math.ceil((WSLoan?.count ?? 0) / 5);

  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeCrumb />
        <ManageCrumb />
        <LastCrumb CurrentPage="Historial de uso de equipos de computó" />
      </Breadcrumb>
      <div className=" w-full flex items-center justify-center mt-12">
        <div className=" w-4/5">
          <Table hoverable className=" text-center">
            <Table.Head className=" h-16 text-sm">
              <Table.HeadCell>Nombre del Usuario</Table.HeadCell>
              <Table.HeadCell>Aprovado Por</Table.HeadCell>
              <Table.HeadCell>
                <span className=" flex items-center justify-center gap-2">
                  <span>Fecha de inicio</span>
                  <TextInput
                    type="date"
                    onChange={(event) => SetStartDate(event.target.value)}
                  />
                </span>{" "}
              </Table.HeadCell>
              <Table.HeadCell>Hora de Fin</Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {WSLoan?.data.map((loans) => (
                <HistoryRegist WSLoan={loans} key={loans.ComputerLoanId} />
              ))}
            </Table.Body>
          </Table>
          <div className=" w-full flex justify-between">
            <div>
              <span className=" pl-5">
                Mostrar{" "}
                <span>
                  <SltCurrentLimit setCurrentLimit={setCurrentLimit} />
                </span>{" "}
                Resultados por pagina
              </span>
            </div>
            <PaginatationSelector
              totalPages={MaxPage}
              currentPage={currentPage}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkStationsLoanHistory;

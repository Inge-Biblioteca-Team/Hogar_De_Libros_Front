import { Table, TextInput } from "flowbite-react";
import HistoryRegist from "../../Components/WorkStations/HistoryRegist";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { GetWSLoans } from "../../Services/SvComputerLoan";
import { ApiWSResponse } from "../../Types/ComputerLoan";
import UseDebounce from "../../../../hooks/UseDebounce";
import CustomPagination from "../../../../components/CustomPagination";
import NoResults from "../../../../components/NoResults";
import { LoansCrumbs } from "../../../../components/Breadcrumbs/BreadCrumbsItems";

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
  const [MachineNumber, SetMachineNumber] = useState<string>("");

  const MachineNumberDelay = UseDebounce(MachineNumber, 100);

  useEffect(() => {
    sessionStorage.setItem("WSPage", currentPage.toString());
  }, [currentPage]);

  const { data: WSLoan } = useQuery<ApiWSResponse, Error>(
    ["WSLoans", currentPage, currentLimit, StartDate, MachineNumberDelay],
    () => GetWSLoans(currentPage, currentLimit, StartDate, MachineNumberDelay),
    {
      staleTime: 600,
    }
  );
  const MaxPage = Math.ceil((WSLoan?.count ?? 0) / 5);

  return (
    <>
      <LoansCrumbs text="Equipo de cómputo" />
      <div className=" w-full flex items-center justify-center">
        <div className=" w-4/5">
          {WSLoan && WSLoan.count > 0 ? (
            <>
              <Table hoverable className=" text-center">
                <Table.Head className=" h-16 text-sm">
                  <Table.HeadCell>
                    <span className=" flex items-center justify-center gap-2">
                      Número de Máquina
                      <TextInput
                        className="w-8"
                        type="number"
                        placeholder="#"
                        onChange={(event) =>
                          SetMachineNumber(event.target.value)
                        }
                      />
                    </span>
                  </Table.HeadCell>
                  <Table.HeadCell>Nombre del Usuario</Table.HeadCell>
                  <Table.HeadCell>Aprobado Por</Table.HeadCell>
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
              <CustomPagination
                page={currentPage}
                onPageChange={onPageChange}
                totalPages={MaxPage}
                setCurrentLimit={setCurrentLimit}
                total={WSLoan?.count || 0}
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

export default WorkStationsLoanHistory;

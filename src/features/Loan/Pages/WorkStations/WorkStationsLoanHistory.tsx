import { Label, Table, TextInput } from "flowbite-react";
import HistoryRegist from "../../Components/WorkStations/HistoryRegist";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { GetWSLoans } from "../../Services/SvComputerLoan";
import { ApiWSResponse } from "../../Types/ComputerLoan";
import UseDebounce from "../../../../hooks/UseDebounce";
import NoResults from "../../../../components/NoResults";
import { LoansCrumbs } from "../../../../components/Breadcrumbs/BreadCrumbsItems";
import { formatToYMD } from "../../../../components/FormatTempo";
import Loader from "../../../../components/Loader";
import DesktopPagination from "../../../../components/DesktopComponents/DesktopPagination";
import MobilePagination from "../../../../components/MobileComponents/MobilePagination";

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

  const { data: WSLoan, isLoading } = useQuery<ApiWSResponse, Error>(
    ["WSLoans", currentPage, currentLimit, StartDate, MachineNumberDelay],
    () => GetWSLoans(currentPage, currentLimit, StartDate, MachineNumberDelay),
    {
      staleTime: 600,
    }
  );
  const MaxPage = Math.ceil((WSLoan?.count ?? 0) / currentLimit);

  useEffect(() => {
    setCurrentPage(1);
  }, [StartDate, MachineNumberDelay]);
  return (
    <>
      <LoansCrumbs text="Equipo de cómputo" />

      <main className=" w-full flex items-center justify-center flex-col gap-2 px-3">
        <section className="w-full flex gap-4 max-md:flex-col">
          <div>
            <Label value="Numero de maquina" />
            <TextInput
              type="number"
              placeholder="Numero de maquina"
              onChange={(event) => SetMachineNumber(event.target.value)}
            />
          </div>
          <div>
            <Label value="Fecha de uso" />
            <TextInput
              type="date"
              onChange={(event) => SetStartDate(event.target.value)}
              max={formatToYMD(new Date())}
            />
          </div>
        </section>
        <section className=" w-full">
          {isLoading && (
            <div className=" w-full flex items-center justify-center">
              <Loader />
            </div>
          )}
          {!isLoading && (!WSLoan || WSLoan.count == 0) && <NoResults />}
          {!isLoading && WSLoan && WSLoan.count > 0 && (
            <Table
              hoverable
              className="text-center min-h-[30rem] text-black dark:text-white"
            >
              <Table.Head className="dark:[&>tr>th]:!bg-neutral-800 dark:text-white">
                <Table.HeadCell className="">
                  <span>Número de Máquina</span>
                </Table.HeadCell>
                <Table.HeadCell className="">Nombre del Usuario</Table.HeadCell>
                <Table.HeadCell className="">Fecha de uso</Table.HeadCell>
                <Table.HeadCell className=" max-md:hidden">Hora de Fin</Table.HeadCell>
              </Table.Head>

              <Table.Body className="divide-y">
                {WSLoan?.data.map((loans) => (
                  <HistoryRegist WSLoan={loans} key={loans.ComputerLoanId} />
                ))}
              </Table.Body>
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

export default WorkStationsLoanHistory;

import { Label, Table, TextInput } from "flowbite-react";
import HistoryRegist from "../../Components/WorkStations/HistoryRegist";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { GetWSLoans } from "../../Services/SvComputerLoan";
import { ApiWSResponse } from "../../Types/ComputerLoan";
import UseDebounce from "../../../../hooks/UseDebounce";
import CustomPagination from "../../../../components/CustomPagination";
import NoResults from "../../../../components/NoResults";
import { LoansCrumbs } from "../../../../components/Breadcrumbs/BreadCrumbsItems";
import Loader from "../../../OPAC/Assets/LoaderOPAC.gif";
import { formatToYMD } from "../../../../components/FormatTempo";

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
  const MaxPage = Math.ceil((WSLoan?.count ?? 0) / 5);

  useEffect(() => {
    setCurrentPage(1);
  }, [StartDate, MachineNumberDelay]);
  return (
    <>
      <LoansCrumbs text="Equipo de cómputo" />

      <main className=" w-full flex items-center justify-center flex-col gap-2">
        <section className="w-4/5 md:w-full md:pr-4 md:pl-4 flex  gap-4">
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

        <div className=" w-full flex items-center justify-center">
          <div className=" w-4/5 md:w-full md:pr-4 md:pl-4">
            {isLoading ? (
              <div className=" w-full flex items-center justify-center">
                <figure>
                  <img width={400} src={Loader} alt="...Cargando" />
                  <figcaption className=" text-center">...Cargando</figcaption>
                </figure>
              </div>
            ) : WSLoan && WSLoan.data.length > 0 ? (
              <>
                <Table hoverable className=" text-center h-[30rem]">
                  <Table.Head className="dark:text-white h-16 text-sm">
                    <Table.HeadCell className="dark:bg-neutral-900">
                      <span className=" flex items-center justify-center gap-2">
                        Número de Máquina
                      </span>
                    </Table.HeadCell>
                    <Table.HeadCell className="dark:bg-neutral-900">Nombre del Usuario</Table.HeadCell>
                    <Table.HeadCell className="dark:bg-neutral-900">Fecha de uso</Table.HeadCell>
                    <Table.HeadCell className="dark:bg-neutral-900">Hora de Fin</Table.HeadCell>
                  </Table.Head>

                  <Table.Body className="dark:bg-[#2d2d2d] dark:text-white">
                    {WSLoan?.data.map((loans) => (
                      <HistoryRegist
                        WSLoan={loans}
                        key={loans.ComputerLoanId}
                      />
                    ))}
                  </Table.Body>
                </Table>
              </>
            ) : (
              <NoResults />
            )}
            <CustomPagination
              page={currentPage}
              onPageChange={onPageChange}
              totalPages={MaxPage}
              setCurrentLimit={setCurrentLimit}
              total={WSLoan?.count || 0}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default WorkStationsLoanHistory;

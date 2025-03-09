import TBLLoan from "../../Components/BooksLoans/TBLLoan";
import { useQuery } from "react-query";
import { GetInProgressLoan } from "../../Services/SvBookLoan";
import { LoanResponse } from "../../Types/BookLoan";
import { useEffect, useState } from "react";
import SearchInputs from "../../Components/BooksLoans/SearchInputs";
import UseDebounce from "../../../../hooks/UseDebounce";
import { LoansAndCirculationCrumbs } from "../../../../components/Breadcrumbs/BreadCrumbsItems";
import CustomPagination from "../../../../components/CustomPagination";
import NoResults from "../../../../components/NoResults";
import { Pagination } from "flowbite-react";
import Loader from "../../../OPAC/Assets/LoaderOPAC.gif";

const InProgressLoans = () => {
  const [currentLimit, setCurrentLimit] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("INLPage");
    return savedPage ? Number(savedPage) : 1;
  });

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("INLPage", page.toString());
  };

  useEffect(() => {
    sessionStorage.setItem("INLPage", currentPage.toString());
  }, [currentPage]);

  const [StartDate, setStartDate] = useState<string>("");
  const [EndDate, setEndtDate] = useState<string>("");
  const [SignaCode, setSignaCode] = useState<string>("");

  const sSignaCode = UseDebounce(SignaCode, 1000);

  const { data: Loan, isLoading } = useQuery<LoanResponse, Error>(
    ["IPLoans", currentPage, currentLimit, StartDate, EndDate, sSignaCode],
    () =>
      GetInProgressLoan(
        currentPage,
        currentLimit,
        StartDate,
        EndDate,
        sSignaCode
      ),
    {
      staleTime: 600,
    }
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [StartDate, EndDate, sSignaCode]);

  const MaxPage = Math.ceil((Loan?.count ?? 0) / 5);
  return (
    <>
      <LoansAndCirculationCrumbs text="Préstamos en progreso" />
      {isLoading ? (
        <div className=" w-full flex items-center justify-center">
          <figure>
            <img width={400} src={Loader} alt="...Cargando" />
            <figcaption className=" text-center">...Cargando</figcaption>
          </figure>
        </div>
      ) : Loan ? (
        <div className=" flex  place-content-center pb-3">
          <div className="w-4/5 md:w-full md:pl-4 md:pr-4 max-sm:w-full max-sm:p-2">
            <SearchInputs
              SignaCode={SignaCode}
              EndDate={EndDate}
              setStartDate={setStartDate}
              setEndtDate={setEndtDate}
              setSignaCode={setSignaCode}
            />

            <>
              {Loan && <TBLLoan Loan={Loan} NeedAccions Inprogress />}
              <div className="block max-sm:hidden">
                <CustomPagination
                  page={currentPage}
                  onPageChange={onPageChange}
                  totalPages={MaxPage}
                  setCurrentLimit={setCurrentLimit}
                  total={Loan?.count || 0}
                />
              </div>

              <div className="sm:hidden  flex justify-center ">
                <Pagination
                  layout="navigation"
                  currentPage={currentPage}
                  totalPages={MaxPage}
                  onPageChange={onPageChange}
                />
              </div>
            </>
          </div>
        </div>
      ) : (
        <NoResults />
      )}
    </>
  );
};

export default InProgressLoans;

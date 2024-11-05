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

  const { data: Loan } = useQuery<LoanResponse, Error>(
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
      <div className="flex place-content-center pb-3">
        <div className="w-4/5">
          <SearchInputs
            SignaCode={SignaCode}
            EndDate={EndDate}
            setStartDate={setStartDate}
            setEndtDate={setEndtDate}
            setSignaCode={setSignaCode}
          />
          {Loan && Loan?.count > 0 ? (
            <>
              {Loan && <TBLLoan Loan={Loan} NeedAccions Inprogress />}
              <CustomPagination
                page={currentPage}
                onPageChange={onPageChange}
                totalPages={MaxPage}
                setCurrentLimit={setCurrentLimit}
                total={Loan?.count || 0}
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

export default InProgressLoans;

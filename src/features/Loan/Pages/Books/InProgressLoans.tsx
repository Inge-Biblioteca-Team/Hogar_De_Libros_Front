import TBLLoan from "../../Components/BooksLoans/TBLLoan";
import { useQuery } from "react-query";
import { GetInProgressLoan } from "../../Services/SvBookLoan";
import { LoanResponse } from "../../Types/BookLoan";
import { useEffect, useState } from "react";
import SearchInputs from "../../Components/BooksLoans/SearchInputs";
import { LoansAndCirculationCrumbs } from "../../../../components/Breadcrumbs/BreadCrumbsItems";
import Loader from "../../../../components/Loader";
import NoResults from "../../../../components/NoResults";
import MobilePagination from "../../../../components/MobileComponents/MobilePagination";
import DesktopPagination from "../../../../components/DesktopComponents/DesktopPagination";

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
  const [type, setType] = useState("");


  const { data: Loan, isLoading } = useQuery<LoanResponse, Error>(
    [
      "IPLoans",
      currentPage,
      currentLimit,
      StartDate,
      EndDate,
      "",
      type,
    ],
    () =>
      GetInProgressLoan(
        currentPage,
        currentLimit,
        StartDate,
        EndDate,
        "",
        type
      ),
    {
      staleTime: 600,
    }
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [StartDate, EndDate, type, currentLimit]);

  const MaxPage = Math.ceil((Loan?.count ?? 0) / currentLimit);
  return (
    <>
      <LoansAndCirculationCrumbs text="Préstamos en progreso" />
      <main className=" flex flex-col px-3 ">
        <section>
          <SearchInputs
            EndDate={EndDate}
            setStartDate={setStartDate}
            setEndtDate={setEndtDate}
            startDate={StartDate}
            setType={setType}
          />
        </section>

        <section className="w-full">
          {isLoading && (
            <div className=" w-full flex items-center justify-center">
              <Loader />
            </div>
          )}

          {!isLoading && Loan && Loan.count > 0 && (
            <TBLLoan Loan={Loan} NeedAccions Inprogress />
          )}

          {!isLoading && (!Loan || Loan.count == 0) && <NoResults />}
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

export default InProgressLoans;

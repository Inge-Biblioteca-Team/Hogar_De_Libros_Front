import TBLLoan from "../../Components/BooksLoans/TBLLoan";
import { useQuery } from "react-query";
import { GetDoneLoans } from "../../Services/SvBookLoan";
import { LoanResponse } from "../../Types/BookLoan";
import { useEffect, useState } from "react";
import FinishedLoanSearch from "../../Components/BooksLoans/FinishedLoanSearch";
import UseDebounce from "../../../../hooks/UseDebounce";
import { LoansCrumbs } from "../../../../components/Breadcrumbs/BreadCrumbsItems";
import NoResults from "../../../../components/NoResults";
import Loader from "../../../../components/Loader";
import { Dispatch, SetStateAction } from "react";
import DesktopPagination from "../../../../components/DesktopComponents/DesktopPagination";
import MobilePagination from "../../../../components/MobileComponents/MobilePagination";

const FinishedLoans = () => {
  const [currentLimit, setCurrentLimit] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("DLPage");
    return savedPage ? Number(savedPage) : 1;
  });

  const handleLimitChange: Dispatch<SetStateAction<number>> = (value) => {
    const newLimit = typeof value === "function" ? value(currentLimit) : value;
    setCurrentLimit(newLimit);
    setCurrentPage(1);
    sessionStorage.setItem("DLPage", "1");
  };

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("DLPage", page.toString());
  };

  useEffect(() => {
    sessionStorage.setItem("DLPage", currentPage.toString());
  }, [currentPage]);

  const [StartDate, setStartDate] = useState<string>("");
  const [EndDate, setEndtDate] = useState<string>("");
  const [Name, setName] = useState<string>("");
  const [type, setType] = useState("");

  const SName = UseDebounce(Name, 1000);

  const { data: Loan, isLoading } = useQuery<LoanResponse, Error>(
    ["DLoans", currentPage, currentLimit, StartDate, EndDate, SName, type],
    () =>
      GetDoneLoans(
        currentPage,
        currentLimit,
        StartDate,
        EndDate,
        "",
        SName,
        type
      ),
    {
      staleTime: 600,
    }
  );

  useEffect(() => {
    setCurrentPage(1);
    sessionStorage.setItem("DLPage", "1");
  }, [currentLimit, StartDate, EndDate, SName, type]);

  useEffect(() => {
    setCurrentPage(1);
  }, [StartDate, EndDate, SName, type, currentLimit]);

  const MaxPage = Math.ceil((Loan?.count ?? 0) / currentLimit);
  return (
    <>
      <LoansCrumbs text="Libros" />
      <section className="px-3">
        <FinishedLoanSearch
          setStartDate={setStartDate}
          setEndtDate={setEndtDate}
          setName={setName}
          setType={setType}
        />
      </section>
      <section className=" px-3">
        {isLoading && <Loader />}
        {!isLoading && Loan && Loan.count > 0 && <TBLLoan Loan={Loan} />}
        {!isLoading && (!Loan || Loan.count == 0) && <NoResults />}
        <DesktopPagination
          page={currentPage}
          onPageChange={onPageChange}
          totalPages={MaxPage}
          setCurrentLimit={handleLimitChange}
        />
        <MobilePagination
          page={currentPage}
          onPageChange={onPageChange}
          totalPages={MaxPage}
          setCurrentLimit={handleLimitChange}
        />
      </section>
    </>
  );
};

export default FinishedLoans;

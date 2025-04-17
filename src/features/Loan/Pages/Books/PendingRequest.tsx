import TBLLoan from "../../Components/BooksLoans/TBLLoan";
import { useQuery } from "react-query";
import { GetPendandRequest } from "../../Services/SvBookLoan";
import { LoanResponse } from "../../Types/BookLoan";
import { useEffect, useState } from "react";
import { LoansAndCirculationCrumbs } from "../../../../components/Breadcrumbs/BreadCrumbsItems";
import { Select } from "flowbite-react";
import NoResults from "../../../../components/NoResults";
import Loader from "../../../../components/Loader";
import DesktopPagination from "../../../../components/DesktopComponents/DesktopPagination";
import MobilePagination from "../../../../components/MobileComponents/MobilePagination";

const PendingRequest = () => {
  const [currentLimit, setCurrentLimit] = useState<number>(5);
  const [type, setType] = useState("");
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("PLPage");
    return savedPage ? Number(savedPage) : 1;
  });

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("PLPage", page.toString());
  };

  useEffect(() => {
    sessionStorage.setItem("PLPage", currentPage.toString());
  }, [currentPage]);
  const { data: Loan, isLoading } = useQuery<LoanResponse, Error>(
    ["PRLoans", currentPage, currentLimit, type],
    () => GetPendandRequest(currentPage, currentLimit, "", type),
    {
      staleTime: 600,
    }
  );

  const MaxPage = Math.ceil((Loan?.count ?? 0) / currentLimit);
  useEffect(() => {
    onPageChange(1);
  }, [currentLimit, type]);
  return (
    <>
      <LoansAndCirculationCrumbs text="Solicitudes de libros" />
      <main className=" flex flex-col gap-4 px-3">
        <div className="flex">
          <div>
            <label htmlFor="Type">Préstamos del catálogo.</label>
            <Select onChange={(e) => setType(e.target.value)}>
              <option value="">Todos</option>
              <option value="INFANTIL">Infantiles</option>
              <option value="GENERAL">General</option>
            </Select>
          </div>
        </div>

        {isLoading && (
          <div className=" w-full flex items-center justify-center">
            <Loader />
          </div>
        )}

        {!isLoading && Loan && Loan.count > 0 && (
          <TBLLoan Loan={Loan} NeedAccions />
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
      </main>
    </>
  );
};

export default PendingRequest;

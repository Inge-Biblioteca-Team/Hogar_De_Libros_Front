import TBLLoan from "../../Components/BooksLoans/TBLLoan";
import { useQuery } from "react-query";
import { GetPendandRequest } from "../../Services/SvBookLoan";
import { LoanResponse } from "../../Types/BookLoan";
import { useEffect, useState } from "react";
import NoRequest from "../../Components/NoRequest";
import CustomPagination from "../../../../components/CustomPagination";
import {
  BreadCrumbsItems,
  BreadLastItems,
} from "../../../../components/Breadcrumbs/BreadCrumbsItems";

const PendingRequest = () => {
  const [currentLimit, setCurrentLimit] = useState<number>(5);
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
  const { data: Loan } = useQuery<LoanResponse, Error>(
    ["PRLoans", currentPage, currentLimit],
    () => GetPendandRequest(currentPage, currentLimit),
    {
      staleTime: 600,
    }
  );
  const MaxPage = Math.ceil((Loan?.count ?? 0) / 5);
  return (
    <>
      <BreadCrumbsItems>
        <BreadLastItems text="Solicitudes de préstamos" />
      </BreadCrumbsItems>
      {Loan && Loan.count > 0 ? (
        <div className="flex place-content-center mt-20">
          <div className="w-4/5">
            {Loan && Loan.count && <TBLLoan Loan={Loan} NeedAccions />}
            <CustomPagination
              page={currentPage}
              onPageChange={onPageChange}
              totalPages={MaxPage}
              setCurrentLimit={setCurrentLimit}
              total={Loan?.count || 0}
            />
          </div>
        </div>
      ) : (
        <NoRequest text={"No Hay Solicitudes Pendientes"} />
      )}
    </>
  );
};

export default PendingRequest;

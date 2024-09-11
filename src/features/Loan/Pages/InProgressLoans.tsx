import { Breadcrumb, Pagination } from "flowbite-react";
import {
  HomeCrumb,
  ManageCrumb,
  LoanCrumb,
  LastCrumb,
} from "../../../components/BreadCrumb";
import TBLLoan from "../Components/BooksLoans/TBLLoan";
import { useQuery } from "react-query";
import { GetInProgressLoan } from "../Services/SvBookLoan";
import { LoanResponse } from "../Types/BookLoan";
import SltCurrentLimit from "../../../components/SltCurrentLimit";
import { useEffect, useState } from "react";
import SearchInputs from "../Components/BooksLoans/SearchInputs";
import NoRequest from "../Components/NoRequest";

const InProgressLoans = () => {
  const [currentLimit, setCurrentLimit] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("currentDLoan");
    return savedPage ? Number(savedPage) : 1;
  });

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("currentPage", page.toString());
  };

  useEffect(() => {
    sessionStorage.setItem("currentPage", currentPage.toString());
  }, [currentPage]);
  
  const { data: Loan } = useQuery<LoanResponse, Error>(
    ["IPLoans", currentPage, currentLimit],
    () => GetInProgressLoan(currentPage, currentLimit),
    {
      staleTime: 600,
    }
  );

  const MaxPage = Math.ceil((Loan?.count ?? 0) / 5);
  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeCrumb />
        <ManageCrumb />
        <LoanCrumb />
        <LastCrumb CurrentPage="Prestamos en progreso" />
      </Breadcrumb>
      {Loan?.count == 0 ? (
        <NoRequest text="No Hay Prestamos En Progreso" />
      ) : (
        <div className="flex place-content-center mt-14 pb-3">
          <div className="w-4/5">
            <SearchInputs />
            {Loan && <TBLLoan Loan={Loan} NeedAccions Inprogress />}
            <div className=" w-full flex justify-between">
              <div>
                <span className=" pl-5">
                  Mostrar{" "}
                  <span>
                    <SltCurrentLimit setCurrentLimit={setCurrentLimit} />
                  </span>{" "}
                  Libros por pagina
                </span>
              </div>
              <Pagination
                nextLabel="Siguiente"
                previousLabel="Anterior"
                currentPage={currentPage}
                totalPages={MaxPage}
                onPageChange={onPageChange}
                showIcons
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InProgressLoans;

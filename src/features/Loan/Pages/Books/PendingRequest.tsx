import TBLLoan from "../../Components/BooksLoans/TBLLoan";
import { useQuery } from "react-query";
import { GetPendandRequest } from "../../Services/SvBookLoan";
import { LoanResponse } from "../../Types/BookLoan";
import { useEffect, useState } from "react";
import CustomPagination from "../../../../components/CustomPagination";
import { LoansAndCirculationCrumbs } from "../../../../components/Breadcrumbs/BreadCrumbsItems";
import { Pagination } from "flowbite-react";
import Loader from "../../../OPAC/Assets/LoaderOPAC.gif";
import NoResults from "../../../../components/NoResults";

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
  const { data: Loan, isLoading } = useQuery<LoanResponse, Error>(
    ["PRLoans", currentPage, currentLimit],
    () => GetPendandRequest(currentPage, currentLimit),
    {
      staleTime: 600,
    }
  );

  const MaxPage = Math.ceil((Loan?.count ?? 0) / 5);
  return (
    <>
      <LoansAndCirculationCrumbs text="Solicitudes de libros" />
      {isLoading ? (
        <div className=" w-full flex items-center justify-center">
          <figure>
            <img width={400} src={Loader} alt="...Cargando" />
            <figcaption className=" text-center">...Cargando</figcaption>
          </figure>
        </div>
      ) : Loan ? (
        <>
          <div className=" flex place-content-center mt-20">
            <div className="w-4/5 md:w-full md:pl-4 md:pr-4 max-sm:w-full max-sm:p-2">
              {Loan && Loan.count && <TBLLoan Loan={Loan} NeedAccions />}
              <div className="block max-sm:hidden">
                <CustomPagination
                  page={currentPage}
                  onPageChange={onPageChange}
                  totalPages={MaxPage}
                  setCurrentLimit={setCurrentLimit}
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
            </div>
          </div>
        </>
      ) : (
        <NoResults />
      )}
    </>
  );
};

export default PendingRequest;

import TBLLoan from "../../Components/BooksLoans/TBLLoan";
import { useQuery } from "react-query";
import { GetDoneLoans } from "../../Services/SvBookLoan";
import { LoanResponse } from "../../Types/BookLoan";
import { useEffect, useState } from "react";
import FinishedLoanSearch from "../../Components/BooksLoans/FinishedLoanSearch";
import UseDebounce from "../../../../hooks/UseDebounce";
import { LoansCrumbs } from "../../../../components/Breadcrumbs/BreadCrumbsItems";
import CustomPagination from "../../../../components/CustomPagination";
import NoResults from "../../../../components/NoResults";
import Loader from "../../../OPAC/Assets/LoaderOPAC.gif";

const FinishedLoans = () => {
  const [currentLimit, setCurrentLimit] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("DLPage");
    return savedPage ? Number(savedPage) : 1;
  });

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
  const [SignaCode, setSignaCode] = useState<string>("");

  const SName = UseDebounce(Name, 1000);
  const sSignaCode = UseDebounce(SignaCode, 1000);

  const { data: Loan, isLoading } = useQuery<LoanResponse, Error>(
    [
      "DLoans",
      currentPage,
      currentLimit,
      StartDate,
      EndDate,
      SName,
      sSignaCode,
    ],
    () =>
      GetDoneLoans(
        currentPage,
        currentLimit,
        StartDate,
        EndDate,
        "",
        SName,
        sSignaCode
      ),
    {
      staleTime: 600,
    }
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [StartDate, EndDate, SName, sSignaCode]);

  const MaxPage = Math.ceil((Loan?.count ?? 0) / 5);
  return (
    <>
      <LoansCrumbs text="Libros" />
      <div className="flex place-content-center mt-14">
        <div className="w-4/5 md:w-full md:pr-4 md:pl-4">
          <FinishedLoanSearch
            setStartDate={setStartDate}
            setEndtDate={setEndtDate}
            setName={setName}
            setSignaCode={setSignaCode}
          />
          {isLoading ? (
            <div className=" w-full flex items-center justify-center">
              <figure>
                <img width={400} src={Loader} alt="...Cargando" />
                <figcaption className=" text-center">...Cargando</figcaption>
              </figure>
            </div>
          ) : Loan && Loan.data.length > 0 ? (
            <>{Loan && <TBLLoan Loan={Loan} />}</>
          ) : (
            <NoResults />
          )}
          <CustomPagination
            page={currentPage}
            onPageChange={onPageChange}
            totalPages={MaxPage}
            setCurrentLimit={setCurrentLimit}
            total={Loan?.count || 0}
          />
        </div>
      </div>
    </>
  );
};

export default FinishedLoans;

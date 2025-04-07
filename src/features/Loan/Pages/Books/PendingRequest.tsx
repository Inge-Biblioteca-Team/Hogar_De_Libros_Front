import TBLLoan from "../../Components/BooksLoans/TBLLoan";
import { useQuery } from "react-query";
import { GetPendandRequest } from "../../Services/SvBookLoan";
import { LoanResponse } from "../../Types/BookLoan";
import { useEffect, useState } from "react";
import CustomPagination from "../../../../components/CustomPagination";
import { LoansAndCirculationCrumbs } from "../../../../components/Breadcrumbs/BreadCrumbsItems";
import { Pagination, Select } from "flowbite-react";
import Loader from "../../../OPAC/Assets/LoaderOPAC.gif";
import NoResults from "../../../../components/NoResults";

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
    () => GetPendandRequest(currentPage, currentLimit,"",type),
    {
      staleTime: 600,
    }
  );

  const MaxPage = Math.ceil((Loan?.count ?? 0) / 5);
  useEffect(() => {
    onPageChange(1);
  }, [currentLimit, type]);
  return (
    <>
      <LoansAndCirculationCrumbs text="Solicitudes de libros" />
      <div className=" flex place-content-center">
        <div className="w-4/5 md:w-full md:pl-4 md:pr-4 max-sm:w-full max-sm:p-2 space-y-4">
          <div className=" flex">
            <div>
              <label htmlFor="Type">Préstamos del catálogo.</label>
              <Select onChange={(e) => setType(e.target.value)}>
                <option value="">Todos</option>
                <option value="INFANTIL">Infantiles</option>
                <option value="GENERAL">General</option>
              </Select>
            </div>
          </div>
          {isLoading ? (
            <div className=" w-full flex items-center justify-center">
              <figure>
                <img width={400} src={Loader} alt="...Cargando" />
                <figcaption className=" text-center">...Cargando</figcaption>
              </figure>
            </div>
          ) : Loan ? (
            <>
              {Loan && Loan.count > 0 && <TBLLoan Loan={Loan} NeedAccions />}
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
            </>
          ) : (
            <NoResults />
          )}
        </div>
      </div>
    </>
  );
};

export default PendingRequest;

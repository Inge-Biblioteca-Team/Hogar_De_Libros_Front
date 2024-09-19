import { Breadcrumb } from "flowbite-react";
import {
  HomeCrumb,
  LastCrumb,
  LoanCrumb,
  ManageCrumb,
} from "../../../../components/BreadCrumb";
import TBLLoan from "../../Components/BooksLoans/TBLLoan";
import { useQuery } from "react-query";
import { GetPendandRequest } from "../../Services/SvBookLoan";
import { LoanResponse } from "../../Types/BookLoan";
import { useEffect, useState } from "react";
import SltCurrentLimit from "../../../../components/SltCurrentLimit";
import PaginatationSelector from "../../../../components/PaginatationSelector";
import NoRequest from "../../Components/NoRequest";

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
      <Breadcrumb className="custom-breadcrumb">
        <HomeCrumb />
        <ManageCrumb />
        <LoanCrumb />
        <LastCrumb CurrentPage="Solicitudes Pendientes" />
      </Breadcrumb>
      {Loan?.count == 0 ? (
        <NoRequest text={"No Hay Solicitudes Pendientes"} />
      ) : (
        <div className="flex place-content-center mt-20">
          <div className="w-4/5">
            {Loan && <TBLLoan Loan={Loan} NeedAccions />}
            <div className=" w-full flex justify-between">
              <div>
                <span className=" pl-5">
                  Mostrar{" "}
                  <span>
                    <SltCurrentLimit setCurrentLimit={setCurrentLimit} />
                  </span>{" "}
                  Solicitudes por pagina
                </span>
              </div>
              <PaginatationSelector
                totalPages={MaxPage}
                currentPage={currentPage}
                onPageChange={onPageChange}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PendingRequest;

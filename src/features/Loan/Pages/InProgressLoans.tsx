import { Breadcrumb } from "flowbite-react";
import {
  HomeCrumb,
  ManageCrumb,
  LoanCrumb,
  LastCrumb,
} from "../../../components/BreadCrumb";
import TBLLoan from "../Components/Tables/TBLLoan";
import { useQuery } from "react-query";
import { GetInProgressLoan } from "../Services/SvBookLoan";
import { LoanResponse } from "../Types/BookLoan";
import PaginatationSelector from "../../../components/PaginatationSelector";
import SltCurrentLimit from "../../../components/SltCurrentLimit";
import { useEffect, useState } from "react";

const InProgressLoans = () => {
  const { data: Loan } = useQuery<LoanResponse, Error>(
    ["IPLoans"],
    () => GetInProgressLoan(),
    {
      staleTime: 600,
    }
  );

  const [currentLimit, setCurrentLimit] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("currentDLoan");
    return savedPage ? Number(savedPage) : 1;
  });

  const MaxPage = Math.ceil((Loan?.count ?? 0) / 5);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("currentPage", page.toString());
  };

  useEffect(() => {
    sessionStorage.setItem("currentPage", currentPage.toString());
  }, [currentPage]);
  
  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeCrumb />
        <ManageCrumb />
        <LoanCrumb />
        <LastCrumb CurrentPage="Prestamos en progreso" />
      </Breadcrumb>
      <div className="flex place-content-center mt-20">
        <div className="w-4/5">
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
            <PaginatationSelector
              totalPages={MaxPage}
              currentPage={currentPage}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InProgressLoans;

import { Breadcrumb } from "flowbite-react";
import DoneLoan from "../../Loan/Components/UserLoans/DoneLoan";
import LoanCard from "../../Loan/Components/UserLoans/RequestLoan";
import ProgressLoan from "../../Loan/Components/UserLoans/ProgressLoan";
import { HomeCrumb, LastCrumb } from "../../../components/BreadCrumb";

const MyLoanHIstory = () => {
  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeCrumb />
        <LastCrumb CurrentPage="Mis Solicitudes" />
      </Breadcrumb>
      <div className="w-full flex items-center justify-center">
        <div className=" w-4/5 grid grid-rows-3 gap-6 text-center items-center justify-center">
          <LoanCard />
          <ProgressLoan />
          <DoneLoan />
        </div>
      </div>
    </>
  );
};

export default MyLoanHIstory;

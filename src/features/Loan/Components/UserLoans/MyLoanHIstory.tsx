import { Breadcrumb } from "flowbite-react";
import DoneLoan from "./DoneLoan";
import LoanCard from "./RequestLoan";
import ProgressLoan from "./ProgressLoan";
import { HomeCrumb, LastCrumb } from "../../../../components/BreadCrumb";

const MyLoanHIstory = () => {
  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeCrumb />
        <LastCrumb CurrentPage="Mis Solicitudes" />
      </Breadcrumb>
      <div className="w-full flex items-center justify-center mt-3">
        <div className=" w-4/5 grid grid-cols-1 text-center items-center justify-center gap-4">
          <div className=" grid grid-cols-2 gap-3">
          <LoanCard />
          <ProgressLoan />
          </div>
          <DoneLoan />
        </div>
      </div>
    </>
  );
};

export default MyLoanHIstory;

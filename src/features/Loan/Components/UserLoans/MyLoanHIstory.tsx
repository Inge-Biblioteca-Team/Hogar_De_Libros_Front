import DoneLoan from "./DoneLoan";
import LoanCard from "./RequestLoan";
import ProgressLoan from "./ProgressLoan";
import {ProfileCrumbs } from "../../../../components/Breadcrumbs/BreadCrumbsItems";

const MyLoanHIstory = () => {
  return (
    <>
    <ProfileCrumbs text="Mis prestamos"/>
      <div className="w-full max-sm:w-4/5 flex flex-col items-center justify-center pt-1">
        <div className=" w-4/5 grid grid-cols-1 text-center items-center justify-center gap-4">
          <div className=" grid md:grid-cols-1 grid-cols-2 gap-3 max-sm:grid-cols-1">
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

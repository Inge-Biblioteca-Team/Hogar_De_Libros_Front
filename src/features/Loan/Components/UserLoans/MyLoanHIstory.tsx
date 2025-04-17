import DoneLoan from "./DoneLoan";
import LoanCard from "./RequestLoan";
import ProgressLoan from "./ProgressLoan";
import { ProfileCrumbs } from "../../../../components/Breadcrumbs/BreadCrumbsItems";

const MyLoanHIstory = () => {
  return (
    <>
      <ProfileCrumbs text="Mis préstamos" />
      <div className="w-full max-lg:w-full flex flex-col items-center justify-center pt-1">
        <div className="w-full max-lg:pl-2 max-lg:pr-2 pr-12 pl-12 grid grid-cols-1 text-center items-center justify-center gap-4">
          <div className=" grid grid-cols-2 max-lg:grid-cols-1 gap-3 ">
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

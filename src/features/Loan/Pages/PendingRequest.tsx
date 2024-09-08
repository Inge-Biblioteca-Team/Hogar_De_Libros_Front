import { Breadcrumb } from "flowbite-react";
import {
  HomeCrumb,
  LastCrumb,
  LoanCrumb,
  ManageCrumb,
} from "../../../components/BreadCrumb";
import TBLLoan from "../Components/Tables/TBLLoan";

const PendingRequest = () => {
  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeCrumb />
        <ManageCrumb />
        <LoanCrumb />
        <LastCrumb CurrentPage="Solicitudes Pendientes" />
      </Breadcrumb>
      <div className="flex place-content-center">
        <div className="w-4/5">
          <TBLLoan NeedAccions={true} Inprogress={false} />
        </div>
      </div>
    </>
  );
};

export default PendingRequest;

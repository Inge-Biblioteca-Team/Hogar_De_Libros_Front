import { Breadcrumb } from "flowbite-react"
import { HomeCrumb, ManageCrumb, LoanCrumb, LastCrumb } from "../../../components/BreadCrumb"
import TBLLoan from "../Components/Tables/TBLLoan"

const InProgressLoans = () => {
  return (
    <>
     <Breadcrumb className="custom-breadcrumb">
        <HomeCrumb />
        <ManageCrumb />
        <LoanCrumb />
        <LastCrumb CurrentPage="Prestamos en progreso" />
      </Breadcrumb>
      <div className="flex place-content-center">
        <div className="w-4/5">
          <TBLLoan NeedAccions={true} Inprogress={true} />
        </div>
      </div> 
    </>
  )
}

export default InProgressLoans

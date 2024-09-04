import { Breadcrumb } from "flowbite-react"
import { HomeCrumb, ManageCrumb, LoanCrumb, LastCrumb } from "../../../components/BreadCrumb"
import TBLLoan from "../Components/Tables/TBLLoan"

const FinishedLoans = () => {
  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeCrumb />
        <ManageCrumb />
        <LoanCrumb />
        <LastCrumb CurrentPage="Prestamos Finalizados" />
      </Breadcrumb> 
      <div className="flex place-content-center">
        <div className="w-4/5">
      <TBLLoan NeedAccions={false} Inprogress={false}/>
        </div>
      </div>
    </>
  )
}

export default FinishedLoans

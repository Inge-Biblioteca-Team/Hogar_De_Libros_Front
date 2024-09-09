import { Breadcrumb } from "flowbite-react"
import DoneLoan from "../Components/DoneLoan"
import LoanCard from "../Components/LoanCard"
import ProgressLoan from "../Components/ProgressLoan"
import { HomeCrumb, LastCrumb } from "../../../components/BreadCrumb"

const MyLoanHIstory = () => {
  return (
    <>
    <Breadcrumb className="custom-breadcrumb">
    <HomeCrumb/>
    <LastCrumb CurrentPage="Mis Solicitudes"/>
    </Breadcrumb>
    <div className="flex flex-wrap gap-4 mt-20">
      <LoanCard />
      <ProgressLoan />
      <DoneLoan />
    </div>
    </>
  )
}

export default MyLoanHIstory

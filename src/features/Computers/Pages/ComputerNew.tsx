import { Breadcrumb, Card } from "flowbite-react"
import FormAddComputer from "../components/FormAddComputer"
import { HomeCrumb, LastCrumb, ManageCrumb } from "../../../components/BreadCrumb"
import { EquipmentCrumb } from "../components/Redirections"

const ComputerNew =() =>{

  return(
    <>
    <Breadcrumb className="custom-breadcrumb">
      <HomeCrumb/>
      <ManageCrumb/>
      <EquipmentCrumb/>
      <LastCrumb CurrentPage="Añadir Equipo de computo"/>
      </Breadcrumb>
    <div className="pt-20">
      <Card className="max-w-fit mx-auto bg-gray-100 p-5">
      <FormAddComputer/>
      </Card>
    </div>
    </>
  )
}

export default ComputerNew
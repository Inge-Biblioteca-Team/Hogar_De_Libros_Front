import { Breadcrumb, Card } from "flowbite-react"
import FormAddComputer from "../components/FormAddComputer"
import {HomeComputerRouter,ManagerRouter, NwComputerRouter } from "../components/Redirections"

const ComputerNew =() =>{

  return(
    <>
    <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 px-5 py-3 dark:bg-gray-800">
      <HomeComputerRouter/>
      <ManagerRouter/>
      <NwComputerRouter/>
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
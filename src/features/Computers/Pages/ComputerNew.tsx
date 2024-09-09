import { Breadcrumb, Card } from "flowbite-react";
import FormAddComputer from "../components/FormAddComputer";
import {
  HomeCrumb,
  LastCrumb,
  ManageCrumb,
  ManageCrumbObj,
} from "../../../components/BreadCrumb";
const ComputerNew = () => {
  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeCrumb />
        <ManageCrumb />
        <ManageCrumbObj Objetive="Equipo De Computo" LK="Equipos"/>
        <LastCrumb CurrentPage="Añadir Equipo de computo" />
      </Breadcrumb>
      <div className="pt-20">
        <Card className="max-w-fit mx-auto bg-gray-100 p-5">
          <FormAddComputer />
        </Card>
      </div>
    </>
  );
};

export default ComputerNew;

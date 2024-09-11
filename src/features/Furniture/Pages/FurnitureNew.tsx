import { Breadcrumb, Card } from "flowbite-react";
import {
  HomeCrumb,
  LastCrumb,
  ManageCrumb,
  ManageCrumbObj,
} from "../../../components/BreadCrumb";
import FormaddFurniture from "../Components/Forms/FormaddFurniture";
const ComputerNew = () => {
  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeCrumb />
        <ManageCrumb />
        <ManageCrumbObj Objetive="Mobiliario" LK="Nuevo"/>
        <LastCrumb CurrentPage="Añadir Mobiliario" />
      </Breadcrumb>
      <div className="pt-20">
        <Card className="max-w-fit mx-auto bg-gray-100 p-5">
          <FormaddFurniture />
        </Card>
      </div>
    </>
  );
};

export default ComputerNew;
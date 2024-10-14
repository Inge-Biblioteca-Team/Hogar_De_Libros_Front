import { Breadcrumb, Button, Label, Select, TextInput } from "flowbite-react";
import { HomeCrumb, LastCrumb } from "../../../components/BreadCrumb";
import AdviceTable from "../Components/AdviceTable";
import { useState } from "react";
import NewAdvice from "../Components/Modals/NewAdvice";
import OptAdviceCategory from "../Components/OptAdviceCategory";

const AdviceManage = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeCrumb />
        <LastCrumb CurrentPage="Avisos Importantes" />
      </Breadcrumb>
      <main className=" flex items-center justify-center w-full flex-col gap-5 mt-8">
        <section className="w-4/5 flex justify-between items-end">
          <div className=" flex gap-6">
            <div>
              <Label value="Fecha de Actividad" />
              <TextInput type="date" />
            </div>
            <div>
              <Label value="Categoria" />
              <Select>
                <OptAdviceCategory/>
              </Select>
            </div>
          </div>
          <Button color={"blue"} onClick={() => setOpen(true)}>
            {" "}
            Agregar Nuevo Aviso
          </Button>
        </section>
        <section className=" w-4/5">
          <AdviceTable />
        </section>
      </main>
      <NewAdvice open={open} setOpen={setOpen} />
    </>
  );
};

export default AdviceManage;

import { Breadcrumb, Button, Label, Select, TextInput } from "flowbite-react";
import { HomeCrumb, LastCrumb } from "../../../components/BreadCrumb";
import AdviceTable from "../Components/AdviceTable";
import { useState } from "react";
import NewAdvice from "../Components/Modals/NewAdvice";
import OptAdviceCategory from "../Components/OptAdviceCategory";
import { useQuery } from "react-query";
import { ApiAdvices } from "../Types/Advice";
import { GetAdviceList } from "../Service/SvAdvice";
import PaginatationSelector from "../../../components/Paginations/PaginatationSelector";
import SltCurrentLimit from "../../../components/Paginations/SltCurrentLimit";
import UseDebounce from "../../../hooks/UseDebounce";

const AdviceManage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [page, setPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("ProgramsPages");
    return savedPage ? Number(savedPage) : 1;
  });
  const [limit, setLimit] = useState<number>(5);

  const [category, setCategory] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [reason, setReason] = useState<string>("");

  const reasonS = UseDebounce(reason, 200);

  const { data: Advices } = useQuery<ApiAdvices, Error>(
    ["AdvicesList", page, limit, category, date, reasonS],
    () => GetAdviceList(page, limit, reasonS, category, date),
    {
      staleTime: 600,
    }
  );
  const onPageChange = (page: number) => {
    setPage(page);
    sessionStorage.setItem("Adviceage", page.toString());
  };

  const MaxPage = Math.ceil((Advices?.count ?? 0) / limit);

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
              <TextInput
                type="date"
                onChange={(e) => (setDate(e.target.value), setPage(1))}
              />
            </div>
            <div>
              <Label value="Categoría" />
              <Select
                onChange={(e) => (setCategory(e.target.value), setPage(1))}
              >
                <OptAdviceCategory />
              </Select>
            </div>
            <div>
              <Label value="Motivo" />
              <TextInput
                placeholder="Motivo del aviso"
                onChange={(e) => (setReason(e.target.value), setPage(1))}
              />
            </div>
          </div>
          <Button color={"blue"} onClick={() => setOpen(true)}>
            {" "}
            Agregar Nuevo Aviso
          </Button>
        </section>
        <section className=" w-4/5">
          {Advices && <AdviceTable advices={Advices} />}
          <div className=" flex justify-between">
            <span className="pl-5">
              Mostrar{" "}
              <span>
                <SltCurrentLimit setCurrentLimit={setLimit} />
              </span>{" "}
              Avisos por página
            </span>
            <PaginatationSelector
              currentPage={page}
              onPageChange={onPageChange}
              totalPages={MaxPage}
            />
          </div>
        </section>
      </main>
      <NewAdvice open={open} setOpen={setOpen} />
    </>
  );
};

export default AdviceManage;

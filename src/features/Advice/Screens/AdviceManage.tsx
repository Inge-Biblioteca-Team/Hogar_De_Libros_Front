import { Button, Label, Select, TextInput } from "flowbite-react";
import AdviceTable from "../Components/AdviceTable";
import { useState } from "react";
import NewAdvice from "../Components/Modals/NewAdvice";
import OptAdviceCategory from "../Components/OptAdviceCategory";
import { useQuery } from "react-query";
import { ApiAdvices } from "../Types/Advice";
import { GetAdvice } from "../Service/SvAdvice";
import UseDebounce from "../../../hooks/UseDebounce";
import {
  BreadCrumbsItems,
  BreadLastItems,
} from "../../../components/Breadcrumbs/BreadCrumbsItems";
import CustomPagination from "../../../components/CustomPagination";
import { Pagination } from "flowbite-react";

const AdviceManage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [page, setPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("AdvicePages");
    return savedPage ? Number(savedPage) : 1;
  });
  const [limit, setLimit] = useState<number>(5);

  const [category, setCategory] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [reason, setReason] = useState<string>("");

  const reasonS = UseDebounce(reason, 200);

  const { data: Advices } = useQuery<ApiAdvices, Error>(
    ["AdvicesList", page, limit, category, date, reasonS],
    () => GetAdvice(page, limit, reasonS, category, date),
    {
      staleTime: 600,
    }
  );
  const onPageChange = (page: number) => {
    setPage(page);
    sessionStorage.setItem("AdvicePages", page.toString());
  };

  const MaxPage = Math.ceil((Advices?.count ?? 0) / limit);

  return (
    <>
      <BreadCrumbsItems>
        <BreadLastItems text="Avisos importantes" />
      </BreadCrumbsItems>
      <main className="flex items-center justify-center w-full flex-col gap-5 ">
        <section className=" w-4/5 flex md:gap-8 md:flex-col max-sm:flex-col max-sm:gap-4 max-sm:items-center justify-between items-end max-sm:w-full max-sm:px-2">
          <div className=" flex md:flex-col md:w-full max-sm:w-full max-sm:flex-col gap-6">
            <div>
              <Label value="Fecha de actividad" />
              <TextInput
                type="date"
                onChange={(e) => (setDate(e.target.value), setPage(1))}
              />
            </div>
            <div className=" ">
              <Label value="Categoría" />
              <Select
                onChange={(e) => (setCategory(e.target.value), setPage(1))}
              >
                <OptAdviceCategory />
              </Select>
            </div>
            <div className=" ">
              <Label value="Motivo" />
              <TextInput
                placeholder="Motivo del aviso"
                onChange={(e) => (setReason(e.target.value), setPage(1))}
              />
            </div>
          </div>
          <Button
            className="md:w-full max-sm:w-full"
            color={"blue"}
            onClick={() => setOpen(true)}
          >
            Agregar nuevo aviso
          </Button>
        </section>
        <section className=" w-4/5 max-sm:w-full max-sm:px-2">
          {Advices && (
            <>
              <AdviceTable advices={Advices} />
              <div className="block max-sm:hidden">
                <CustomPagination
                  page={page}
                  onPageChange={onPageChange}
                  totalPages={MaxPage}
                  setCurrentLimit={setLimit}
                  total={Advices.count}
                />
              </div>

              <div className="sm:hidden  flex justify-center ">
                <Pagination
                  layout="navigation"
                  currentPage={page}
                  totalPages={MaxPage}
                  onPageChange={onPageChange}
                />
              </div>
            </>
          )}
        </section>
      </main>
      <NewAdvice open={open} setOpen={setOpen} />
    </>
  );
};

export default AdviceManage;

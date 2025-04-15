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
import NoResults from "../../../components/NoResults";
import Loader from "../Components/Loader";
import MobilePagination from "../../../components/MobileComponents/MobilePagination";
import DesktopPagination from "../../../components/DesktopComponents/DesktopPagination";

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

  const { data: Advices, isLoading } = useQuery<ApiAdvices, Error>(
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
        <section
          className="w-full px-3 flex items-end justify-between gap-2
          max-md:flex-col"
        >
          <div className=" flex gap-x-1 max-md:flex-col max-md:w-full">
            <div>
              <Label value="Fecha de actividad" />
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
          <Button
            className="dark:bg-[#2d2d2d] max-md:w-full"
            color={"blue"}
            onClick={() => setOpen(true)}
          >
            Agregar nuevo aviso
          </Button>
        </section>
        <section className=" w-full px-3 pb-4">
          {isLoading && (
            <div className=" w-full flex items-center justify-center">
              <Loader />
            </div>
          )}
          {Advices && Advices.count > 0 && <AdviceTable advices={Advices} />}
          {(!Advices || Advices.count === 0) && <NoResults />}
          <DesktopPagination
            page={page}
            onPageChange={onPageChange}
            totalPages={MaxPage}
            setCurrentLimit={setLimit}
          />
          <MobilePagination
            page={page}
            onPageChange={onPageChange}
            totalPages={MaxPage}
            setCurrentLimit={setLimit}
          />
        </section>
      </main>
      <NewAdvice open={open} setOpen={setOpen} />
    </>
  );
};

export default AdviceManage;

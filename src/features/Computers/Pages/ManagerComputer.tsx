import { Button, Table } from "flowbite-react";
import { useState } from "react";
import { apiResponseCE } from "../types/Computer";
import { GetComputerPaginated } from "../Services/SvComputer";
import { useQuery } from "react-query";
import AdminAdvancedSearchComp from "../components/AdminAvdvaceSearchComp";
import BtnAdminAdSearchCm from "../components/BtnAdSerchCm";
import UseDebounce from "../../../hooks/UseDebounce";

import TblRows from "../components/TblRows";
import NewComponent from "../components/Modals/NewComponent";
import { BreadCrumbManage } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import CustomPagination from "../../../components/CustomPagination";

const ManagerComputer = () => {
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("MCPage");
    return savedPage ? Number(savedPage) : 1;
  });
  const [currentLimit, setCurrentLimit] = useState<number>(5);
  const [advance, setAdvance] = useState<boolean>(false);
  const [sNew, setSNew] = useState<boolean>(false);
  const [searchMNum, setSearMNum] = useState<string>("");
  const searchMNumDealy = UseDebounce(searchMNum, 1000);
  const [searchEBrand, setSearEBrand] = useState<string>("");
  const searchEBrandDelay = UseDebounce(searchEBrand, 1000);
  const [searchECategory, setSearECategory] = useState<string>("");
  const searchECategoryDelay = UseDebounce(searchECategory, 1000);
  const [searchEStatus, setSearEStatus] = useState<string>("");
  const searchEStatusDelay = UseDebounce(searchEStatus, 1000);
  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("MCPage", page.toString());
  };
  const viewAdvanceSerchComp = () => setAdvance(!advance);

  const { data: computers } = useQuery<apiResponseCE, Error>(
    [
      "EquipCatalog",
      currentPage,
      currentLimit,
      searchMNumDealy,
      searchEBrandDelay,
      searchECategoryDelay,
      searchEStatusDelay,
    ],
    () =>
      GetComputerPaginated(
        currentPage,
        currentLimit,
        searchMNumDealy,
        searchEBrandDelay,
        searchECategoryDelay,
        searchEStatusDelay
      ),
    {
      staleTime: 600,
    }
  );

  const MaxPage = Math.ceil((computers?.count ?? 0) / currentLimit);

  return (
    <>
      <BreadCrumbManage text="Equipo de computo" />
      <div className=" flex w-full place-content-center mt-5">
        <div className=" w-5/6 flex flex-col gap-4">
          <div className=" flex justify-between">
            <div className="flex gap-2">
              <AdminAdvancedSearchComp
                see={advance}
                EBrand={setSearEBrand}
                ECategory={setSearECategory}
                EStatus={setSearEStatus}
              />
              <BtnAdminAdSearchCm click={viewAdvanceSerchComp} icon={advance} />
            </div>
            <Button color={"blue"} onClick={() => setSNew(true)}>
              Añadir Equipo
            </Button>
          </div>
          <Table hoverable className="text-center">
            <Table.Head className=" h-16">
              <Table.HeadCell>Número de Máquina</Table.HeadCell>
              <Table.HeadCell>Categoría</Table.HeadCell>
              <Table.HeadCell>Marca</Table.HeadCell>
              <Table.HeadCell>Serial</Table.HeadCell>
              <Table.HeadCell>Estado</Table.HeadCell>
              <Table.HeadCell></Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {computers?.data.map((computers) => (
                <>
                  <TblRows
                    key={computers.EquipmentUniqueCode}
                    computers={computers}
                  />
                </>
              ))}
            </Table.Body>
          </Table>
          <CustomPagination
            page={currentPage}
            onPageChange={onPageChange}
            totalPages={MaxPage}
            setCurrentLimit={setCurrentLimit}
            total={computers?.count || 0}
          />
        </div>
      </div>
      <NewComponent sNew={sNew} setSNew={setSNew} />
    </>
  );
};

export default ManagerComputer;

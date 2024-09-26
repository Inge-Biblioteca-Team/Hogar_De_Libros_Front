import { Breadcrumb, Button, Table } from "flowbite-react";
import { useState } from "react";
import { apiResponseCE } from "../types/Computer";
import SltCurrentLimit from "../../../components/SltCurrentLimit";
import { GetComputerPaginated } from "../Services/SvComputer";
import { useQuery } from "react-query";
import AdminAdvancedSearchComp from "../components/AdminAvdvaceSearchComp";
import BtnAdminAdSearchCm from "../components/BtnAdSerchCm";
import UseDebounce from "../../../hooks/UseDebounce";
import {
  HomeCrumb,
  LastCrumb,
  ManageCrumb,
} from "../../../components/BreadCrumb";
import PaginatationSelector from "../../../components/PaginatationSelector";
import InpSearchTitle from "../../../components/InpSearchTitle";
import TblRows from "../components/TblRows";
import NewComponent from "../components/Modals/NewComponent";

const ManagerComputer = () => {
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("MCPage");
    return savedPage ? Number(savedPage) : 1;
  });
  const [currentLimit, setCurrentLimit] = useState<number>(5);
  const [advance, setAdvance] = useState<boolean>(false);
  const[sNew, setSNew] = useState<boolean>(false)
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
      <Breadcrumb className="custom-breadcrumb">
        <HomeCrumb />
        <ManageCrumb />
        <LastCrumb CurrentPage="Equipo De Cómputo" />
      </Breadcrumb>
      <div className=" flex w-full place-content-center mt-5">
        <div className=" w-5/6 flex flex-col gap-4">
          <div className=" flex justify-between">
            <div className="flex gap-2">
              <InpSearchTitle Criterio="# Maquina" onSearch={setSearMNum} />
              <AdminAdvancedSearchComp
                see={advance}
                EBrand={setSearEBrand}
                ECategory={setSearECategory}
                EStatus={setSearEStatus}
              />
              <BtnAdminAdSearchCm click={viewAdvanceSerchComp} icon={advance} />
            </div>
            <Button color={"blue"} onClick={()=>setSNew(true)}>Añadir Equipo</Button>
          </div>
          <Table
            hoverable
            className="felx items-center justify-center text-center"
          >
            <Table.Head className=" h-16">
              <Table.HeadCell>Número de Maquina</Table.HeadCell>
              <Table.HeadCell>Categoría</Table.HeadCell>
              <Table.HeadCell>Marca</Table.HeadCell>
              <Table.HeadCell>Serial</Table.HeadCell>
              <Table.HeadCell>Estado</Table.HeadCell>
              <Table.HeadCell></Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {computers?.data.map((computers) => (
                <>
                  <TblRows key={computers.EquipmentUniqueCode} computers={computers} />
                </>
              ))}
            </Table.Body>
          </Table>
          <div className=" w-full flex justify-between">
            <div>
              <span className=" pl-5">
                Mostrar{" "}
                <span>
                  <SltCurrentLimit setCurrentLimit={setCurrentLimit} />
                </span>{" "}
                Libros por pagina
              </span>
            </div>
            <PaginatationSelector
              totalPages={MaxPage}
              currentPage={currentPage}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </div>
      <NewComponent sNew={sNew} setSNew={setSNew} />
    </>
  );
};

export default ManagerComputer;

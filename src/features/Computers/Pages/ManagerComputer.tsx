import { Breadcrumb, Table } from "flowbite-react";
import { useState } from "react";
import { apiResponseCE } from "../types/Computer";
import SltCurrentLimit from "../../../components/SltCurrentLimit";
import { GetComputerPaginated } from "../Services/SvComputer";
import { useQuery } from "react-query";
import AdminAdvancedSearchComp from "../components/AdminAvdvaceSearchComp";
import BtnAdminAdSearchCm from "../components/BtnAdSerchCm";
import EquipmentAccionBTNS from "../components/EquipmentAccionBTNS";
import UseDebounce from "../../../hooks/UseDebounce";
import {
  HomeCrumb,
  LastCrumb,
  ManageCrumb,
} from "../../../components/BreadCrumb";
import CreateNewActive from "../../../components/CreateNewActive";
import PaginatationSelector from "../../../components/PaginatationSelector";
import InpSearchTitle from "../../../components/InpSearchTitle";

const ManagerComputer = () => {
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("currentPage");
    return savedPage ? Number(savedPage) : 1;
  });
  const [currentLimit, setCurrentLimit] = useState<number>(5);
  const [advance, setAdvance] = useState<boolean>(false);

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
    sessionStorage.setItem("currentPage", page.toString());
  };
  const viewAdvanceSerchComp = () => setAdvance(!advance);

  const { data: computers } = useQuery<apiResponseCE, Error>(
    [
      "Computer",
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
      keepPreviousData: true,
      staleTime: 600,
    }
  );

  const MaxPage = (computers?.count ?? 0) / currentLimit;

  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeCrumb />
        <ManageCrumb />
        <LastCrumb CurrentPage="Equipo De Computo" />
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
            <CreateNewActive objetive="Equipo" />
          </div>
          <Table
            hoverable
            className="felx items-center justify-center text-center"
          >
            <Table.Head className=" h-16">
              <Table.HeadCell>Número de Maquina</Table.HeadCell>
              <Table.HeadCell>Categoria</Table.HeadCell>
              <Table.HeadCell>Marca</Table.HeadCell>
              <Table.HeadCell>Serial</Table.HeadCell>
              <Table.HeadCell>Estado</Table.HeadCell>
              <Table.HeadCell></Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {computers?.data.map((computers) => (
                <Table.Row
                  key={computers.EquipmentUniqueCode}
                  className=" h-24"
                >
                  <Table.Cell className=" w-52">
                    {computers.MachineNumber}
                  </Table.Cell>
                  <Table.Cell className="w-52">
                    {computers.EquipmentCategory}
                  </Table.Cell>
                  <Table.Cell className="w-44 ">
                    {computers.EquipmentBrand}
                  </Table.Cell>
                  <Table.Cell className="w-64">
                    {computers.EquipmentSerial}
                  </Table.Cell>
                  <Table.Cell className="w-64">
                    {computers.Status ? "Activo" : "Inactivo"}
                  </Table.Cell>
                  <Table.Cell>
                  <EquipmentAccionBTNS
                    Code={computers.EquipmentUniqueCode}
                    Serial={computers.EquipmentSerial}
                    />
                    </Table.Cell>
                </Table.Row>
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
    </>
  );
};

export default ManagerComputer;

import { Button, Label, Select, Table, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { apiResponseCE } from "../types/Computer";
import { GetComputerPaginated } from "../Services/SvComputer";
import { useQuery } from "react-query";
import UseDebounce from "../../../hooks/UseDebounce";
import TblRows from "../components/TblRows";
import NewComponent from "../components/Modals/NewComponent";
import { BreadCrumbManage } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import NoResults from "../../../components/NoResults";
import OPTCategoryEquipment from "../components/OPTCategoryEquipment";
import MobilePagination from "../../../components/MobileComponents/MobilePagination";
import DesktopPagination from "../../../components/DesktopComponents/DesktopPagination";
import Loader from "../../../components/Loader";

const ManagerComputer = () => {
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("MCPage");
    return savedPage ? Number(savedPage) : 1;
  });
  const [currentLimit, setCurrentLimit] = useState<number>(5);
  const [sNew, setSNew] = useState<boolean>(false);
  const [searchMNum, setMNum] = useState<string>("");
  const [searchEBrand, setEBrand] = useState<string>("");
  const [searchECategory, setECategory] = useState<string>("");
  const [searchEStatus, setEStatus] = useState<string>("");
  const searchMNumDealy = UseDebounce(searchMNum, 1000);
  const searchEBrandDelay = UseDebounce(searchEBrand, 1000);
  const searchECategoryDelay = UseDebounce(searchECategory, 1000);
  
  useEffect(() => {
    setCurrentPage(1);
  }, [
    currentLimit,
    searchMNumDealy,
    searchEBrandDelay,
    searchECategoryDelay,
    searchEStatus,
  ]);
  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("MCPage", page.toString());
  };

  const { data: computers, isLoading } = useQuery<apiResponseCE, Error>(
    [
      "EquipCatalog",
      currentPage,
      currentLimit,
      searchMNumDealy,
      searchEBrandDelay,
      searchECategoryDelay,
      searchEStatus,
    ],
    () =>
      GetComputerPaginated(
        currentPage,
        currentLimit,
        searchMNumDealy,
        searchEBrandDelay,
        searchECategoryDelay,
        searchEStatus
      ),
    {
      staleTime: 600,
    }
  );

  const MaxPage = Math.ceil((computers?.count ?? 0) / currentLimit);

  return (
    <>
      <BreadCrumbManage text="Equipo de cómputo" />
      <main className=" flex items-center justify-center w-full flex-col gap-4">
        <section className="w-full px-4 flex flex-row gap-4 max-md:flex-col justify-between">
          <div className="flex gap-3 max-md:flex-col items-end max-md:items-stretch">
            <div>
              <Label value="Búsqueda por número de equipo" />
              <TextInput
                onChange={(event) => setMNum(event.target.value)}
                placeholder="Número de equipo"
              />
            </div>
            <div>
              <Label value="Marca" />
              <TextInput
                onChange={(event) => setEBrand(event.target.value)}
                placeholder="Marca del componente"
              />
            </div>
            <div>
              <Label value="Categoría" />
              <Select onChange={(event) => setECategory(event.target.value)}>
                <OPTCategoryEquipment />
              </Select>
            </div>
            <div>
              <Label value="Estado" />
              <Select onChange={(event) => setEStatus(event.target.value)}>
                <option value="">Estado</option>
                <option value="1">Activo</option>
                <option value="0">Baja</option>
              </Select>
            </div>
          </div>
          <div className=" flex items-end justify-end ">
            <Button
              className="dark:bg-[#2d2d2d max-md:w-full dark:hover:bg-neutral-800"
              color={"blue"}
              onClick={() => setSNew(true)}
            >
              Añadir equipo
            </Button>
          </div>
        </section>

        <section className=" w-full px-3">
          {isLoading && (
            <div className=" w-full flex items-center justify-center">
              <Loader />
            </div>
          )}

          {!isLoading && computers && computers.count > 0 && (
            <Table
              hoverable
              className="text-center h-[30rem] text-black dark:text-white"
            >
              <Table.Head className="dark:[&>tr>th]:!bg-neutral-800 dark:text-white">
                <Table.HeadCell>Número de Máquina</Table.HeadCell>
                <Table.HeadCell>Categoría</Table.HeadCell>
                <Table.HeadCell className=" max-md:hidden">
                  Marca
                </Table.HeadCell>
                <Table.HeadCell>Serial</Table.HeadCell>
                <Table.HeadCell className=" max-md:hidden">
                  Estado
                </Table.HeadCell>
                <Table.HeadCell className=" max-md:hidden"></Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {computers?.data.map((computers) => (
                  <TblRows
                    key={"COM" + computers.EquipmentUniqueCode}
                    computers={computers}
                  />
                ))}
              </Table.Body>
            </Table>
          )}

          {!isLoading && (!computers || computers.count == 0) && <NoResults />}

          <MobilePagination
            page={currentPage}
            onPageChange={onPageChange}
            totalPages={MaxPage}
            setCurrentLimit={setCurrentLimit}
          />
          <DesktopPagination
            page={currentPage}
            onPageChange={onPageChange}
            totalPages={MaxPage}
            setCurrentLimit={setCurrentLimit}
          />
        </section>
      </main>

      <NewComponent sNew={sNew} setSNew={setSNew} />
    </>
  );
};

export default ManagerComputer;

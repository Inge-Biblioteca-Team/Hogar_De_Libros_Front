import { Button, Label, Pagination, Select, Table, TextInput } from "flowbite-react";
import { useState } from "react";
import { apiResponseCE } from "../types/Computer";
import { GetComputerPaginated } from "../Services/SvComputer";
import { useQuery } from "react-query";
import UseDebounce from "../../../hooks/UseDebounce";
import TblRows from "../components/TblRows";
import NewComponent from "../components/Modals/NewComponent";
import { BreadCrumbManage } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import CustomPagination from "../../../components/CustomPagination";
import NoResults from "../../../components/NoResults";
import OPTCategoryEquipment from "../components/OPTCategoryEquipment";

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
  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("MCPage", page.toString());
  };

  const { data: computers } = useQuery<apiResponseCE, Error>(
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
        <section className="w-4/5 md:w-full md:pl-4 md:pr-4 sm:items-center flex lg:flex-row flex-col justify-between lg:items-end max-sm:w-full max-sm:px-2 gap-4 lg:gap-0">
          <div className="flex md:w-full lg:flex-row flex-col gap-3">
            <div>
              <Label value="Búsqueda por numero de equipo" />
              <TextInput
                onChange={(event) => setMNum(event.target.value)}
                placeholder="Numero de equipo"
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
          <Button className="md:w-full lg:w-auto" color={"blue"} onClick={() => setSNew(true)}>
            Añadir equipo
          </Button>
        </section>
        <section className="w-4/5 md:w-full md:pl-4 md:pr-4 max-sm:w-full max-sm:px-2">
          {computers && computers.count > 0 ? (
            <>
              <Table
                hoverable
                className="text-center"
                style={{ height: "30rem" }}
              >
                <Table.Head className=" h-16">
                  <Table.HeadCell>Número de Máquina</Table.HeadCell>
                  <Table.HeadCell className=" max-sm:hidden" >Categoría</Table.HeadCell>
                  <Table.HeadCell className=" max-sm:hidden" >Marca</Table.HeadCell>
                  <Table.HeadCell className=" max-sm:hidden" >Serial</Table.HeadCell>
                  <Table.HeadCell>Estado</Table.HeadCell>
                  <Table.HeadCell className=" max-sm:hidden" ></Table.HeadCell>
                </Table.Head>
                <Table.Body>
                  {computers?.data.map((computers) => (
                    <TblRows
                      key={"COM" + computers.EquipmentUniqueCode}
                      computers={computers}
                    />
                  ))}
                </Table.Body>
              </Table>
              <div className="block max-sm:hidden">
              <CustomPagination
                page={currentPage}
                onPageChange={onPageChange}
                totalPages={MaxPage}
                setCurrentLimit={setCurrentLimit}
                total={computers?.count || 0}
              />
              </div>

              <div className="sm:hidden  flex justify-center ">
              <Pagination
                layout="navigation"
                currentPage={currentPage}
                totalPages={MaxPage}
                onPageChange={onPageChange}
              />
              </div>
            </>
          ) : (
            <NoResults />
          )}
        </section>
      </main>

      <NewComponent sNew={sNew} setSNew={setSNew} />
    </>
  );
};

export default ManagerComputer;
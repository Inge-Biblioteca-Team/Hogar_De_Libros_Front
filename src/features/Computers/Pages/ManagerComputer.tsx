import { Button, Select, Table, TextInput } from "flowbite-react";
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
      <BreadCrumbManage text="Equipo de computo" />

      <main className=" flex items-center justify-center w-full flex-col gap-4">
        <section className="w-4/5 flex justify-between items-end">
          <div className="flex gap-3">
            <TextInput
              onChange={(event) => setMNum(event.target.value)}
              placeholder="Numero de equipo"
            />
            <TextInput
              onChange={(event) => setEBrand(event.target.value)}
              placeholder="Marca"
            />
            <Select onChange={(event) => setECategory(event.target.value)}>
              <OPTCategoryEquipment />
            </Select>
            <Select onChange={(event) => setEStatus(event.target.value)}>
              <option value="">Estado</option>
              <option value="1">Activo</option>
              <option value="0">Baja</option>
            </Select>
          </div>
          <Button color={"blue"} onClick={() => setSNew(true)}>
            Añadir Equipo
          </Button>
        </section>
        <section className="w-4/5">
          {computers && computers.count > 0 ? (
            <>
              <Table
                hoverable
                className="text-center"
                style={{ height: "30rem" }}
              >
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

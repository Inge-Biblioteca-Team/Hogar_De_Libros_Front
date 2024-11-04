import { Button, Select, Table, TextInput } from "flowbite-react";
import { GetFurniturePaginated } from "../services/SvFurniture";
import { apiResponseFt } from "../type/furniture";
import { useQuery } from "react-query";
import { useState } from "react";
import UseDebounce from "../../../hooks/UseDebounce";
import ModalAddNewFurniture from "../Components/Modals/ModalAddNewFurniture";
import FurnitureRows from "../Components/FurnitureRows";
import { BreadCrumbManage } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import CustomPagination from "../../../components/CustomPagination";
import OPTState from "../Components/OPTState";
import NoResults from "../../../components/NoResults";

const ManageFurniture = () => {
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("currentPage");
    return savedPage ? Number(savedPage) : 1;
  });
  const [currentLimit, setCurrentLimit] = useState<number>(5);

  const [searchCode, setSearchCode] = useState<string>("");
  const code = UseDebounce(searchCode, 2000);
  const [searchDescription, setSearchDescription] = useState<string>("");
  const searchDescriptionDelay = UseDebounce(searchDescription, 2000);
  const [searchStatus, setSearchStatus] = useState<string>("");

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("currentPage", page.toString());
  };

  const [sNew, setSNew] = useState<boolean>(false);

  const { data: furnitures } = useQuery<apiResponseFt, Error>(
    [
      "FurnitureCatalog",
      currentPage,
      currentLimit,
      searchDescriptionDelay,
      searchStatus,
      code
    ],
    () =>
      GetFurniturePaginated(
        currentPage,
        currentLimit,
        searchDescriptionDelay,
        searchStatus,
        code
      ),
    {
      staleTime: 600,
    }
  );

  const MaxPage = Math.ceil((furnitures?.count ?? 0) / currentLimit);

  return (
    <>
      <BreadCrumbManage text="Mobiliario" />
      <main className=" flex items-center justify-center w-full flex-col gap-4">
        <section className="w-4/5 flex justify-between items-end">
          <div className="flex gap-3">
            <TextInput
              placeholder="Búsqueda por placa"
              className="w-52"
              onChange={(event) => setSearchCode(event.target.value)}
            />
            <TextInput
              placeholder="Búsqueda por descripción"
              className="w-52"
              onChange={(event) => setSearchDescription(event.target.value)}
            />
            <Select onChange={(event) => setSearchStatus(event.target.value)}>
              <OPTState />
            </Select>
          </div>
          <Button color={"blue"} onClick={() => setSNew(true)}>
            Añadir mobiliario
          </Button>
        </section>
        <section className="w-4/5">
          {furnitures && furnitures.count > 0 ? (
            <>
              <Table
                hoverable
                className=" text-center "
                style={{ height: "30rem" }}
              >
                <Table.Head className=" h-16">
                  <Table.HeadCell className=" w-44">
                    Número de placa
                  </Table.HeadCell>
                  <Table.HeadCell className=" w-44">Descripción</Table.HeadCell>
                  <Table.HeadCell className=" w-44">Ubicación</Table.HeadCell>
                  <Table.HeadCell className=" w-44">Responsable</Table.HeadCell>
                  <Table.HeadCell className=" w-44">Condición</Table.HeadCell>
                  <Table.HeadCell className=" w-44">Estado</Table.HeadCell>
                  <Table.HeadCell></Table.HeadCell>
                </Table.Head>
                <Table.Body>
                  {furnitures?.data.map((furniture) => (
                    <FurnitureRows key={furniture.Id} furniture={furniture} />
                  ))}
                </Table.Body>
              </Table>
              <CustomPagination
                page={currentPage}
                onPageChange={onPageChange}
                totalPages={MaxPage}
                setCurrentLimit={setCurrentLimit}
                total={furnitures?.count || 0}
              />
            </>
          ) : (
            <NoResults />
          )}
        </section>
      </main>
      <ModalAddNewFurniture sNewF={sNew} setSNewF={setSNew} />
    </>
  );
};
export default ManageFurniture;

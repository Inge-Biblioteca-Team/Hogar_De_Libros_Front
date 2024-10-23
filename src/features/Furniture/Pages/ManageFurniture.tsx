import { Button, Table } from "flowbite-react";
import { GetFurniturePaginated } from "../services/SvFurniture";
import { apiResponseFt } from "../type/furniture";
import { useQuery } from "react-query";
import { useState } from "react";
import UseDebounce from "../../../hooks/UseDebounce";
import BtnSerchFur from "../Components/BTN/BtnSerchFur";
import AdminAdvancedSearchFur from "../Components/BTN/AdminAdvancedSerchFur";
import ModalAddNewFurniture from "../Components/Modals/ModalAddNewFurniture";
import FurnitureRows from "../Components/FurnitureRows";
import { BreadCrumbManage } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import CustomPagination from "../../../components/CustomPagination";

const ManageFurniture = () => {
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("currentPage");
    return savedPage ? Number(savedPage) : 1;
  });
  const [currentLimit, setCurrentLimit] = useState<number>(5);
  const [advance, setAdvance] = useState<boolean>(false);

  const [searchDescription, setSearchDescription] = useState<string>("");
  const searchDescriptionDelay = UseDebounce(searchDescription, 1000);
  const [searchUbication] = useState<string>("");
  const searchUbicationDelay = UseDebounce(searchUbication, 1000);
  const [searchResponsible] = useState<string>("");
  const searchResponsibleDelay = UseDebounce(searchResponsible, 1000);
  const [searchStatus, setSearchStatus] = useState<string>("");
  const searchStatusDelay = UseDebounce(searchStatus, 1000);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("currentPage", page.toString());
  };

  const viewAdvanceSearchComp = () => setAdvance(!advance);
  const [sNew, setSNew] = useState<boolean>(false);

  const { data: furnitures } = useQuery<apiResponseFt, Error>(
    [
      "FurnitureCatalog",
      currentPage,
      currentLimit,
      searchDescriptionDelay,
      searchUbicationDelay,
      searchResponsibleDelay,
      searchStatusDelay,
    ],
    () =>
      GetFurniturePaginated(
        currentPage,
        currentLimit,
        searchDescriptionDelay,
        searchUbicationDelay,
        searchResponsibleDelay,
        searchStatusDelay
      ),
    {
      staleTime: 600,
    }
  );

  const MaxPage = Math.ceil((furnitures?.count ?? 0) / currentLimit);

  return (
    <>
      <BreadCrumbManage text="Mobiliario" />
      <div className=" flex w-full place-content-center mt-5">
        <div className=" w-5/6 flex flex-col gap-4">
          <div className=" flex justify-between">
            <div className="flex gap-2">
              <AdminAdvancedSearchFur see={advance} EStatus={setSearchStatus} />
              <BtnSerchFur click={viewAdvanceSearchComp} icon={advance} />
            </div>
            <Button color={"blue"} onClick={() => setSNew(true)}>
              Añadir Mobiliario
            </Button>
          </div>
          <ModalAddNewFurniture sNewF={sNew} setSNewF={setSNew} />
          <Table hoverable className=" text-center">
            <Table.Head className=" h-16">
              <Table.HeadCell className=" w-44">Número de placa</Table.HeadCell>
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
        </div>
      </div>
    </>
  );
};
export default ManageFurniture;

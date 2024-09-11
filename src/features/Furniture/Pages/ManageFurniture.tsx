import { Breadcrumb, Table } from "flowbite-react";
import { HomeCrumb, LastCrumb, ManageCrumb } from "../../../components/BreadCrumb";
import { GetFurniturePaginated } from "../services/SvFurniture";
import { apiResponseFt, FurnitureEdit } from "../type/furniture";
import { useQuery } from "react-query";
import { useState } from "react";
import UseDebounce from "../../../hooks/UseDebounce";
import PaginatationSelector from "../../../components/PaginatationSelector";
import SltCurrentLimit from "../../../components/SltCurrentLimit";
import FurnitureAccionBTNS from "../Components/BTN/FurnitureAccionBTNS";
import CreateNewFurniture from "../Components/BTN/CreateNewFurniture";
import InpSearchTitle from "../../../components/InpSearchTitle";
import BtnSerchFur from "../Components/BTN/BtnSerchFur";
import AdminAdvancedSearchFur from "../Components/BTN/AdminAdvancedSerchFur";

const ManageFurniture =()=>{
    const [currentPage, setCurrentPage] = useState<number>(() => {
        const savedPage = sessionStorage.getItem("currentPage");
        return savedPage ? Number(savedPage) : 1;
      });
      const [currentLimit, setCurrentLimit] = useState<number>(5);
      const [advance, setAdvance] = useState<boolean>(false);
    
      const [searchDescription, setSearchDescription] = useState<string>("");
      const searchDescriptionDelay = UseDebounce(searchDescription, 1000);
      const [searchUbication, setSearchUbication] = useState<string>("");
      const searchUbicationDelay = UseDebounce(searchUbication, 1000);
      const [searchResponsible, setSearchResponsible] = useState<string>("");
      const searchResponsibleDelay = UseDebounce(searchResponsible, 1000);
      const [searchStatus, setSearchStatus] = useState<string>("");
      const searchStatusDelay = UseDebounce(searchStatus, 1000);
    
      const onPageChange = (page: number) => {
        setCurrentPage(page);
        sessionStorage.setItem("currentPage", page.toString());
      };
      
      const viewAdvanceSearchComp = () => setAdvance(!advance);
    
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
          <Breadcrumb className="custom-breadcrumb">
            <HomeCrumb />
            <ManageCrumb />
            <LastCrumb CurrentPage="Gestión de Mobiliario" />
          </Breadcrumb>
          <div className=" flex w-full place-content-center mt-5">
            <div className=" w-5/6 flex flex-col gap-4">
              <div className=" flex justify-between">
                <div className="flex gap-2">
                  <InpSearchTitle Criterio="Descripción" onSearch={setSearchDescription} />
                  <AdminAdvancedSearchFur
                    see={advance}
                    EStatus={setSearchStatus}
                  />
                  <BtnSerchFur click={viewAdvanceSearchComp} icon={advance} />
                </div>
                <CreateNewFurniture objetive="Mobiliario" />
              </div>
              <Table
                hoverable
                className="flex items-center justify-between text-center"
              >
                <Table.Head className=" h-16">
                  <Table.HeadCell className=" w-44">Descripción</Table.HeadCell>
                  <Table.HeadCell className=" w-44">Ubicación</Table.HeadCell>
                  <Table.HeadCell className=" w-44">Responsable</Table.HeadCell>
                  <Table.HeadCell className=" w-44">Condición</Table.HeadCell>
                  <Table.HeadCell className=" w-44">Estado</Table.HeadCell>
                  <Table.HeadCell></Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {furnitures?.data.map((furniture) => (
                    <Table.Row
                      key={furniture.Id}
                      className=" h-24"
                    >
                      <Table.Cell className="w-52">
                        {furniture.Description}
                      </Table.Cell>
                      <Table.Cell className="w-52">
                        {furniture.Location}
                      </Table.Cell>
                      <Table.Cell className="w-44">
                        {furniture.InChargePerson}
                      </Table.Cell>
                      <Table.Cell className="w-64">
                        {furniture.ConditionRating}
                      </Table.Cell>
                      <Table.Cell className="w-64">
                        {furniture.Status ? "Activo" : "Inactivo"}
                      </Table.Cell>
                      <Table.Cell>
                        <FurnitureAccionBTNS
                          id={furniture.Id}
                          Status={furniture.Status}
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
                    mobiliario por página
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
}
export default ManageFurniture
import { Button, Select, Table, TextInput } from "flowbite-react";
import { GetFurniturePaginated } from "../services/SvFurniture";
import { apiResponseFt } from "../type/furniture";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import UseDebounce from "../../../hooks/UseDebounce";
import ModalAddNewFurniture from "../Components/Modals/ModalAddNewFurniture";
import FurnitureRows from "../Components/FurnitureRows";
import { BreadCrumbManage } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import OPTState from "../Components/OPTState";
import NoResults from "../../../components/NoResults";
import Loader from "../../../components/Loader";
import DesktopPagination from "../../../components/DesktopComponents/DesktopPagination";
import MobilePagination from "../../../components/MobileComponents/MobilePagination";

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

  const { data: furnitures, isLoading } = useQuery<apiResponseFt, Error>(
    [
      "FurnitureCatalog",
      currentPage,
      currentLimit,
      searchDescriptionDelay,
      searchStatus,
      code,
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

  useEffect(() => {
    setCurrentPage(1);
  }, [currentLimit, searchDescriptionDelay, searchStatus, code]);

  const MaxPage = Math.ceil((furnitures?.count ?? 0) / currentLimit);

  return (
    <>
      <BreadCrumbManage text="Mobiliario" />
      <main className="flex items-center justify-center w-full flex-col gap-4">
        <section
          className="w-full items-center flex justify-between 
           max-md:flex-col gap-3 px-3"
        >
          <div
            className="flex w-full gap-3 
           max-md:flex-col"
          >
            <TextInput
              placeholder="Búsqueda por placa"
              onChange={(event) => setSearchCode(event.target.value)}
            />
            <TextInput
              placeholder="Búsqueda por descripción"
              onChange={(event) => setSearchDescription(event.target.value)}
            />
            <Select onChange={(event) => setSearchStatus(event.target.value)}>
              <OPTState />
            </Select>
          </div>
          <Button
            className="dark:bg-[#2d2d2d] max-md:w-full dark:hover:bg-neutral-800"
            color={"blue"}
            onClick={() => setSNew(true)}
          >
            Añadir mobiliario
          </Button>
        </section>
        <section className="w-full px-3">
          {isLoading && (
            <div className=" w-full flex items-center justify-center">
              <Loader />
            </div>
          )}

          {!isLoading && furnitures && furnitures.count > 0 && (
            <Table
              hoverable
              className="text-center min-h-[30rem] text-black dark:text-white"
            >
              <Table.Head className="dark:[&>tr>th]:!bg-neutral-800 dark:text-white">
                <Table.HeadCell className="">Número de placa</Table.HeadCell>
                <Table.HeadCell>Descripción</Table.HeadCell>
                <Table.HeadCell className=" max-lg:hidden">
                  Ubicación
                </Table.HeadCell>
                <Table.HeadCell className=" max-md:hidden">
                  Responsable
                </Table.HeadCell>
                <Table.HeadCell className=" max-lg:hidden">
                  Condición
                </Table.HeadCell>
                <Table.HeadCell>Estado</Table.HeadCell>
                <Table.HeadCell className=" max-md:hidden"></Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y" >
                {furnitures?.data.map((furniture) => (
                  <FurnitureRows key={furniture.Id} furniture={furniture} />
                ))}
              </Table.Body>
            </Table>
          )}

          {!isLoading && (!furnitures || furnitures.count == 0) && (
            <NoResults />
          )}

          <DesktopPagination
            page={currentPage}
            onPageChange={onPageChange}
            totalPages={MaxPage}
            setCurrentLimit={setCurrentLimit}
          />
          <MobilePagination
            page={currentPage}
            onPageChange={onPageChange}
            totalPages={MaxPage}
            setCurrentLimit={setCurrentLimit}
          />
        </section>
      </main>
      <ModalAddNewFurniture sNewF={sNew} setSNewF={setSNew} />
    </>
  );
};
export default ManageFurniture;

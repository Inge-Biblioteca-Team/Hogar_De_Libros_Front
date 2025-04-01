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
import { Pagination } from "flowbite-react";
import Loader from "../../OPAC/Assets/LoaderOPAC.gif";

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

  const MaxPage = Math.ceil((furnitures?.count ?? 0) / currentLimit);

  return (
    <>
      <BreadCrumbManage text="Mobiliario" />
      <main className="flex m items-center justify-center w-full flex-col gap-4">
        <section className="w-full  lg:flex-row md:px-4 max-sm:px-2 max-sm:flex-col max-sm:gap-4 items-center flex justify-between ">
          <div className="flex w-full md:flex-col lg:flex-row  max-sm:flex-col gap-3 ">
            <TextInput
              placeholder="Búsqueda por placa"
              className="w-52 md:w-full lg:w-auto max-sm:w-full"
              onChange={(event) => setSearchCode(event.target.value)}
            />
            <TextInput
              placeholder="Búsqueda por descripción"
              className="w-52 md:w-full lg:w-auto max-sm:w-full"
              onChange={(event) => setSearchDescription(event.target.value)}
            />
            <Select onChange={(event) => setSearchStatus(event.target.value)}>
              <OPTState />
            </Select>
          </div>
          <Button
            className="dark:bg-[#2d2d2d] w-56 max-sm:w-full"
            color={"blue"}
            onClick={() => setSNew(true)}
          >
            Añadir mobiliario
          </Button>
        </section>
        <section className="w-full md:px-4 max-sm:px-2">
          {isLoading ? (
            <div className=" w-full flex items-center justify-center">
              <figure>
                <img width={400} src={Loader} alt="...Cargando" />
                <figcaption className=" text-center">...Cargando</figcaption>
              </figure>
            </div>
          ) : furnitures ? (
            <>
              <Table
                hoverable
                className=" text-center "
                style={{ height: "30rem" }}
              >
                <Table.Head className="dark:text-white h-16">
                  <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 xl:w-1/6 w-44">
                    Número de placa
                  </Table.HeadCell>
                  <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 xl:w-1/6 w-44">
                    Descripción
                  </Table.HeadCell>
                  <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 xl:w-1/6 xl:table-cell 2xl:table-cell md:hidden max-sm:hidden  w-44">
                    Ubicación
                  </Table.HeadCell>
                  <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 xl:w-1/6 xl:table-cell 2xl:table-cell md:hidden max-sm:hidden  w-44">
                    Responsable
                  </Table.HeadCell>
                  <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 xl:w-1/6 max-sm:hidden  w-44">
                    Condición
                  </Table.HeadCell>
                  <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 xl:w-1/6 max-sm:hidden  w-44">
                    Estado
                  </Table.HeadCell>
                  <Table.HeadCell className="dark:bg-neutral-900"></Table.HeadCell>
                </Table.Head>
                <Table.Body className="dark:bg-[#2d2d2d] dark:text-white">
                  {furnitures?.data.map((furniture) => (
                    <FurnitureRows key={furniture.Id} furniture={furniture} />
                  ))}
                </Table.Body>
              </Table>
              <div className="block max-sm:hidden">
                <CustomPagination
                  page={currentPage}
                  onPageChange={onPageChange}
                  totalPages={MaxPage}
                  setCurrentLimit={setCurrentLimit}
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
      <ModalAddNewFurniture sNewF={sNew} setSNewF={setSNew} />
    </>
  );
};
export default ManageFurniture;

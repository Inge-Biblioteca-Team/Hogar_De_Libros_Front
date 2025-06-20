import { useEffect, useState } from "react";
import MDCreateNewProgram from "../components/Modals/MDCreateNewProgram";
import { Button, Label, Select, Table, TextInput } from "flowbite-react";
import { useQuery } from "react-query";
import UseDebounce from "../../../hooks/UseDebounce";
import { ApiProgramsResponse } from "../types/Programs";
import ProgramsRows from "../components/ProgramsRows";
import { GetProgramsList } from "../services/SvPrograms";
import { ServicesCrumbs } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import NoResults from "../../../components/NoResults";
import DesktopPagination from "../../../components/DesktopComponents/DesktopPagination";
import MobilePagination from "../../../components/MobileComponents/MobilePagination";
import Loader from "../../../components/Loader";

const ManagePrograms = () => {
  const [Oadd, SetOAdd] = useState<boolean>(false);

  const [currentLimit, setCurrentLimit] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("ProgramsPages");
    return savedPage ? Number(savedPage) : 1;
  });

  const [SName, setSName] = useState<string>("");
  const [SStatus, setSStatus] = useState<string>("");

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("ProgramsPages", page.toString());
  };

  useEffect(() => {
    sessionStorage.setItem("ProgramsPages", currentPage.toString());
  }, [currentPage]);

  const Name = UseDebounce(SName, 100);
  const Status = UseDebounce(SStatus, 100);

  const { data: Programs, isLoading } = useQuery<ApiProgramsResponse, Error>(
    ["ProgramCatalog", currentPage, currentLimit, Name, Status],
    () => GetProgramsList(currentPage, currentLimit, Name, Status),
    {
      staleTime: 600,
    }
  );

  const MaxPage = Math.ceil((Programs?.count ?? 0) / currentLimit);
  return (
    <>
      <ServicesCrumbs text="Programas" />
      <main className=" px-3">
        <section>
          <div className="flex  max-sm:flex-col max-sm:items-center items-end justify-between w-full mb-5 mt-3">
            <div className="flex max-sm:w-full max-sm:flex-col  gap-2">
              <div>
                <Label>Nombre del programa</Label>
                <TextInput
                  placeholder="Nombre del programa"
                  onChange={(event) => setSName(event.target.value)}
                />
              </div>
              <div>
                <Label>Estado</Label>
                <Select onChange={(event) => setSStatus(event.target.value)}>
                  <option value="">Seleccione una opción</option>
                  <option value="1">Activo</option>
                  <option value="0">Inactivo</option>
                </Select>
              </div>
            </div>
            <Button
              className="dark:bg-[#2d2d2d] dark:hover:bg-neutral-800 max-sm:mt-4 max-sm:w-full "
              color={"blue"}
              onClick={() => SetOAdd(true)}
            >
              Añadir programa
            </Button>
          </div>
        </section>
        <section>
          {isLoading && (
            <div className=" w-full flex items-center justify-center">
              <Loader />
            </div>
          )}
          {!isLoading && (!Programs || Programs.count == 0) && <NoResults />}
          {!isLoading && Programs && Programs.count > 0 && (
            <Table
              hoverable
              className="text-center min-h-[30rem] text-black dark:text-white"
            >
              <Table.Head className="dark:[&>tr>th]:!bg-neutral-800 dark:text-white">
                <Table.HeadCell className=" max-md:hidden">Número de Registro</Table.HeadCell>
                <Table.HeadCell>Nombre del Programa</Table.HeadCell>
                <Table.HeadCell>Descripción</Table.HeadCell>
                <Table.HeadCell className=" max-lg:hidden">Información Relacionada</Table.HeadCell>
                <Table.HeadCell>Estado</Table.HeadCell>
                <Table.HeadCell className=" max-md:hidden"></Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {Programs?.data.map((Program) => (
                  <ProgramsRows key={Program.programsId} program={Program} />
                ))}
              </Table.Body>
            </Table>
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

      <MDCreateNewProgram open={Oadd} setOpen={SetOAdd} />
    </>
  );
};

export default ManagePrograms;

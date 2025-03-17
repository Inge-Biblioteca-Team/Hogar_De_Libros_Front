import { useEffect, useState } from "react";
import MDCreateNewProgram from "../components/Modals/MDCreateNewProgram";
import { Button, Label, Select, Table, TextInput } from "flowbite-react";
import { useQuery } from "react-query";
import UseDebounce from "../../../hooks/UseDebounce";
import { ApiProgramsResponse } from "../types/Programs";
import ProgramsRows from "../components/ProgramsRows";
import { GetProgramsList } from "../services/SvPrograms";
import { ServicesCrumbs } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import CustomPagination from "../../../components/CustomPagination";
import NoResults from "../../../components/NoResults";
import { Pagination } from "flowbite-react";
import Loader from "../../OPAC/Assets/LoaderOPAC.gif";

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
      <div className="w-full flex items-center justify-center">
        <div className="w-4/5 md:w-full md:pr-4 md:pl-4 max-sm:w-full max-sm:p-2">
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
              className="max-sm:mt-4 max-sm:w-full "
              color={"blue"}
              onClick={() => SetOAdd(true)}
            >
              Añadir programa
            </Button>
          </div>
          {isLoading ? (
            <div className=" w-full flex items-center justify-center">
              <figure>
                <img width={400} src={Loader} alt="...Cargando" />
                <figcaption className=" text-center">...Cargando</figcaption>
              </figure>
            </div>
          ) : Programs ? (
            <>
              <Table hoverable className="text-center">
                <Table.Head className="h-20 text-sm">
                  <Table.HeadCell className="xl:w-1/5 2xl:w-1/5 xl:table-cell 2xl:table-cell  md:hidden max-sm:hidden w-20">
                    Número de Registro
                  </Table.HeadCell>
                  <Table.HeadCell className="xl:w-1/5 2xl:w-1/5 max-sm:p-2 w-20">
                    Nombre del Programa
                  </Table.HeadCell>
                  <Table.HeadCell className="xl:w-1/5 2xl:w-1/5 max-sm:hidden w-20">
                    Descripción
                  </Table.HeadCell>
                  <Table.HeadCell className="xl:w-1/5 2xl:w-1/5 max-sm:hidden w-20">
                    Información Relacionada
                  </Table.HeadCell>
                  <Table.HeadCell className="xl:w-1/5 2xl:w-1/5 w-20">
                    Estado
                  </Table.HeadCell>
                  <Table.HeadCell className="xl:w-1/5 2xl:w-1/5 before:max-sm:hidden w-20"></Table.HeadCell>
                </Table.Head>
                <Table.Body className="h-96">
                  {Programs?.data.map((Program) => (
                    <ProgramsRows key={Program.programsId} program={Program} />
                  ))}
                </Table.Body>
              </Table>
              <div className="block max-sm:hidden">
                <CustomPagination
                  page={currentPage}
                  onPageChange={onPageChange}
                  totalPages={MaxPage}
                  setCurrentLimit={setCurrentLimit}
                  total={Programs?.count || 0}
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
        </div>
      </div>
      <MDCreateNewProgram open={Oadd} setOpen={SetOAdd} />
    </>
  );
};

export default ManagePrograms;

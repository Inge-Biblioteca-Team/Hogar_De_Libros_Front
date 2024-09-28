import { useEffect, useState } from "react";
import MDCreateNewProgram from "../components/Modals/MDCreateNewProgram";
import { LastCrumb, ManageCrumb } from "../../../components/BreadCrumb";
import {
  Breadcrumb,
  Button,
  Label,
  Select,
  Table,
  TextInput,
} from "flowbite-react";
import NoRequest from "../../Loan/Components/NoRequest";
import SltCurrentLimit from "../../../components/SltCurrentLimit";
import PaginatationSelector from "../../../components/PaginatationSelector";
import { useQuery } from "react-query";
import UseDebounce from "../../../hooks/UseDebounce";
import { ApiProgramsResponse } from "../types/Programs";
import ProgramsRows from "../components/ProgramsRows";
import { GetProgramsList } from "../services/SvPrograms";

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

  const { data: Programs } = useQuery<ApiProgramsResponse, Error>(
    ["ProgramCatalog", currentPage, currentLimit, Name, Status],
    () => GetProgramsList(currentPage, currentLimit, Name, Status),
    {
      staleTime: 600,
    }
  );

  const MaxPage = Math.ceil((Programs?.count ?? 0) / currentLimit);
  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <ManageCrumb />
        <LastCrumb CurrentPage="Programas" />
      </Breadcrumb>
      <div className="w-full flex items-center justify-center">
        <div className="w-4/5">
          <div className="flex items-end justify-between w-full mb-5 mt-3">
            <div className="flex gap-2">
              <div>
                <Label>Nombre del Programa</Label>
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
            <Button color={"blue"}
            onClick={()=>SetOAdd(true)}>Añadir Programa</Button>
          </div>

          {Programs?.count === 0 ? (
            <NoRequest text="No Existen Eventos registrados" />
          ) : (
            <>
              <Table hoverable className="text-center">
                <Table.Head className="h-20 text-sm">
                  <Table.HeadCell className=" w-20">
                    Numero de Registro
                  </Table.HeadCell>
                  <Table.HeadCell className=" w-20">
                    Nombre del Programa
                  </Table.HeadCell>
                  <Table.HeadCell className=" w-20">Descripción</Table.HeadCell>
                  <Table.HeadCell className=" w-20">
                    Información Relacionada
                  </Table.HeadCell>
                  <Table.HeadCell className=" w-20">Estado</Table.HeadCell>
                  <Table.HeadCell className=" w-20"></Table.HeadCell>
                </Table.Head>
                <Table.Body>
                  {Programs?.data.map((Program) => (
                    <ProgramsRows key={Program.programsId} program={Program} />
                  ))}
                </Table.Body>
              </Table>
              <div className="w-full flex justify-between">
                <div>
                  <span className="pl-5">
                    Mostrar{" "}
                    <span>
                      <SltCurrentLimit setCurrentLimit={setCurrentLimit} />
                    </span>{" "}
                    Programas por página
                  </span>
                </div>
                <PaginatationSelector
                  totalPages={MaxPage}
                  currentPage={currentPage}
                  onPageChange={onPageChange}
                />
              </div>
            </>
          )}
        </div>
      </div>
      <MDCreateNewProgram open={Oadd} setOpen={SetOAdd} />
    </>
  );
};

export default ManagePrograms;

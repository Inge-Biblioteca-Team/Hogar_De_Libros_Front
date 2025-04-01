import { Table } from "flowbite-react";
import { ApiAdvices } from "../Types/Advice";
import AdviceRow from "./AdviceRow";

const AdviceTable = ({ advices }: { advices: ApiAdvices }) => {
  return (
    <>
      {advices.count > 0 ? (
        <Table className="dark:bg-neutral-900  text-center min-h-[30rem] " hoverable>
          <Table.Head className="dark:text-white">
            <Table.HeadCell className="dark:bg-neutral-900 w-52 md:hidden max-sm:hidden">
              Número de aviso
            </Table.HeadCell>
            <Table.HeadCell className="dark:bg-neutral-900 w-52 xl:w-1/4 2xl:w-1/4">Motivo</Table.HeadCell>
            <Table.HeadCell className="dark:bg-neutral-900 w-52 xl:w-1/4 2xl:w-1/4 max-sm:hidden">
              Categoría
            </Table.HeadCell>
            <Table.HeadCell className="dark:bg-neutral-900 w-52 xl:w-1/4 2xl:w-1/4">Fecha de actividad</Table.HeadCell>
            <Table.HeadCell className="dark:bg-neutral-900 w-52 xl:w-1/4 2xl:w-1/4 md:hidden max-sm:hidden">
              Información extra
            </Table.HeadCell>
            <Table.HeadCell className="dark:bg-neutral-900 w-52 xl:w-1/4 2xl:w-1/4 max-sm:hidden">
              Estado
            </Table.HeadCell>
            <Table.HeadCell className="dark:bg-neutral-900"></Table.HeadCell>
          </Table.Head>
          <Table.Body className="dark:bg-[#2d2d2d] dark:text-white">
            {advices.data.map((advice) => (
              <AdviceRow key={"A" + advice.id_Advice} advice={advice} />
            ))}
          </Table.Body>
        </Table>
      ) : (
        <div className="h-96 bg-white flex items-center justify-center rounded-lg">
          <span className="text-2xl">No existen avisos</span>
        </div>
      )}
    </>
  );
};

export default AdviceTable;

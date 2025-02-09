import { Table } from "flowbite-react";
import { ApiAdvices } from "../Types/Advice";
import AdviceRow from "./AdviceRow";

const AdviceTable = ({ advices }: { advices: ApiAdvices }) => {
  return (
    <>
      {advices.count > 0 ? (
        <Table className=" text-center min-h-[30rem] " hoverable>
          <Table.Head>
            <Table.HeadCell className="w-52 md:hidden max-sm:hidden">
              Numero de aviso
            </Table.HeadCell>
            <Table.HeadCell className="w-52 xl:w-1/4 2xl:w-1/4">Motivo</Table.HeadCell>
            <Table.HeadCell className="w-52 xl:w-1/4 2xl:w-1/4 max-sm:hidden">
              Categoría
            </Table.HeadCell>
            <Table.HeadCell className="w-52 xl:w-1/4 2xl:w-1/4">Fecha de actividad</Table.HeadCell>
            <Table.HeadCell className="w-52 xl:w-1/4 2xl:w-1/4 md:hidden max-sm:hidden">
              Información Extra
            </Table.HeadCell>
            <Table.HeadCell className="w-52 xl:w-1/4 2xl:w-1/4 max-sm:hidden">
              Estado
            </Table.HeadCell>
            <Table.HeadCell className="w-52 xl:w-1/4 2xl:w-1/5 md:hidden max-sm:hidden"></Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {advices.data.map((advice) => (
              <AdviceRow key={"A" + advice.id_Advice} advice={advice} />
            ))}
          </Table.Body>
        </Table>
      ) : (
        <div className="h-96 bg-white flex items-center justify-center rounded-lg">
          <span className=" text-2xl">No existen avisos</span>
        </div>
      )}
    </>
  );
};

export default AdviceTable;

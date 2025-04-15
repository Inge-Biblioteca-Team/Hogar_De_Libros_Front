import { Table } from "flowbite-react";
import { ApiAdvices } from "../Types/Advice";
import AdviceRow from "./AdviceRow";

const AdviceTable = ({ advices }: { advices: ApiAdvices }) => {
  return (
    <Table
      className="text-center min-h-[30rem] 
          dark:text-white"
      hoverable
    >
      <Table.Head className="dark:[&>tr>th]:!bg-neutral-800">
        <Table.HeadCell className=" max-lg:hidden">Número de aviso</Table.HeadCell>
        <Table.HeadCell>Motivo</Table.HeadCell>
        <Table.HeadCell className=" max-sm:hidden">Categoría</Table.HeadCell>
        <Table.HeadCell>Fecha de actividad</Table.HeadCell>
        <Table.HeadCell className="max-lg:hidden">Información extra</Table.HeadCell>
        <Table.HeadCell className="max-sm:hidden">Estado</Table.HeadCell>
        <Table.HeadCell className=" max-md:hidden"></Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {advices.data.map((advice) => (
          <AdviceRow key={"A" + advice.id_Advice} advice={advice} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default AdviceTable;

import { Table } from "flowbite-react";
import AdviceRow from "./AdviceRow";

const AdviceTable = () => {
  return (
    <>
      <Table>
        <Table.Head>
          <Table.HeadCell>Numero de aviso</Table.HeadCell>
          <Table.HeadCell>Razón</Table.HeadCell>
          <Table.HeadCell>Categoría</Table.HeadCell>
          <Table.HeadCell>Fecha de actividad</Table.HeadCell>
          <Table.HeadCell>Información Extra</Table.HeadCell>
          <Table.HeadCell></Table.HeadCell>
        </Table.Head>
        <Table.Body className=" h-96">
          <AdviceRow />
        </Table.Body>
      </Table>
    </>
  );
};

export default AdviceTable;

import { Table } from "flowbite-react";
import React from "react";

const ColabsTableBody = ({
  children,
  hiid,
}: {
  children: React.ReactNode;
  hiid?: boolean;
}) => {
  return (
    <Table hoverable className=" text-center" style={{ height: "30rem" }}>
      <Table.Head>
        <Table.HeadCell>Fecha de colaboración</Table.HeadCell>
        <Table.HeadCell>Nombre del colaborador</Table.HeadCell>
        <Table.HeadCell>Institución colaboradora</Table.HeadCell>
        <Table.HeadCell>Teléfono</Table.HeadCell>
        <Table.HeadCell>Correo</Table.HeadCell>
        <Table.HeadCell>Categoría de colaboración</Table.HeadCell>
        <Table.HeadCell>Experiencia</Table.HeadCell>
        <Table.HeadCell>Estado</Table.HeadCell>
        {!hiid && <Table.HeadCell></Table.HeadCell>}
      </Table.Head>
      <Table.Body>{children}</Table.Body>
    </Table>
  );
};

export default ColabsTableBody;

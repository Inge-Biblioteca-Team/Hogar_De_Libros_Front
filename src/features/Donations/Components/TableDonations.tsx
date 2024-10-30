import { Table } from "flowbite-react";
import React from "react";

const TableDonations = ({
  hidd,
  children,
}: {
  hidd?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <Table hoverable className=" text-center" style={{ height: "30rem" }}>
      <Table.Head>
        <Table.HeadCell>Nombre del donador</Table.HeadCell>
        <Table.HeadCell>Cedula</Table.HeadCell>
        <Table.HeadCell>Correo</Table.HeadCell>
        <Table.HeadCell>Teléfono</Table.HeadCell>
        <Table.HeadCell>Categoría de donación</Table.HeadCell>
        <Table.HeadCell>Fecha de entrega</Table.HeadCell>
        {!hidd && <Table.HeadCell>Estado</Table.HeadCell>}
        <Table.HeadCell></Table.HeadCell>
      </Table.Head>
      <Table.Body>{children}</Table.Body>
    </Table>
  );
};

export default TableDonations;

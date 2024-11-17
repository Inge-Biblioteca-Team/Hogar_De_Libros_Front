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
        <Table.HeadCell className="max-sm:hidden">Correo</Table.HeadCell>
        <Table.HeadCell className="max-sm:hidden">Teléfono</Table.HeadCell>
        <Table.HeadCell className="max-sm:hidden">Categoría de donación</Table.HeadCell>
        <Table.HeadCell className="max-sm:hidden">Fecha de entrega</Table.HeadCell>
        {!hidd && <Table.HeadCell className="max-sm:hidden">Estado</Table.HeadCell>}
        <Table.HeadCell className="max-sm:hidden"></Table.HeadCell>
      </Table.Head>
      <Table.Body>{children}</Table.Body>
    </Table>
  );
};

export default TableDonations;

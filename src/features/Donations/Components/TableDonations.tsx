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
    <Table
      hoverable
      className="text-center min-h-[30rem] text-black dark:text-white"
    >
      <Table.Head className="dark:[&>tr>th]:!bg-neutral-800 dark:text-white">
        <Table.HeadCell className="">Nombre del donador</Table.HeadCell>
        <Table.HeadCell className=" max-xl:hidden">Cédula</Table.HeadCell>
        <Table.HeadCell className=" max-lg:hidden">Correo</Table.HeadCell>
        <Table.HeadCell>Teléfono</Table.HeadCell>
        <Table.HeadCell className=" max-lg:hidden">
          Categoría de donación
        </Table.HeadCell>
        <Table.HeadCell className=" max-sm:hidden">
          Fecha de entrega
        </Table.HeadCell>
        {!hidd && (
          <Table.HeadCell className="max-md:hidden">Estado</Table.HeadCell>
        )}
        <Table.HeadCell className=" max-md:hidden"></Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">{children}</Table.Body>
    </Table>
  );
};

export default TableDonations;

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
    <Table
      hoverable
      className="text-center min-h-[30rem] text-black dark:text-white"
    >
      <Table.Head className="dark:[&>tr>th]:!bg-neutral-800 dark:text-white">
        <Table.HeadCell className="">Fecha de colaboración</Table.HeadCell>
        <Table.HeadCell className="">Nombre del colaborador</Table.HeadCell>
        <Table.HeadCell className="max-sm:hidden">Teléfono</Table.HeadCell>
        <Table.HeadCell className="max-lg:hidden">Correo</Table.HeadCell>
        <Table.HeadCell className="max-lg:hidden">
          Categoría de colaboración
        </Table.HeadCell>
        <Table.HeadCell className="max-xl:hidden">Subcategoría</Table.HeadCell>
        <Table.HeadCell className="max-md:hidden">
          {!hiid ? "Estado" : ""}
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">{children}</Table.Body>
    </Table>
  );
};

export default ColabsTableBody;

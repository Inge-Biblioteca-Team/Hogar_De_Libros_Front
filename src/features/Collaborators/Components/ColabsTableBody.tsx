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
    <Table hoverable className=" text-center max-sm:h-96 h-[30rem] ">
      <Table.Head className="dark:text-white">
        <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 xl:w-1/6 max-sm:p-2">Fecha de colaboración</Table.HeadCell>
        <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 xl:w-1/6 max-sm:p-2">Nombre del colaborador</Table.HeadCell>
        <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 xl:w-1/6 md:hidden max-sm:hidden lg:table-cell ">Teléfono</Table.HeadCell>
        <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 xl:w-1/6 md:hidden max-sm:hidden lg:table-cell ">Correo</Table.HeadCell>
        <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 xl:w-1/6 max-sm:hidden ">
          Categoría de colaboración
        </Table.HeadCell>
        <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 xl:w-1/6 max-sm:hidden ">
          Subcategoría
        </Table.HeadCell>
        <Table.HeadCell className="dark:bg-neutral-900 2xl:w-1/6 xl:w-1/6 max-lg:hidden lg:table-cell"> {!hiid ? "Estado" : ""}</Table.HeadCell>
      </Table.Head>
      <Table.Body className="dark:text-white dark:bg-[#2d2d2d]">{children}</Table.Body>
    </Table>
  );
};

export default ColabsTableBody;

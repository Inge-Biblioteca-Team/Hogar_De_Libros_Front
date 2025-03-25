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
<<<<<<< HEAD
      <Table.Head className="dark:text-white">
        <Table.HeadCell className="dark:bg-neutral-900 xl:w-1/6 2xl:w-1/6">Nombre del donador</Table.HeadCell>
        <Table.HeadCell className="dark:bg-neutral-900 xl:w-1/6 2xl:w-1/6">Cédula</Table.HeadCell>
        <Table.HeadCell className="dark:bg-neutral-900 xl:w-1/6 2xl:w-1/6 md:hidden max-sm:hidden lg:table-cell">Correo</Table.HeadCell>
        <Table.HeadCell className="dark:bg-neutral-900 xl:w-1/6 2xl:w-1/6 md:hidden max-sm:hidden lg:table-cell">Teléfono</Table.HeadCell>
        <Table.HeadCell className="dark:bg-neutral-900 xl:w-1/6 2xl:w-1/6 max-sm:hidden">Categoría de donación</Table.HeadCell>
        <Table.HeadCell className="dark:bg-neutral-900 xl:w-1/6 2xl:w-1/6 max-sm:hidden">Fecha de entrega</Table.HeadCell>
        {!hidd && <Table.HeadCell className="dark:bg-neutral-900 xl:w-1/6 2xl:w-1/6 md:hidden  max-sm:hidden lg:table-cell">Estado</Table.HeadCell>}
        <Table.HeadCell className="dark:bg-neutral-900 xl:w-1/6 2xl:w-1/6 d:hidden max-sm:hidden lg:table-cell"></Table.HeadCell>
=======
      <Table.Head>
        <Table.HeadCell className="xl:w-1/6 2xl:w-1/6">Nombre del donador</Table.HeadCell>
        <Table.HeadCell className="xl:w-1/6 2xl:w-1/6">Cédula</Table.HeadCell>
        <Table.HeadCell className="xl:w-1/6 2xl:w-1/6 md:hidden max-sm:hidden lg:table-cell">Correo</Table.HeadCell>
        <Table.HeadCell className="xl:w-1/6 2xl:w-1/6 md:hidden max-sm:hidden lg:table-cell">Teléfono</Table.HeadCell>
        <Table.HeadCell className="xl:w-1/6 2xl:w-1/6 max-sm:hidden">Categoría de donación</Table.HeadCell>
        <Table.HeadCell className="xl:w-1/6 2xl:w-1/6 max-sm:hidden">Fecha de entrega</Table.HeadCell>
        {!hidd && <Table.HeadCell className="xl:w-1/6 2xl:w-1/6 md:hidden  max-sm:hidden lg:table-cell">Estado</Table.HeadCell>}
        <Table.HeadCell></Table.HeadCell>
>>>>>>> bf41da0047d62df0a9d96ba5f87a685cb2a55785
      </Table.Head>
      <Table.Body className="dark:bg-[#2d2d2d] dark:text-white">{children}</Table.Body>
    </Table>
  );
};

export default TableDonations;

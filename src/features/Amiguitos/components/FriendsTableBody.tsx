import { Table } from "flowbite-react";
import React from "react";

const FriendsTableBody = ({
  children,
  hidd,
}: {
  children: React.ReactNode;
  hidd?: boolean;
}) => {
  return (
    <Table hoverable className="text-center min-h-[30rem] text-black dark:text-white">
      <Table.Head className="dark:[&>tr>th]:!bg-neutral-800 dark:text-white">
        <Table.HeadCell className="">Nombre completo</Table.HeadCell>
        <Table.HeadCell className=" max-lg:hidden">Cédula</Table.HeadCell>
        <Table.HeadCell className="">Teléfono</Table.HeadCell>
        <Table.HeadCell className=" max-sm:hidden">Categoría principal</Table.HeadCell>
        <Table.HeadCell className=" max-xl:hidden">Sub categoría</Table.HeadCell>
        <Table.HeadCell className=" max-xl:hidden">Genero</Table.HeadCell>
        {!hidd && <Table.HeadCell className=" max-md:hidden">Estado</Table.HeadCell>}
        <Table.HeadCell className="max-md:hidden"></Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">{children}</Table.Body>
    </Table>
  );
};

export default FriendsTableBody;

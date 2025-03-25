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
    <Table hoverable className=" text-center" style={{ height: "30rem" }}>
      <Table.Head>
        <Table.HeadCell className="xl:w-1/6 2xl:w-1/6" >Nombre completo</Table.HeadCell>
        <Table.HeadCell className="xl:w-1/6 2xl:w-1/6" >Cédula</Table.HeadCell>
        <Table.HeadCell className="xl:w-1/6 2xl:w-1/6 max-sm:hidden">Categoría principal</Table.HeadCell>
        <Table.HeadCell className="xl:w-1/6 2xl:w-1/6 max-sm:hidden">Sub categoría</Table.HeadCell>
        <Table.HeadCell className="xl:w-1/6 2xl:w-1/6 md:hidden max-sm:hidden lg:table-cell">Genero</Table.HeadCell>
        <Table.HeadCell className="xl:w-1/6 2xl:w-1/6 md:hidden max-sm:hidden lg:table-cell">Teléfono</Table.HeadCell>
        {!hidd && <Table.HeadCell className="xl:w-1/6 2xl:w-1/6 md:hidden max-sm:hidden lg:table-cell">Estado</Table.HeadCell>}
        <Table.HeadCell></Table.HeadCell>
      </Table.Head>
      <Table.Body>{children}</Table.Body>
    </Table>
  );
};

export default FriendsTableBody;

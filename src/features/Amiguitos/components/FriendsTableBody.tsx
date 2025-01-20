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
        <Table.HeadCell>Nombre completo</Table.HeadCell>
        <Table.HeadCell>Cédula</Table.HeadCell>
        <Table.HeadCell className="max-sm:hidden">Categoría principal</Table.HeadCell>
        <Table.HeadCell className="max-sm:hidden">Sub categoría</Table.HeadCell>
        <Table.HeadCell className="md:hidden max-sm:hidden lg:table-cell">Genero</Table.HeadCell>
        <Table.HeadCell className="md:hidden max-sm:hidden lg:table-cell">Teléfono</Table.HeadCell>
        {!hidd && <Table.HeadCell className="md:hidden max-sm:hidden lg:table-cell">Estado</Table.HeadCell>}
        <Table.HeadCell className="max-sm:hidden"></Table.HeadCell>
      </Table.Head>
      <Table.Body>{children}</Table.Body>
    </Table>
  );
};

export default FriendsTableBody;

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
        <Table.HeadCell>Categoría principal</Table.HeadCell>
        <Table.HeadCell>Sub categoría</Table.HeadCell>
        <Table.HeadCell>Genero</Table.HeadCell>
        <Table.HeadCell>Teléfono</Table.HeadCell>
        {!hidd && <Table.HeadCell>Estado</Table.HeadCell>}
        <Table.HeadCell></Table.HeadCell>
      </Table.Head>
      <Table.Body>{children}</Table.Body>
    </Table>
  );
};

export default FriendsTableBody;

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
      <Table.Head>
        <Table.HeadCell>Fecha de colaboración</Table.HeadCell>
        <Table.HeadCell className="  ">Nombre del colaborador</Table.HeadCell>
        <Table.HeadCell>Teléfono</Table.HeadCell>
        <Table.HeadCell className=" max-sm:hidden ">Correo</Table.HeadCell>
        <Table.HeadCell className=" max-sm:hidden ">
          Categoría de colaboración
        </Table.HeadCell>
        <Table.HeadCell className=" max-sm:hidden ">
          Sub categoría
        </Table.HeadCell>
        <Table.HeadCell className=" "> {!hiid ? "Estado" : ""}</Table.HeadCell>
      </Table.Head>
      <Table.Body>{children}</Table.Body>
    </Table>
  );
};

export default ColabsTableBody;

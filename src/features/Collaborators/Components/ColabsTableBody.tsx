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
      <Table.Head className="">
        <Table.HeadCell className="max-sm:p-2">Fecha de colaboración</Table.HeadCell>
        <Table.HeadCell className=" max-sm:p-2">Nombre del colaborador</Table.HeadCell>
        <Table.HeadCell className=" md:hidden max-sm:hidden lg:table-cell ">Teléfono</Table.HeadCell>
        <Table.HeadCell className=" md:hidden max-sm:hidden lg:table-cell ">Correo</Table.HeadCell>
        <Table.HeadCell className=" max-sm:hidden ">
          Categoría de colaboración
        </Table.HeadCell>
        <Table.HeadCell className=" max-sm:hidden ">
          Sub categoría
        </Table.HeadCell>
        <Table.HeadCell className="md:hidde lg:table-cell"> {!hiid ? "Estado" : ""}</Table.HeadCell>
      </Table.Head>
      <Table.Body>{children}</Table.Body>
    </Table>
  );
};

export default ColabsTableBody;

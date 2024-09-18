import { Table } from "flowbite-react";
import FurnitureAccionBTNS from "./BTN/FurnitureAccionBTNS";
import { furniture } from "../type/furniture";

const FurnitureRows = ({ furniture }: { furniture: furniture }) => {
  return (
    <>
      <Table.Row key={furniture.Id} className=" h-24">
        <Table.Cell className="w-52">{furniture.LicenseNumber}</Table.Cell>
        <Table.Cell className="w-52">{furniture.Description}</Table.Cell>
        <Table.Cell className="w-52">{furniture.Location}</Table.Cell>
        <Table.Cell className="w-44">{furniture.InChargePerson}</Table.Cell>
        <Table.Cell className="w-64">{furniture.ConditionRating}</Table.Cell>
        <Table.Cell className="w-64">
          {furniture.Status ? "Activo" : "Inactivo"}
        </Table.Cell>
        <Table.Cell>
          <FurnitureAccionBTNS furniture={furniture} />
        </Table.Cell>
      </Table.Row>
    </>
  );
};

export default FurnitureRows;

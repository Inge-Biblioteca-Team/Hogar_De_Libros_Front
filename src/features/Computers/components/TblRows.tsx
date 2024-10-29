import { Table } from "flowbite-react";
import EquipmentAccionBTNS from "./EquipmentAccionBTNS";
import { Equipment } from "../types/Computer";

const TblRows = ({ computers }: { computers: Equipment }) => {
  return (
    <>
      <Table.Row key={computers.EquipmentUniqueCode}>
        <Table.Cell className=" w-52">{computers.MachineNumber}</Table.Cell>
        <Table.Cell className="w-52">{computers.EquipmentCategory}</Table.Cell>
        <Table.Cell className="w-44 ">{computers.EquipmentBrand}</Table.Cell>
        <Table.Cell className="w-64">{computers.EquipmentSerial}</Table.Cell>
        <Table.Cell className="w-64">
          {computers.Status ? "Activo" : "Baja"}
        </Table.Cell>
        <Table.Cell>
          <EquipmentAccionBTNS computers={computers} />
        </Table.Cell>
      </Table.Row>
    </>
  );
};

export default TblRows;

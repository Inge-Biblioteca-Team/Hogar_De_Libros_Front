import { Table } from "flowbite-react";
import EquipmentAccionBTNS from "./EquipmentAccionBTNS";
import { Equipment } from "../types/Computer";

const TblRows = ({ computers }: { computers: Equipment }) => {
  return (
    <>
      <Table.Row key={computers.EquipmentUniqueCode}>
        <Table.Cell className="w-52">{computers.MachineNumber}</Table.Cell>
        <Table.Cell className="w-52 max-sm:hidden">{computers.EquipmentCategory}</Table.Cell>
        <Table.Cell className="w-44 max-sm:hidden">{computers.EquipmentBrand}</Table.Cell>
        <Table.Cell className="w-64 max-sm:hidden">{computers.EquipmentSerial}</Table.Cell>
        <Table.Cell>
          {computers.Status ? "Activo" : "Baja"}
        </Table.Cell>
        <Table.Cell className=" max-sm:w-full">
          <EquipmentAccionBTNS computers={computers} />
        </Table.Cell>
      </Table.Row>
    </>
  );
};

export default TblRows;

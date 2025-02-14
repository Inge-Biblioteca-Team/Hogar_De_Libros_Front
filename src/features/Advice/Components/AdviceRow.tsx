import { Table } from "flowbite-react";
import AdviceAccionsBTN from "./AdviceAccionsBTN";
import { Advice } from "../Types/Advice";
import { formatToDMY } from "../../../components/FormatTempo";

const AdviceRow = ({ advice }: { advice: Advice }) => {
  const date = formatToDMY(advice.date);
  return (
    <Table.Row>
      <Table.Cell className=" md:hidden max-sm:hidden">{advice.id_Advice} </Table.Cell>
      <Table.Cell>{advice.reason} </Table.Cell>
      <Table.Cell className=" max-sm:hidden">{advice.category} </Table.Cell>
      <Table.Cell>{date} </Table.Cell>
      <Table.Cell className="max-sm:hidden md:hidden">
        <div className=" line-clamp-2 ">{advice.extraInfo}</div>
      </Table.Cell>
      <Table.Cell className=" max-sm:hidden">
        {advice.status ? "Activo" : "Cancelado"}{" "}
      </Table.Cell>
      <Table.Cell>
        <AdviceAccionsBTN advice={advice} />
      </Table.Cell>
    </Table.Row>
  );
};

export default AdviceRow;

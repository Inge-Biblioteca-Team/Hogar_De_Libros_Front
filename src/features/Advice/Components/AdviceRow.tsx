import { Table } from "flowbite-react";
import AdviceAccionsBTN from "./AdviceAccionsBTN";

const AdviceRow = () => {
  return (
    <Table.Row>
      <Table.Cell></Table.Cell>
      <Table.Cell></Table.Cell>
      <Table.Cell></Table.Cell>
      <Table.Cell></Table.Cell>
      <Table.Cell>
        <div className=" line-clamp-2"></div>
      </Table.Cell>
      <Table.Cell>
        <AdviceAccionsBTN/>
      </Table.Cell>
    </Table.Row>
  );
};

export default AdviceRow;

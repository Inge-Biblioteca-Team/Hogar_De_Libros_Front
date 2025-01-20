import { Table } from "flowbite-react";
import { useState } from "react";
import { Colaborator } from "../Types/ColaboratorTypes";
import MDViewInfo from "./Modals/MDViewInfo";
import { formatToDMY } from "../../../components/FormatTempo";
const ColabHistoryRow = ({ colaborator }: { colaborator: Colaborator }) => {
  const [openV, setOpenV] = useState<boolean>(false);
  return (
    <>
      <Table.Row onClick={() => setOpenV(true)}>
        <Table.Cell>{formatToDMY(colaborator.activityDate)} </Table.Cell>
        <Table.Cell>{colaborator.UserFullName}</Table.Cell>
        <Table.Cell className="md:hidden max-sm:hidden lg:table-cell" >{colaborator.UserPhone}</Table.Cell>
        <Table.Cell className="md:hidden max-sm:hidden lg:table-cell">
          {colaborator.UserEmail}
        </Table.Cell>
        <Table.Cell className=" max-sm:hidden">
          {colaborator.PrincipalCategory}
        </Table.Cell>
        <Table.Cell className="  max-sm:hidden">
          {colaborator.SubCategory}
        </Table.Cell>
        <Table.Cell className="md:hidden lg:table-cell">{colaborator.Status}</Table.Cell>
      </Table.Row>
      <MDViewInfo open={openV} setOpen={setOpenV} colaboration={colaborator} />
    </>
  );
};

export default ColabHistoryRow;

import { Table } from "flowbite-react";
import { useState } from "react";
import { Colaborator } from "../Types/ColaboratorTypes";
import MDViewInfo from "./Modals/MDViewInfo";
import { formatToDMY } from "../../../components/FormatTempo";
const ColabHistoryRow = ({ colaborator }: { colaborator: Colaborator }) => {
  const [openV, setOpenV] = useState<boolean>(false);
  return (
    <>
      <Table.Row
         className="dark:border-zinc-700  dark:bg-[#2d2d2d]"
        onClick={() => setOpenV(true)}
      >
        <Table.Cell>{formatToDMY(colaborator.activityDate)}</Table.Cell>
        <Table.Cell>{colaborator.UserFullName}</Table.Cell>
        <Table.Cell className="max-sm:hidden">
          {colaborator.UserPhone}
        </Table.Cell>
        <Table.Cell className="max-lg:hidden">
          {colaborator.UserEmail}
        </Table.Cell>
        <Table.Cell className="max-lg:hidden">
          {colaborator.PrincipalCategory}
        </Table.Cell>
        <Table.Cell className="max-xl:hidden">
          {colaborator.SubCategory}
        </Table.Cell>
        <Table.Cell className="max-md:hidden">{colaborator.Status}</Table.Cell>
      </Table.Row>
      <MDViewInfo open={openV} setOpen={setOpenV} colaboration={colaborator} />
    </>
  );
};

export default ColabHistoryRow;

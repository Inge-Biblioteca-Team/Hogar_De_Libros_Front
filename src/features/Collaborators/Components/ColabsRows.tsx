import { Table } from "flowbite-react";
import { Colaborator } from "../Types/ColaboratorTypes";
import RequestBTN from "../../../components/BTNS/RequestBTN";
import { useState } from "react";
import MDRefuse from "./Modals/MDRefuse";
import MDViewInfo from "./Modals/MDViewInfo";
import MDAproved from "./Modals/MDAproved";
import { formatToDMY } from "../../../components/FormatTempo";

const ColabsRows = ({ colaborator }: { colaborator: Colaborator }) => {
  const [openV, setOpenV] = useState<boolean>(false);
  const [openA, setOpenA] = useState<boolean>(false);
  const [openD, setOpenD] = useState<boolean>(false);

  return (
    <>
      <Table.Row className="">
        <Table.Cell>{formatToDMY(colaborator.activityDate)} </Table.Cell>
        <Table.Cell> {colaborator.UserFullName}</Table.Cell>
        <Table.Cell className="md:hidden max-sm:hidden lg:table-cell">{colaborator.UserPhone}</Table.Cell>
        <Table.Cell className="md:hidden max-sm:hidden lg:table-cell">
          {colaborator.UserEmail}
        </Table.Cell>
        <Table.Cell className=" max-sm:hidden">
          {colaborator.PrincipalCategory}
        </Table.Cell>
        <Table.Cell className=" max-sm:hidden">
          {colaborator.SubCategory}
        </Table.Cell>
        <Table.Cell className=" max-sm:w-12">
          <RequestBTN
            setOpenV={setOpenV}
            setOpenA={setOpenA}
            setOpenD={setOpenD}
          />
        </Table.Cell>
      </Table.Row>
      <MDAproved
        open={openA}
        setOpen={setOpenA}
        id={colaborator.CollaboratorId}
      />
      <MDRefuse
        open={openD}
        setOpen={setOpenD}
        id={colaborator.CollaboratorId}
      />
      <MDViewInfo open={openV} setOpen={setOpenV} colaboration={colaborator} />
    </>
  );
};

export default ColabsRows;

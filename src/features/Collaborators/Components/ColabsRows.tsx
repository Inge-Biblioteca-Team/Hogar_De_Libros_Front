import { Table } from "flowbite-react";
import { Colaborator } from "../Types/ColaboratorTypes";
import { useState } from "react";
import MDRefuse from "./Modals/MDRefuse";
import MDViewInfo from "./Modals/MDViewInfo";
import MDAproved from "./Modals/MDAproved";
import { formatToDMY } from "../../../components/FormatTempo";
import MobilePopOverOptions from "../../../components/MobileComponents/MobilePopOverOptions";
import BTNAccions from "../../../components/DesktopComponents/BTNAccions";

const ColabsRows = ({ colaborator }: { colaborator: Colaborator }) => {
  const [openV, setOpenV] = useState<boolean>(false);
  const [openA, setOpenA] = useState<boolean>(false);
  const [openD, setOpenD] = useState<boolean>(false);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const handleRowClick = () => {
    setPopoverVisible(true);
  };
  return (
    <>
      <Table.Row
        className="dark:border-zinc-700  dark:bg-[#2d2d2d]"
        onClick={handleRowClick}
      >
        <Table.Cell>{formatToDMY(colaborator.activityDate)} </Table.Cell>
        <Table.Cell>
          <MobilePopOverOptions
            status={false}
            setopenTrigger={setPopoverVisible}
            openTrigger={popoverVisible}
            setOpen1={setOpenV}
            setOpen4={setOpenA}
            setOpen5={setOpenD}
            text={colaborator.UserFullName}
          />
        </Table.Cell>
        <Table.Cell className=" max-sm:hidden">
          {colaborator.UserPhone}
        </Table.Cell>
        <Table.Cell className=" max-lg:hidden">
          {colaborator.UserEmail}
        </Table.Cell>
        <Table.Cell className=" max-lg:hidden">
          {colaborator.PrincipalCategory}
        </Table.Cell>
        <Table.Cell className=" max-xl:hidden">
          {colaborator.SubCategory}
        </Table.Cell>
        <Table.Cell className=" max-md:hidden">
          <BTNAccions
            status={false}
            setOpen1={setOpenV}
            setOpen4={setOpenA}
            setOpen5={setOpenD}
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

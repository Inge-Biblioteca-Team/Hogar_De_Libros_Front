import { Table } from "flowbite-react";
import { useState } from "react";
import { Colaborator } from "../Types/ColaboratorTypes";
import MDViewInfo from "./Modals/MDViewInfo";
import { formatToDMY } from "../../../components/FormatTempo";
import MDCancelActivitie from "./Modals/MDCancelActivitie";
import BTNAccions from "../../../components/DesktopComponents/BTNAccions";
import MobilePopOverOptions from "../../../components/MobileComponents/MobilePopOverOptions";

const ColabAprovedRow = ({ colaborator }: { colaborator: Colaborator }) => {
  const [openV, setOpenV] = useState<boolean>(false);
  const [openC, setOpenC] = useState<boolean>(false);
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
        <Table.Cell className="">
          {formatToDMY(colaborator.activityDate)}{" "}
        </Table.Cell>
        <Table.Cell>
          <MobilePopOverOptions
            openTrigger={popoverVisible}
            setopenTrigger={setPopoverVisible}
            text={colaborator.UserFullName}
            setOpen1={setOpenV}
            setOpen8={setOpenC}
            status={true}
          />
        </Table.Cell>
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
        <Table.Cell className="max-md:hidden">
          <BTNAccions
            setOpen1={setOpenV}
            setOpen8={setOpenC}
            status={false}
          />
        </Table.Cell>
      </Table.Row>
      <MDViewInfo open={openV} setOpen={setOpenV} colaboration={colaborator} />
      <MDCancelActivitie
        open={openC}
        setOpen={setOpenC}
        id={colaborator.CollaboratorId}
      />
    </>
  );
};

export default ColabAprovedRow;

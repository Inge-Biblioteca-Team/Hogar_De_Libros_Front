import { Table } from "flowbite-react";
import { useState } from "react";
import { Donation } from "../Types/DonationType";
import MDSeeDonation from "./Modals/MDSeeDonation";
import MDConfirmRecepcion from "./Modals/MDConfirmRecepcion";
import { formatToDMY } from "../../../components/FormatTempo";
import MobilePopOverOptions from "../../../components/MobileComponents/MobilePopOverOptions";
import BTNAccions from "../../../components/DesktopComponents/BTNAccions";

const RowsPeningReceive = ({ donation }: { donation: Donation }) => {
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
        <Table.Cell>{donation.UserFullName}</Table.Cell>
        <Table.Cell className=" max-xl:hidden">
          {donation.UserCedula}
        </Table.Cell>
        <Table.Cell className=" max-lg:hidden">{donation.UserEmail}</Table.Cell>
        <Table.Cell>
          <MobilePopOverOptions
            setopenTrigger={setPopoverVisible}
            openTrigger={popoverVisible}
            setOpen1={setOpenV}
            setOpen9={setOpenC}
            text={donation.UserPhone}
            status
          />
        </Table.Cell>
        <Table.Cell className=" max-lg:hidden">
          {donation.SubCategory}
        </Table.Cell>
        <Table.Cell className=" max-sm:hidden">
          {formatToDMY(donation.DateRecolatedDonation)}
        </Table.Cell>
        <Table.Cell className=" max-md:hidden">{donation.Status}</Table.Cell>
        <Table.Cell className=" max-md:hidden">
          <BTNAccions setOpen1={setOpenV} setOpen9={setOpenC}   status />
        </Table.Cell>
      </Table.Row>
      <MDSeeDonation open={openV} setOpen={setOpenV} donation={donation} />
      <MDConfirmRecepcion
        open={openC}
        setOpen={setOpenC}
        id={donation.DonationID}
      />
    </>
  );
};

export default RowsPeningReceive;

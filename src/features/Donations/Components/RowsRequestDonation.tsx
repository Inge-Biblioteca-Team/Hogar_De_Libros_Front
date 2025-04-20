import { Table } from "flowbite-react";
import { Donation } from "../Types/DonationType";
import { useState } from "react";
import MDAproveDonation from "./Modals/MDAproveDonation";
import MDDenyDonation from "./Modals/MDDenyDonation";
import MDSeeDonation from "./Modals/MDSeeDonation";
import { formatToDMY } from "../../../components/FormatTempo";
import BTNMobileLoan from "../../../components/MobileComponents/BTNMobileLoan";
import BTNLoans from "../../../components/DesktopComponents/BTNLoans";

const RowsRequestDonation = ({ donation }: { donation: Donation }) => {
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
        <Table.Cell>{donation.UserFullName}</Table.Cell>
        <Table.Cell className=" max-xl:hidden">
          {donation.UserCedula}
        </Table.Cell>
        <Table.Cell className="max-lg:hidden">{donation.UserEmail}</Table.Cell>
        <Table.Cell>
          <BTNMobileLoan
            status={false}
            setopenTrigger={setPopoverVisible}
            openTrigger={popoverVisible}
            setOpen1={setOpenV}
            setOpen2={setOpenA}
            setOpen3={setOpenD}
            text={donation.UserPhone}
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
          <BTNLoans 
          status={false}
          setOpen1={setOpenV}
          setOpen2={setOpenA}
          setOpen3={setOpenD}
          />
        </Table.Cell>
      </Table.Row>
      <MDAproveDonation
        open={openA}
        setOpen={setOpenA}
        id={donation.DonationID}
      />
      <MDDenyDonation
        open={openD}
        setOpen={setOpenD}
        id={donation.DonationID}
      />
      <MDSeeDonation open={openV} setOpen={setOpenV} donation={donation} />
    </>
  );
};

export default RowsRequestDonation;

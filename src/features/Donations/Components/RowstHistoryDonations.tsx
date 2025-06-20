import { Table } from "flowbite-react";
import { useState } from "react";
import { formatToDMY } from "../../../components/FormatTempo";
import { Donation } from "../Types/DonationType";
import MDSeeDonation from "./Modals/MDSeeDonation";

const RowsHistoryDonations = ({ donation }: { donation: Donation }) => {
  const [openV, setOpenV] = useState<boolean>(false);
  return (
    <>
      <Table.Row
        className="dark:border-zinc-700  dark:bg-[#2d2d2d]"
        onClick={() => setOpenV(true)}
      >
        <Table.Cell>{donation.UserFullName}</Table.Cell>
        <Table.Cell className=" max-xl:hidden">
          {donation.UserCedula}
        </Table.Cell>
        <Table.Cell className="max-lg:hidden ">{donation.UserEmail}</Table.Cell>
        <Table.Cell className=" ">{donation.UserPhone}</Table.Cell>
        <Table.Cell className="max-lg:hidden">
          {donation.SubCategory}
        </Table.Cell>
        <Table.Cell className="max-sm:hidden">
          {formatToDMY(donation.DateRecolatedDonation)}
        </Table.Cell>
        <Table.Cell className="max-md:hidden">{donation.Status}</Table.Cell>
      </Table.Row>
      <MDSeeDonation open={openV} setOpen={setOpenV} donation={donation} />
    </>
  );
};

export default RowsHistoryDonations;

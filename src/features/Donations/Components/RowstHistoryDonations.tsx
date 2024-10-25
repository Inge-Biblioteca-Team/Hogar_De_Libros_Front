import { Table } from "flowbite-react";
import { useState } from "react";
import { formatToDMY } from "../../../components/FormatTempo";
import { Donation } from "../Types/DonationType";
import MDSeeDonation from "./Modals/MDSeeDonation";

const RowsHistoryDonations = ({ donation }: { donation: Donation }) => {
  const [openV, setOpenV] = useState<boolean>(false);
  return (
    <>
      <Table.Row onClick={()=>setOpenV(true)} >
        <Table.Cell>{donation.UserFullName}</Table.Cell>
        <Table.Cell>{donation.UserCedula}</Table.Cell>
        <Table.Cell>{donation.UserEmail}</Table.Cell>
        <Table.Cell>{donation.UserPhone}</Table.Cell>
        <Table.Cell>{donation.SubCategory}</Table.Cell>
        <Table.Cell>{formatToDMY(donation.DateRecolatedDonation)}</Table.Cell>
        <Table.Cell>{donation.Status}</Table.Cell>
      </Table.Row>
      <MDSeeDonation open={openV} setOpen={setOpenV} donation={donation} />
    </>
  );
};

export default RowsHistoryDonations;

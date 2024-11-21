import { Table } from "flowbite-react";
import { Donation } from "../Types/DonationType";
import RequestBTN from "../../../components/BTNS/RequestBTN";
import { useState } from "react";
import MDAproveDonation from "./Modals/MDAproveDonation";
import MDDenyDonation from "./Modals/MDDenyDonation";
import MDSeeDonation from "./Modals/MDSeeDonation";
import { formatToDMY } from "../../../components/FormatTempo";

const RowsRequestDonation = ({ donation }: { donation: Donation }) => {
  const [openV, setOpenV] = useState<boolean>(false);
  const [openA, setOpenA] = useState<boolean>(false);
  const [openD, setOpenD] = useState<boolean>(false);
  return (
    <>
      <Table.Row>
        <Table.Cell>{donation.UserFullName}</Table.Cell>
        <Table.Cell>{donation.UserCedula}</Table.Cell>
        <Table.Cell className="max-sm:hidden">{donation.UserEmail}</Table.Cell>
        <Table.Cell className="max-sm:hidden">{donation.UserPhone}</Table.Cell>
        <Table.Cell className="max-sm:hidden">{donation.SubCategory}</Table.Cell>
        <Table.Cell className="max-sm:hidden">{formatToDMY(donation.DateRecolatedDonation)}</Table.Cell>
        <Table.Cell className="max-sm:hidden">{donation.Status}</Table.Cell>
        <Table.Cell>
          <RequestBTN
            setOpenV={setOpenV}
            setOpenA={setOpenA}
            setOpenD={setOpenD}
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

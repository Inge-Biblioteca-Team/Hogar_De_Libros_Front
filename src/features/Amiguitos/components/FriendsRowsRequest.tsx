import { Table } from "flowbite-react";
import { useState } from "react";
import { Friend } from "../types/FriendType";
import RequestBTN from "../../../components/BTNS/RequestBTN";
import AproveFriend from "./Modals/AproveFriend";
import DenyFriend from "./Modals/DenyFriend";
import MDViewFriend from "./Modals/MDViewFriend";

const FriendsRowsRequest = ({ friend }: { friend: Friend }) => {
  const [openV, setOpenV] = useState<boolean>(false);
  const [openA, setOpenA] = useState<boolean>(false);
  const [openD, setOpenD] = useState<boolean>(false);

  return (
    <>
      <Table.Row>
        <Table.Cell>{friend.UserFullName}</Table.Cell>
        <Table.Cell>{friend.UserCedula}</Table.Cell>
        <Table.Cell className="max-sm:hidden">{friend.PrincipalCategory}</Table.Cell>
        <Table.Cell className="max-sm:hidden">{friend.SubCategory}</Table.Cell>
        <Table.Cell className="md:hidden max-sm:hidden">{friend.UserGender}</Table.Cell>
        <Table.Cell className="md:hidden max-sm:hidden">{friend.UserPhone}</Table.Cell>
        <Table.Cell >
          <RequestBTN
            setOpenV={setOpenV}
            setOpenA={setOpenA}
            setOpenD={setOpenD}
          />
        </Table.Cell>
      </Table.Row>
      <MDViewFriend open={openV} setOpen={setOpenV} friend={friend} />
      <AproveFriend open={openA} setOpen={setOpenA} id={friend.FriendId} />
      <DenyFriend open={openD} setOpen={setOpenD} id={friend.FriendId} />
    </>
  );
};

export default FriendsRowsRequest;

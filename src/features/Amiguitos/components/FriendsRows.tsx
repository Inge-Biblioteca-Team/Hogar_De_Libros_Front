import { Table } from "flowbite-react";
import { Friend } from "../types/FriendType";
import AccionsBTN from "../../../components/BTNS/AccionsBTN";
import { useState } from "react";
import MDViewFriend from "./Modals/MDViewFriend";
import MDDownFriend from "./Modals/MDDownFriend";
import EditFriendInfo from "./Modals/EditFriendInfo";

const FriendsRows = ({ friend }: { friend: Friend }) => {
  const [openS, setOpenS] = useState<boolean>(false);
  const [openE, setOpenE] = useState<boolean>(false);
  const [openD, setOpenD] = useState<boolean>(false);

  return (
    <>
      <Table.Row className="text-black dark:text-white">
        <Table.Cell>{friend.UserFullName}</Table.Cell>
        <Table.Cell>{friend.UserCedula}</Table.Cell>
        <Table.Cell className="max-sm:hidden">
          {friend.PrincipalCategory}
        </Table.Cell>
        <Table.Cell className="max-sm:hidden">{friend.SubCategory}</Table.Cell>
        <Table.Cell className="md:hidden max-sm:hidden lg:table-cell">
          {friend.UserGender}
        </Table.Cell>
        <Table.Cell className="md:hidden max-sm:hidden lg:table-cell">
          {friend.UserPhone}
        </Table.Cell>
        <Table.Cell className="md:hidden max-sm:hidden lg:table-cell">
          {friend.Status}
        </Table.Cell>
        <Table.Cell>
          <AccionsBTN
            setOpenS={setOpenS}
            setOpenE={setOpenE}
            setOpenD={setOpenD}
            Status={friend.Status == "Aprobado" ? true : false}
          />
        </Table.Cell>
      </Table.Row>
      <MDViewFriend open={openS} setOpen={setOpenS} friend={friend} />
      <MDDownFriend open={openD} setOpen={setOpenD} id={friend.FriendId} />
      <EditFriendInfo open={openE} setOpen={setOpenE} friend={friend} />
    </>
  );
};

export default FriendsRows;

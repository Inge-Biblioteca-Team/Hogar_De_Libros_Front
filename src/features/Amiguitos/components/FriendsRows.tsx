import { Table } from "flowbite-react";
import { Friend } from "../types/FriendType";
import { useState } from "react";
import MDViewFriend from "./Modals/MDViewFriend";
import MDDownFriend from "./Modals/MDDownFriend";
import EditFriendInfo from "./Modals/EditFriendInfo";
import MobilePopOverOptions from "../../../components/MobileComponents/MobilePopOverOptions";
import BTNAccions from "../../../components/DesktopComponents/BTNAccions";

const FriendsRows = ({ friend }: { friend: Friend }) => {
  const [openS, setOpenS] = useState<boolean>(false);
  const [openE, setOpenE] = useState<boolean>(false);
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
        <Table.Cell>{friend.UserFullName}</Table.Cell>
        <Table.Cell className=" max-lg:hidden">{friend.UserCedula}</Table.Cell>
        <Table.Cell className=" max-sm:hidden">{friend.UserPhone}</Table.Cell>
        <Table.Cell className=" max-xl:hidden">
          {friend.PrincipalCategory}
        </Table.Cell>
        <Table.Cell className=" max-xl:hidden">{friend.SubCategory}</Table.Cell>
        <Table.Cell>
          <MobilePopOverOptions
            setopenTrigger={setPopoverVisible}
            openTrigger={popoverVisible}
            setOpen1={setOpenS}
            setOpen2={setOpenE}
            setOpen3={setOpenD}
            text={friend.UserGender}
            status={friend.Status != "Baja"}
          />
        </Table.Cell>
        <Table.Cell className=" max-md:hidden">{friend.Status}</Table.Cell>
        <Table.Cell className=" max-md:hidden">
          <BTNAccions
            setOpen1={setOpenS}
            setOpen2={setOpenE}
            setOpen3={setOpenD}
            status={friend.Status != "Baja"}
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

import { Table } from "flowbite-react";
import { useState } from "react";
import { Friend } from "../types/FriendType";
import AproveFriend from "./Modals/AproveFriend";
import DenyFriend from "./Modals/DenyFriend";
import MDViewFriend from "./Modals/MDViewFriend";
import MobilePopOverOptions from "../../../components/MobileComponents/MobilePopOverOptions";
import BTNAccions from "../../../components/DesktopComponents/BTNAccions";

const FriendsRowsRequest = ({ friend }: { friend: Friend }) => {
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
        <Table.Cell>{friend.UserFullName}</Table.Cell>
        <Table.Cell>
          <MobilePopOverOptions 
               openTrigger={popoverVisible}
               setopenTrigger={setPopoverVisible}
               setOpen1={setOpenV}
               setOpen4={setOpenA}
               setOpen5={setOpenD}
               status={false}
               text={friend.UserPhone}
          />
        </Table.Cell>
        <Table.Cell className=" max-lg:hidden">{friend.UserCedula}</Table.Cell>
        <Table.Cell className=" max-sm:hidden">
          {friend.PrincipalCategory}
        </Table.Cell>
        <Table.Cell className=" max-xl:hidden">{friend.SubCategory}</Table.Cell>
        <Table.Cell className=" max-xl:hidden">{friend.UserGender}</Table.Cell>
        <Table.Cell className=" max-md:hidden">
          <BTNAccions 
            setOpen1={setOpenV}
            setOpen4={setOpenA}
            setOpen5={setOpenD}
            status={false}
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

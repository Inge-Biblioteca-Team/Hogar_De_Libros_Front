import { Table } from "flowbite-react";
import { useState } from "react";
import { format } from "@formkit/tempo";
import { Friend } from "../Types/FriendType";
import BtnAccion from "./BTN/FriendBTNAccions";
import DenyFriendModal from "../Components/Modals/DenyFriend"; // Importamos el modal de rechazo

const TBLFriend = ({ friend }: { friend: Friend }) => {
  const [see, setSee] = useState<boolean>(false);
  const [denyFriend, setDenyFriend] = useState<boolean>(false); // Cambié el nombre a lowercase por consistencia
  const [aproveFriend, setAproveFriend] = useState<boolean>(false);

  const RegDate = format({
    date: friend.DateGenerated,
    format: "DD/MM/YYYY",
    tz: "America/Costa_Rica",
  });

  return (
    <>
      <Table.Row className="h-20" key={friend.FriendId}> {/* Utilizamos FriendId como key única */}
        <Table.Cell className="w-56">{friend.UserFullName}</Table.Cell>
        <Table.Cell className="w-56">{friend.Status}</Table.Cell>
        <Table.Cell className="w-56">{friend.UserCedula}</Table.Cell>
        <Table.Cell className="w-56">{friend.UserPhone}</Table.Cell>
        <Table.Cell className="w-56">{friend.UserEmail}</Table.Cell>
        <Table.Cell className="w-56">{RegDate}</Table.Cell>
        <Table.Cell className="w-56">{friend.PrincipalCategory}</Table.Cell>
        <Table.Cell className="w-56">{friend.SubCategory}</Table.Cell>
        <Table.Cell className="w-52">
          <BtnAccion
            setSee={setSee}
            setDenyFriend={setDenyFriend}  
            setAproveFriend={setAproveFriend}
          />
        </Table.Cell>
      </Table.Row>

      {/* Renderizamos el modal de rechazo y lo conectamos al estado denyFriend */}
      <DenyFriendModal
        isDenyModalOpen={denyFriend} // Estado para abrir o cerrar el modal
        setDenyFriend={setDenyFriend} // Setter para cerrar el modal
        friend={friend}  // Pasamos la información del amigo al modal
      />
    </>
  );
};

export default TBLFriend;

import { Table } from "flowbite-react";
import BTNAccions from "./BTNAccions";
import { User } from "../Type/UserType";
import { useState } from "react";
import UserInfo from "./Modals/UserInfo";
import EditUser from "./Modals/EditUser";
import DisableUser from "./Modals/DisableUser";

const TBLUsers = ({ user }: { user: User }) => {
  const regDate = new Date(user.registerDate);
  const [see, setSee] = useState<boolean>(false);
  const [down, setDow] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  return (
    <>
      <Table.Row className=" h-20" key={user.cedula}>
        <Table.Cell className="w-56">{user.cedula} </Table.Cell>
        <Table.Cell className="w-56">
          {user.name} {user.lastName}{" "}
        </Table.Cell>
        <Table.Cell className="w-56">{"Pendiente"} </Table.Cell>
        <Table.Cell className="w-56">{user.province} </Table.Cell>
        <Table.Cell className="w-56">{user.phoneNumber} </Table.Cell>
        <Table.Cell className="w-56">
          {regDate.toLocaleDateString("es-CR")}{" "}
        </Table.Cell>
        <Table.Cell className="w-56">{user.status? "Activo": "Inactivo"} </Table.Cell>
        <Table.Cell className="w-52">
          <BTNAccions setSee={setSee} setDow={setDow} setEdit={setEdit} />
        </Table.Cell>
      </Table.Row>
      <UserInfo see={see} setSee={setSee} User={user} />
      <EditUser edit={edit} setEdit={setEdit} User={user} />
      <DisableUser dow={down} setDow={setDow} User={user}/>
    </>
  );
};

export default TBLUsers;

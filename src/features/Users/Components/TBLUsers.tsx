import { Table } from "flowbite-react";
import BTNAccions from "./BTNAccions";
import { User } from "../Type/UserType";

const TBLUsers = ({ user }: { user:User }) => {
  const regDate = new Date(user.registerDate);
  return (
    <>
      <Table.Row className=" h-20" key={user.id}>
        <Table.Cell className="w-56">{user.Cedula} </Table.Cell>
        <Table.Cell className="w-56">
          {user.name} {user.lastName}{" "}
        </Table.Cell>
        <Table.Cell className="w-56">{user.id} </Table.Cell>
        <Table.Cell className="w-56">{user.province} </Table.Cell>
        <Table.Cell className="w-56">{user.phoneNumber} </Table.Cell>
        <Table.Cell className="w-56">{regDate.toLocaleDateString('es-CR')} </Table.Cell>
        <Table.Cell className="w-56">{user.status} </Table.Cell>
        <Table.Cell className="w-56">
          <BTNAccions />
        </Table.Cell>
      </Table.Row>
    </>
  );
};

export default TBLUsers;

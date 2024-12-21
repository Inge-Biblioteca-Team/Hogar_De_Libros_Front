import { Table } from "flowbite-react";
import BTNAccions from "./BTNAccions";
import { User } from "../Type/UserType";
import { useContext, useState } from "react";
import UserInfo from "./Modals/UserInfo";
import EditUser from "./Modals/EditUser";
import DisableUser from "./Modals/DisableUser";
import ReactiveUser from "./Modals/ReactiveUser";
import { formatToDMY } from "../../../components/FormatTempo";
import UserContext from "../../../Context/UserContext/UserContext";

const TBLUsers = ({ user }: { user: User }) => {
  const [see, setSee] = useState<boolean>(false);
  const [down, setDow] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [reactive, setREACTIVE] = useState<boolean>(false);

  const { currentUser } = useContext(UserContext);

  const roleMapping: { [key: string]: string } = {
    external_user: "Usuario externo",
    reception: "Recepción(OPAC)",
    asistente: "Interno",
    admin: "Administrador",
    institucional: "Institucional",
  };

  return (
    <>
      <Table.Row className="h-20  bg-white" key={user.cedula}>
        <Table.Cell className="w-56">{user.cedula} </Table.Cell>
        <Table.Cell className="w-56">
          {user.name} {user.lastName}{" "}
        </Table.Cell>
        <Table.Cell className="w-56 max-sm:hidden">
          {roleMapping[user.role] || "Usuario de Sala"}{" "}
        </Table.Cell>
        <Table.Cell className="w-56 md:hidden max-sm:hidden">{user.province} </Table.Cell>
        <Table.Cell className="w-56 md:hidden max-sm:hidden">{user.phoneNumber} </Table.Cell>
        <Table.Cell className="w-56 md:hidden max-sm:hidden">
          {formatToDMY(user.registerDate)}
        </Table.Cell>
        <Table.Cell className="w-56 max-sm:hidden">
          {user.status ? "Activo" : "Inactivo"}{" "}
        </Table.Cell>
        <Table.Cell className="w-52">
          {user.cedula == currentUser?.cedula ? (
            <span></span>
          ) : (
            <BTNAccions
              setREACTIVE={setREACTIVE}
              setSee={setSee}
              setDow={setDow}
              setEdit={setEdit}
              UserStatus={user.status}
            />
          )}
        </Table.Cell>
      </Table.Row>
      <UserInfo see={see} setSee={setSee} User={user} />
      <EditUser edit={edit} setEdit={setEdit} User={user} />
      <DisableUser dow={down} setDow={setDow} User={user} />
      <ReactiveUser dow={reactive} setDow={setREACTIVE} User={user} />
    </>
  );
};

export default TBLUsers;

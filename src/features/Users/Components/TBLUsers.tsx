import { Table } from "flowbite-react";
import { User } from "../Type/UserType";
import {useState } from "react";
import UserInfo from "./Modals/UserInfo";
import EditUser from "./Modals/EditUser";
import DisableUser from "./Modals/DisableUser";
import ReactiveUser from "./Modals/ReactiveUser";
import { formatToDMY } from "../../../components/FormatTempo";
import MobilePopOverOptions from "../../../components/MobileComponents/MobilePopOverOptions";
import BTNAccions from "../../../components/DesktopComponents/BTNAccions";

const TBLUsers = ({ user }: { user: User }) => {
  const [see, setSee] = useState<boolean>(false);
  const [down, setDow] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [reactive, setREACTIVE] = useState<boolean>(false);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const handleRowClick = () => {
    setPopoverVisible(true);
  };


  const roleMapping: { [key: string]: string } = {
    external_user: "Usuario externo",
    reception: "Recepción(OPAC)",
    asistente: "Interno",
    admin: "Administrador",
    institucional: "Institucional",
  };

  return (
    <>
      <Table.Row
        className="dark:border-zinc-700  dark:bg-[#2d2d2d]"
        key={user.cedula}
        onClick={handleRowClick}
      >
        <Table.Cell>{user.cedula} </Table.Cell>
        <Table.Cell>
          <MobilePopOverOptions
            openTrigger={popoverVisible}
            setopenTrigger={setPopoverVisible}
            setOpen1={setSee}
            setOpen2={setEdit}
            setOpen3={setDow}
            setOpen4={setREACTIVE}
            text2="Reactivar"
            text={`${user.name} ${user.lastName}`}
            status={user.status}
          />
        </Table.Cell>
        <Table.Cell>{roleMapping[user.role] || "Usuario de Sala"} </Table.Cell>
        <Table.Cell className=" max-lg:hidden">{user.province} </Table.Cell>
        <Table.Cell className=" max-lg:hidden">{user.phoneNumber} </Table.Cell>
        <Table.Cell className=" max-lg:hidden">
          {formatToDMY(user.registerDate)}
        </Table.Cell>
        <Table.Cell className=" max-md:hidden">
          {user.status ? "Activo" : "Inactivo"}{" "}
        </Table.Cell>
        <Table.Cell className=" max-md:hidden">
          <BTNAccions
            setOpen1={setSee}
            setOpen2={setEdit}
            setOpen3={setDow}
            setOpen4={setREACTIVE}
            status={user.status}
          />
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

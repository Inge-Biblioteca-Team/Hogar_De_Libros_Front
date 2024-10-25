import { Table } from "flowbite-react";
import { useState } from "react";
import { Colaborator } from "../Types/ColaboratorTypes";
import MDViewInfo from "./Modals/MDViewInfo";
import { formatToDMY } from "../../../components/FormatTempo";
import { PiEyeLight, PiTrash } from "react-icons/pi";
import MDCancelActivitie from "./Modals/MDCancelActivitie";

const ColabAprovedRow = ({ colaborator }: { colaborator: Colaborator }) => {
  const [openV, setOpenV] = useState<boolean>(false);
  const [openC, setOpenC] = useState<boolean>(false);
  return (
    <>
      <Table.Row>
        <Table.Cell>{formatToDMY(colaborator.activityDate)} </Table.Cell>
        <Table.Cell>{colaborator.UserFullName}</Table.Cell>
        <Table.Cell>{colaborator.Entitycollaborator || "No aplica"}</Table.Cell>
        <Table.Cell>{colaborator.UserPhone}</Table.Cell>
        <Table.Cell>{colaborator.UserEmail}</Table.Cell>
        <Table.Cell>{colaborator.PrincipalCategory}</Table.Cell>
        <Table.Cell>{colaborator.Experience || "No posee"}</Table.Cell>
        <Table.Cell>{colaborator.Status}</Table.Cell>
        <Table.Cell>
          <div className=" flex gap-4">
            <button
              type="button"
              title="Ver"
              onClick={() => setOpenV(true)}
              className=" hover:text-blue-600"
            >
              <PiEyeLight size={30} />
            </button>
            <button
              onClick={() => setOpenC(true)}
              type="button"
              title="Cancelar"
              className=" hover:text-red-800"
            >
              <PiTrash size={30} />
            </button>
          </div>
        </Table.Cell>
      </Table.Row>
      <MDViewInfo open={openV} setOpen={setOpenV} colaboration={colaborator} />
      <MDCancelActivitie
        open={openC}
        setOpen={setOpenC}
        id={colaborator.CollaboratorId}
      />
    </>
  );
};

export default ColabAprovedRow;

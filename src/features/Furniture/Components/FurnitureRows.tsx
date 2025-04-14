import { Table } from "flowbite-react";
import { furniture } from "../type/furniture";
import AccionsBTN from "../../../components/BTNS/AccionsBTN";
import { useState } from "react";
import ModalDownFurniture from "./Modals/ModalDownFurniture";
import ModalEditFurniture from "./Modals/ModalEditFurniture";
import ModalViewFurniture from "./Modals/ModalViewFurniture";
import { getConditionStatusText } from "../../../components/Maps/Condition";

const FurnitureRows = ({ furniture }: { furniture: furniture }) => {
  const [openV, setOpenV] = useState<boolean>(false);
  const [openD, setOpenD] = useState<boolean>(false);
  const [openE, setOpenE] = useState<boolean>(false);
  return (
    <>
      <Table.Row
        key={furniture.Id}
        className=" h-24 text-black dark:text-white"
      >
        <Table.Cell className="w-52">{furniture.LicenseNumber}</Table.Cell>
        <Table.Cell className="w-52">{furniture.Description}</Table.Cell>
        <Table.Cell className="xl:table-cell 2xl:table-cell md:hidden max-sm:hidden w-52">
          {furniture.Location}
        </Table.Cell>
        <Table.Cell className="xl:table-cell 2xl:table-cell md:hidden max-sm:hidden w-44">
          {furniture.InChargePerson}
        </Table.Cell>
        <Table.Cell className="max-sm:hidden w-64">
          {getConditionStatusText(furniture.ConditionRating)}
        </Table.Cell>
        <Table.Cell className="max-sm:hidden w-64">
          {furniture.Status}
        </Table.Cell>
        <Table.Cell>
          <AccionsBTN
            Status={furniture.Status !== "Baja" ? true : false}
            setOpenS={setOpenV}
            setOpenE={setOpenE}
            setOpenD={setOpenD}
          />
        </Table.Cell>
      </Table.Row>

      <ModalEditFurniture
        sEdit={openE}
        setEdit={setOpenE}
        furniture={furniture}
      />
      <ModalDownFurniture
        open={openD}
        setOpen={setOpenD}
        id={furniture.Id}
        Description={furniture.Description}
      />
      <ModalViewFurniture
        openVModal={openV}
        setVModal={setOpenV}
        furniture={furniture}
      />
    </>
  );
};

export default FurnitureRows;

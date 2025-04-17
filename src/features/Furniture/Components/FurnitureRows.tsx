import { Table } from "flowbite-react";
import { furniture } from "../type/furniture";
import { useState } from "react";
import ModalDownFurniture from "./Modals/ModalDownFurniture";
import ModalEditFurniture from "./Modals/ModalEditFurniture";
import ModalViewFurniture from "./Modals/ModalViewFurniture";
import { getConditionStatusText } from "../../../components/Maps/Condition";
import MobilePopOverOptions from "../../../components/MobileComponents/MobilePopOverOptions";
import BTNAccions from "../../../components/DesktopComponents/BTNAccions";

const FurnitureRows = ({ furniture }: { furniture: furniture }) => {
  const [openV, setOpenV] = useState<boolean>(false);
  const [openD, setOpenD] = useState<boolean>(false);
  const [openE, setOpenE] = useState<boolean>(false);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const handleRowClick = () => {
    setPopoverVisible(true);
  };

  return (
    <>
      <Table.Row key={furniture.Id} onClick={handleRowClick}
           className="dark:border-zinc-700 dark:bg-[#2d2d2d]">
        <Table.Cell>{furniture.LicenseNumber}</Table.Cell>
        <Table.Cell>
          <MobilePopOverOptions
            openTrigger={popoverVisible}
            setopenTrigger={setPopoverVisible}
            status={furniture.Status !== "Baja" ? true : false}
            setOpen1={setOpenV}
            setOpen2={setOpenE}
            setOpen3={setOpenD}
            text={furniture.Description}
          />
        </Table.Cell>
        <Table.Cell className=" max-lg:hidden">{furniture.Location}</Table.Cell>
        <Table.Cell className=" max-md:hidden">
          {furniture.InChargePerson}
        </Table.Cell>
        <Table.Cell className=" max-lg:hidden">
          {getConditionStatusText(furniture.ConditionRating)}
        </Table.Cell>
        <Table.Cell className="">{furniture.Status}</Table.Cell>
        <Table.Cell className=" max-md:hidden">
          <BTNAccions
            status={furniture.Status !== "Baja" ? true : false}
            setOpen1={setOpenV}
            setOpen2={setOpenE}
            setOpen3={setOpenD}
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

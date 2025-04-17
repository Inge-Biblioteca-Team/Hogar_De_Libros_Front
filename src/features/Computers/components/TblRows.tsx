import { Table } from "flowbite-react";
import { Equipment } from "../types/Computer";
import MobilePopOverOptions from "../../../components/MobileComponents/MobilePopOverOptions";
import EditComponent from "./Modals/EditComponent";
import ModalDownEquip from "./Modals/ModalDownEquip";
import SeeComponent from "./Modals/SeeComponent";
import { useState } from "react";
import BTNAccions from "../../../components/DesktopComponents/BTNAccions";
const TblRows = ({ computers }: { computers: Equipment }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openSee, setOpenSee] = useState(false);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const handleRowClick = () => {
    setPopoverVisible(true);
  };

  return (
    <>
      <Table.Row key={computers.EquipmentUniqueCode} onClick={handleRowClick}
      className="dark:border-zinc-700 dark:bg-[#2d2d2d]">
        <Table.Cell>{computers.MachineNumber}</Table.Cell>
        <Table.Cell>
          <MobilePopOverOptions
            setopenTrigger={setPopoverVisible}
            setOpen1={setOpenSee}
            setOpen2={setOpenEdit}
            setOpen3={setOpenModal}
            openTrigger={popoverVisible}
            text={computers.EquipmentCategory}
            status={computers.Status}
          />
        </Table.Cell>
        <Table.Cell className=" max-md:hidden">
          {computers.EquipmentBrand}
        </Table.Cell>
        <Table.Cell>{computers.EquipmentSerial}</Table.Cell>
        <Table.Cell className=" max-md:hidden">
          {computers.Status ? "Activo" : "Baja"}
        </Table.Cell>
        <Table.Cell className="max-md:hidden">
          <BTNAccions
            setOpen1={setOpenSee}
            setOpen2={setOpenEdit}
            setOpen3={setOpenModal}
            openTrigger={popoverVisible}
            text={computers.EquipmentCategory}
            status={computers.Status}
          />
        </Table.Cell>
      </Table.Row>

      <>
        <ModalDownEquip
          open={openModal}
          setOpen={setOpenModal}
          Code={computers.EquipmentUniqueCode}
          Serial={computers.EquipmentSerial}
        />
        <EditComponent
          sEdit={openEdit}
          setSEdit={setOpenEdit}
          component={computers}
        />
        <SeeComponent
          sSee={openSee}
          setSee={setOpenSee}
          component={computers}
        />
      </>
    </>
  );
};

export default TblRows;

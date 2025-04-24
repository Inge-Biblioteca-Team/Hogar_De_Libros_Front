import { Table } from "flowbite-react";
import { Advice } from "../Types/Advice";
import { formatToDMY } from "../../../components/FormatTempo";
import { useState } from "react";
import EditAdvice from "./Modals/EditAdvice";
import ViewAdvice from "./Modals/ViewAdvice";
import DeleteAdvice from "./Modals/DeleteAdvice";
import MobilePopOverOptions from "../../../components/MobileComponents/MobilePopOverOptions";
import BTNAccions from "../../../components/DesktopComponents/BTNAccions";

const AdviceRow = ({ advice }: { advice: Advice }) => {
  const date = formatToDMY(advice.date);

  const [openV, setOpenV] = useState<boolean>(false);
  const [openE, setOpenE] = useState<boolean>(false);
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
        <Table.Cell className=" max-lg:hidden">{advice.id_Advice} </Table.Cell>
        <Table.Cell>
          <MobilePopOverOptions
            status={advice.status}
            openTrigger={popoverVisible}
            setopenTrigger={setPopoverVisible}
            setOpen1={setOpenV}
            setOpen2={setOpenE}
            setOpen6={setOpenD}
            text={advice.reason}
          />
        </Table.Cell>
        <Table.Cell className="max-sm:hidden">{advice.category} </Table.Cell>
        <Table.Cell>{date} </Table.Cell>
        <Table.Cell className="max-lg:hidden">
          <div className="line-clamp-2">{advice.extraInfo}</div>
        </Table.Cell>
        <Table.Cell className="max-sm:hidden">
          {advice.status ? "Activo" : "Finalizado"}{" "}
        </Table.Cell>
        <Table.Cell className=" max-md:hidden">
          <BTNAccions
            setOpen1={setOpenV}
            setOpen2={setOpenE}
            setOpen6={setOpenD}
            status={advice.status}
          />
        </Table.Cell>
      </Table.Row>
      <ViewAdvice open={openV} setOpen={setOpenV} advice={advice} />
      <EditAdvice open={openE} setOpen={setOpenE} advice={advice} />
      <DeleteAdvice open={openD} setOpen={setOpenD} id={advice.id_Advice} />
    </>
  );
};

export default AdviceRow;

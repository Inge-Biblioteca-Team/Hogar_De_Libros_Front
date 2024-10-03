import { Table } from "flowbite-react";
import { FaRegCalendarXmark } from "react-icons/fa6";
import { PiEyeFill } from "react-icons/pi";
import { useState } from "react";
import MDSeeReservation from "./MDSeeReservation";
import FinishLoan from "./FinishLoan";
import { HourMapping, Reserve } from "../../Types/RoomsReservations";
import { formatToDMY } from "../../../../components/FormatTempo";

const TBLAprovReservations = ({ reserve }: { reserve: Reserve }) => {

  const reserveDay = formatToDMY(reserve.date);
  const requestDay = formatToDMY(reserve.reservationDate);
  const start = Math.min(...reserve.selectedHours);
  const end = Math.max(...reserve.selectedHours);


  const [openS, setOpenS] = useState<boolean>(false);
  const [openF, setOpenF] = useState<boolean>(false);

  return (
    <>
      <Table.Head>
        <Table.HeadCell>Solicitante</Table.HeadCell>
        <Table.HeadCell>Fecha de Solicitud</Table.HeadCell>
        <Table.HeadCell>Fecha reservada</Table.HeadCell>
        <Table.HeadCell>Hora de inicio / Fin</Table.HeadCell>
        <Table.HeadCell>Actividad</Table.HeadCell>
        <Table.HeadCell></Table.HeadCell>
      </Table.Head>
      <Table.Body>
        <Table.Row className="h-20">
          <Table.Cell>{reserve.name} </Table.Cell>
          <Table.Cell>{requestDay} </Table.Cell>
          <Table.Cell>{reserveDay} </Table.Cell>
          <Table.Cell>
          {HourMapping[start]} / {HourMapping[end]}
          </Table.Cell>
          <Table.Cell>{reserve.reason} </Table.Cell>
          <Table.Cell>
            <div className=" flex justify-center gap-x-12">
              <button
                type="button"
                className=" hover:text-Body"
                onClick={() => setOpenS(true)}
              >
                {""} <PiEyeFill size={28} />
              </button>
              <button
                type="button"
                title="Rechazar préstamo"
                className="hover:text-red-600"
                onClick={() => setOpenF(true)}
              >
                <FaRegCalendarXmark size={25} />
              </button>
            </div>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
      <MDSeeReservation open={openS} setOpen={setOpenS} reserve={reserve} />
      <FinishLoan open={openF} setOpen={setOpenF} reserve={reserve} />
    </>
  );
};
export default TBLAprovReservations;

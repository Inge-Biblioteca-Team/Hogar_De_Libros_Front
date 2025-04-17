import React, { useRef, useState } from "react";
import { HourMapping, Reserve } from "../../../Types/RoomsReservations";
import { Button, ButtonGroup, Popover, Table } from "flowbite-react";
import { formatToDMY } from "../../../../../components/FormatTempo";
import FinishLoan from "../Modals/FinishLoan";
import MDSeeReservation from "../Modals/MDSeeReservation";
import { PiEyeFill } from "react-icons/pi";
import { LuCalendarCheck2 } from "react-icons/lu";

const AprovRows = ({ reservation }: { reservation: Reserve }) => {
  const reserveDay = formatToDMY(reservation.date);
  const requestDay = formatToDMY(reservation.reservationDate);
  const start = Math.min(...reservation.selectedHours);
  const end = Math.max(...reservation.selectedHours);

  const [openS, setOpenS] = useState<boolean>(false);
  const [openF, setOpenF] = useState<boolean>(false);
  const [openTrigger, setopenTrigger] = useState<boolean>(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const handleRowClick = () => {
    setopenTrigger(true);
  };

  return (
    <>
      <React.Fragment key={`${reservation.rommReservationId}`}>
        <Table.Row
          className="dark:border-zinc-700  dark:bg-[#2d2d2d]"
          onClick={handleRowClick}
        >
          <Table.Cell>{reservation.name} </Table.Cell>
          <Table.Cell className="max-md:hidden">{requestDay} </Table.Cell>
          <Table.Cell>
            <div ref={triggerRef}>
              <Popover
                open={openTrigger}
                onOpenChange={(openTrigger) => {
                  setopenTrigger?.(openTrigger);
                }}
                className=" max-md:block hidden bg-white rounded-lg text-black"
                content={
                  <ButtonGroup>
                    <Button
                      type="button"
                      title="Ver detalles"
                      color="alternative"
                      onClick={() => setOpenS(true)}
                    >
                      <PiEyeFill size={30} />
                      Ver Informacion
                    </Button>
                    <Button
                      type="button"
                      title="Finalizar"
                      color="alternative"
                      onClick={() => setOpenF(true)}
                    >
                      <LuCalendarCheck2 className="size-6" size={25} />{" "}
                      Finalizar
                    </Button>
                  </ButtonGroup>
                }
              >
                <span className=" line-clamp-2">{reserveDay} </span>
              </Popover>
            </div>
          </Table.Cell>
          <Table.Cell>
            {HourMapping[start]} / {HourMapping[end]}
          </Table.Cell>
          <Table.Cell className="max-md:hidden">
            {reservation.reason}{" "}
          </Table.Cell>
          <Table.Cell className=" max-md:hidden">
            <div className=" flex justify-center md:gap-x-4 max-sm:gap-4 gap-x-12">
              <button
                type="button"
                className=" hover:text-Body"
                onClick={() => setOpenS(true)}
              >
                {""} <PiEyeFill className="size-6" size={28} />
              </button>
              <button
                type="button"
                title="Finalizar"
                className="hover:text-red-600"
                onClick={() => setOpenF(true)}
              >
                <LuCalendarCheck2 className="size-6" size={25} />
              </button>
            </div>
          </Table.Cell>
        </Table.Row>
        <MDSeeReservation
          open={openS}
          setOpen={setOpenS}
          reserve={reservation}
        />
        <FinishLoan open={openF} setOpen={setOpenF} reserve={reservation} />
      </React.Fragment>
    </>
  );
};

export default AprovRows;

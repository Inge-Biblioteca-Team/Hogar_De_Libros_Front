import { Button, Popover } from "flowbite-react";
import { GiConfirmed } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { PiEyeFill } from "react-icons/pi";
import { useState } from "react";
import MDSeeReservation from "./MDSeeReservation";
import MDRefuseReservation from "./MDRefuseReservation";
import { Reserve } from "../../Types/RoomsReservations";
import UseRefuese from "../../Hooks/Rooms/UseRefuese";

const BTNRequest = ({ reserve }: { reserve: Reserve }) => {
  const { mutate: responseReserve } = UseRefuese("Aprove");

  const onSubmit = async (id:number) => {
    responseReserve(id, {
      onSuccess: () => {},
      onError: () => {},
    });
  };

  const [openS, setOpenS] = useState<boolean>(false);
  const [openD, setOpenD] = useState<boolean>(false);
  return (
    <>
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
          onClick={() => setOpenD(true)}
        >
          <MdCancel size={25} />
        </button>
        <Popover content={<Button color={"blue"}
        onClick={() => {
          onSubmit(reserve.rommReservationId);
        }}>Confirmar</Button>}>
          <button
            type="button"
            title="Aprobar préstamo"
            className="hover:text-green-600"
          >
            <GiConfirmed size={25} />
          </button>
        </Popover>
      </div>
      <MDRefuseReservation open={openD} setOpen={setOpenD} reserve={reserve} />
      <MDSeeReservation open={openS} setOpen={setOpenS} reserve={reserve} />
    </>
  );
};

export default BTNRequest;

import { GiConfirmed } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { PiEyeFill } from "react-icons/pi";
import { useState } from "react";
import MDSeeReservation from "./Modals/MDSeeReservation";
import { Reserve } from "../../Types/RoomsReservations";
import MDRefuseReservation from "./Modals/MDRefuseReservation";
import AproveReservation from "./Modals/AproveReservation";

const BTNRequest = ({ reserve }: { reserve: Reserve }) => {
  const [openS, setOpenS] = useState<boolean>(false);
  const [openD, setOpenD] = useState<boolean>(false);
  const [openA, setOpenA] = useState<boolean>(false);
  return (
    <>
      <div className=" flex justify-center  max-sm:w-10 max-sm:gap-x-1 md:gap-x-2  gap-x-12">
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
        <button
          onClick={() => setOpenA(true)}
          type="button"
          title="Aprobar préstamo"
          className="hover:text-green-600"
        >
          <GiConfirmed size={25} />
        </button>
      </div>
      <MDRefuseReservation open={openD} setOpen={setOpenD} reserve={reserve} />
      <MDSeeReservation open={openS} setOpen={setOpenS} reserve={reserve} />
      <AproveReservation
        open={openA}
        setOpen={setOpenA}
        ID={reserve.rommReservationId}
      />
    </>
  );
};

export default BTNRequest;

import { Breadcrumb, Timeline } from "flowbite-react";
import TLItemReservation from "./TLItemReservation";
import { responseMyReservations } from "../../Types/RoomsReservations";
import { useQuery } from "react-query";
import { getMyReservations } from "../../Services/SVReservations";
import { HomeCrumb, LastCrumb } from "../../../../components/BreadCrumb";

const RoomsReservationsTL = () => {
  const cedula = sessionStorage.getItem("cedula");

  const { data: reserves } = useQuery<responseMyReservations, Error>(
    ["MyReservations", cedula],
    () =>
      cedula
        ? getMyReservations(cedula)
        : Promise.reject("Cedula no encontrada"),
    {
      enabled: !!cedula,
    }
  );

  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeCrumb />
        <LastCrumb CurrentPage="Solicitudes y reservas aprobadas" />
      </Breadcrumb>
      <div
        className=" w-full flex items-center justify-center mt-28"
        style={{ height: "60vh" }}
      >
        <div className=" w-4/5 overflow-x-scroll pt-7 px-8 custom-bar">
          <Timeline
            className="custom-timeline border-blue-900 h-full"
            horizontal
          >
            {reserves?.count === 0 ? (
              <div className="w-full text-center text-2xl font-bold">No tiene reservas agendadas</div>
            ) : (
              reserves?.data.map((reserve) => (
                <TLItemReservation
                  reserve={reserve}
                  key={reserve.rommReservationId}
                />
              ))
            )}
          </Timeline>
        </div>
      </div>
    </>
  );
};

export default RoomsReservationsTL;

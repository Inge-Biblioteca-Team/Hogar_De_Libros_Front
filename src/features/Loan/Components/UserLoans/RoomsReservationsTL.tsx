import { Timeline } from "flowbite-react";
import TLItemReservation from "./TLItemReservation";
import { responseMyReservations } from "../../Types/RoomsReservations";
import { useQuery } from "react-query";
import { getMyReservations } from "../../Services/SVReservations";
import { useContext } from "react";
import UserContext from "../../../../Context/UserContext/UserContext";
import { ProfileCrumbs } from "../../../../components/Breadcrumbs/BreadCrumbsItems";
import Loader from "../../../../components/Loader";

const RoomsReservationsTL = () => {
  const { currentUser } = useContext(UserContext);

  const cedula = currentUser?.cedula;

  const { data: reserves, isLoading } = useQuery<responseMyReservations, Error>(
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
      <ProfileCrumbs text="Mis reservaciones" />
      {isLoading ? (
        <Loader />
      ) : (
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
                <div className="w-full text-center text-2xl font-bold">
                  No tiene reservas agendadas
                </div>
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
      )}
    </>
  );
};

export default RoomsReservationsTL;

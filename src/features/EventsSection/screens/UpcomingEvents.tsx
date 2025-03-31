import CardEvent from "../components/CardEvent";
import { useQuery } from "react-query";
import { ApiEventsResponse } from "../types/Events";
import { GetNextEvents } from "../services/SvEvents";
import { Carousel } from "flowbite-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ChevronsLeft, ChevronsRight } from "../../../components/Chrevrons/Chevrons";

const UpcomingEvents = ({ home }: { home?: boolean }) => {
  const { data: events, isLoading } = useQuery<ApiEventsResponse, Error>(
    ["EventCatalog"],
    () => GetNextEvents(),
    {
      staleTime: 1000,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <>
      {home && (
        <h4>
          Asi como cursos también tenemos diversos eventos, vean a acompañarnos,
          estos son nuestros próximos eventos.
        </h4>
      )}
      {isLoading && (
        <>
          <h2
            className="font-bold text-4xl text-center 
           max-sm:text-xl"
          >
            Próximos eventos
          </h2>
          <div className="bg-white w-full max-lg:w-full h-[28rem] max-sm:h-[23rem] rounded-md p-2">
            <Skeleton style={{ height: "19rem" }} />
            <Skeleton width={250} height={20} />
            <Skeleton width={220} height={20} />
          </div>
        </>
      )}
      {!isLoading && events && events.count > 0 && (
        <article className=" flex flex-col items-center space-y-4">
          <h2
            className="font-bold text-4xl text-center 
          max-sm:text-xl"
          >
            Próximos eventos
          </h2>
          <Carousel
            pauseOnHover
            indicators
            slideInterval={5000}
            leftControl={<ChevronsLeft />}
            rightControl={<ChevronsRight />}
          >
            {events?.data.map((event) => (
              <CardEvent key={"E" + event.id} event={event} />
            ))}
          </Carousel>
        </article>
      )}
    </>
  );
};

export default UpcomingEvents;

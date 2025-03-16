import CardEvent from "../components/CardEvent";
import { useQuery } from "react-query";
import { ApiEventsResponse } from "../types/Events";
import { GetNextEvents } from "../services/SvEvents";
import { Carousel } from "flowbite-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const UpcomingEvents = ({ home }: { home?: boolean }) => {
  const { data: events, isLoading } = useQuery<ApiEventsResponse, Error>(
    ["EventCatalog"],
    () => GetNextEvents(),
    {
      staleTime: 600,
    }
  );

  return (
    <>
      <section
       className="space-y-4 w-11/12"
        id="Events"
      >
        <h2 className="font-bold text-4xl text-center 
          max-sm:text-xl">
          Próximos eventos
        </h2>
        {home && (
          <h4>
            Asi como cursos también tenemos diversos eventos, vean a
            acompañarnos, estos son nuestros próximos eventos.
          </h4>
        )}
        {isLoading ? (
          <div className="bg-white w-full max-lg:w-full h-[28rem] max-sm:h-[23rem] rounded-md p-2">
            <Skeleton style={{ height: "19rem" }} />
            <Skeleton width={250} height={20} />
            <Skeleton width={220} height={20} />
          </div>
        ) : (
          events &&
          events.count > 0 && (
            <article>
              <Carousel
                className="Custom-Carousel w-full max-lg:w-full h-[28rem] max-sm:h-[23rem]"
                pauseOnHover
                indicators={false}
              >
                {events?.data.map((event) => (
                  <CardEvent key={"E" + event.id} event={event} />
                ))}
              </Carousel>
            </article>
          )
        )}
      </section>
    </>
  );
};

export default UpcomingEvents;

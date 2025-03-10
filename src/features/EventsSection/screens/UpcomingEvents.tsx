import CardEvent from "../components/CardEvent";
import { useQuery } from "react-query";
import { ApiEventsResponse } from "../types/Events";
import { GetNextEvents } from "../services/SvEvents";
import { Carousel } from "flowbite-react";

const UpcomingEvents = ({ home }: { home?: boolean }) => {
  const { data: events } = useQuery<ApiEventsResponse, Error>(
    ["EventCatalog"],
    () => GetNextEvents(),
    {
      staleTime: 600,
    }
  );

  return (
    <>
      {events && events.count > 0 && (
        <section
          className="relative md:w-full max-sm:w-full lg:max-w-7xl w-full max-w-6xl mx-auto md:pl-2 md:pr-2 max-sm:pr-4 max-sm:pl-4"
          id="Events"
        >
          <h2 className="text-2x text-center font-bold text-2xl mb-6 lg:text-4xl pb-4">
            Próximos eventos
          </h2>
          {home && (
            <h4>
              Asi como cursos también tenemos diversos eventos, vean a
              acompañarnos, estos son nuestros próximos eventos.
            </h4>
          )}
          <article>
            <Carousel
              className="Custom-Carousel  h-[28rem] max-sm:h-[23rem]"
              pauseOnHover
              indicators={false}
             
            >
              {events?.data.map((event) => (
                <CardEvent key={"E" + event.id} event={event} />
              ))}
            </Carousel>
          </article>
        </section>
      )}
    </>
  );
};

export default UpcomingEvents;

import CardEvent from "../components/CardEvent";
import { useQuery } from "react-query";
import { ApiEventsResponse } from "../types/Events";
import { GetNextEvents } from "../services/SvEvents";
import { Carousel } from "flowbite-react";

const UpcomingEvents = () => {
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
          className="relative w-full max-w-4xl mx-auto max-sm:w-4/5"
          id="Events"
        >
          <h2 className="text-center font-bold text-2xl mb-6">
            Próximos Eventos
          </h2>

          <article>
            <Carousel
              className="Custom-Carousel"
              pauseOnHover
              indicators={false}
              style={{ height: "28rem" }}
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

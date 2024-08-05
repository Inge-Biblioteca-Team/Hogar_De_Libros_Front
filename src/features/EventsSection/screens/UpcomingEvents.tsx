import { useState } from "react";
import CardEvent from "../components/CardEvent";
import { useQuery } from "react-query";
import { Events } from "../types/Events";
import { getEvents } from "../services/SvEvents";

const UpcomingEvents = () => {
  const {
    data: events = [],
    isLoading,
    error,
  } = useQuery<Events[], Error>("Events", getEvents);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error: {error.message}</span>;

  return (
    <section
      className="relative w-full max-w-4xl mx-auto max-sm:w-4/5"
      id="Events"
    >
      <h2 className="text-center font-bold text-2xl mb-6">Próximos Eventos</h2>
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={prevSlide}
          className="bg-gray-300 rounded-full p-2 max-sm:hidden"
        >
          &lt;
        </button>
        <div className="w-full overflow-hidden max-sm:overflow-x-scroll">
          <article
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {events.map((event, index) => (
              <CardEvent key={index} event={event} />
            ))}
          </article>
        </div>
        <button
          type="button"
          onClick={nextSlide}
          className="bg-gray-300 rounded-full p-2 max-sm:hidden"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default UpcomingEvents;

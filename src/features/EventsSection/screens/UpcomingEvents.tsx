import { useState } from "react";
import CardEvent from "../components/CardEvent";

const events = [
  {
    title: "Feria de empleo 2025",
    date: "23 de Abril",
    time: "8AM - 4PM",
    location: "Parque de Nicoya Recaredo Briceño",
    details: "En conjunto con: INA, UNA, UCR",
    imgSrc:
      "https://th.bing.com/th/id/R.8b335c89bc2ff281b2c1135cfe6e8d76?rik=6y7cFzcrEeLqtw&riu=http%3a%2f%2femprendedorestv.pe%2fwp-content%2fuploads%2f2016%2f02%2f000299307W.jpg&ehk=wZgT4RYxnfQiulOqGJ%2bkRMP5H7G9Sq5nM8ZnxZtMUa0%3d&risl=&pid=ImgRaw&r=0", // Reemplaza con la URL de la imagen
  },
  {
    title: "Día Internacional del Libro",
    date: "23 de Abril",
    time: "8AM - 4PM",
    location: "Parque de Nicoya Recaredo Briceño",
    details: "Pintacaras, actividades de lectura y más",
    imgSrc:
      "https://th.bing.com/th/id/OIP.24kUudDglrBrypr6OcU6KQHaEJ?rs=1&pid=ImgDetMain", // Reemplaza con la URL de la imagen
  },
  {
    title: "Día Nacional de los Chinos",
    date: "29 de Abril",
    time: "10AM - 12MD",
    location: "Parque de Nicoya Recaredo Briceño",
    details: "Arroz con Gato y más",
    imgSrc:
      "https://mxcity.mx/wp-content/uploads/2019/01/an%CC%83o-nuevo-chino--1024x505.jpg", // Reemplaza con la URL de la imagen
  },
];

const UpcomingEvents = () => {
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
  return (
    <section className="relative w-full max-w-4xl mx-auto" id="Events">
      <h2 className="text-center font-bold text-2xl  mb-6">Próximos Eventos</h2>
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={prevSlide}
          className="bg-gray-300 rounded-full p-2"
        >
          &lt;
        </button>
        <div className="w-full overflow-hidden">
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
          className="bg-gray-300 rounded-full p-2"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default UpcomingEvents;

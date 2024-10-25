import { useState } from 'react';
import CardViewFriends from '../components/CardViewFriends';
import CardViewCollaborators from '../components/CardViewCollaborators';
import CardViewDonations from '../components/CardViewDonations';

const FriendsCarousel = () => {
  const cards = [
    <CardViewFriends key="friends" />,
    <CardViewCollaborators key="collaborators" />,
    <CardViewDonations key="donations" />,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = cards.length;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalCards - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalCards - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative flex items-center justify-center">
      <button
        type="button"
        onClick={prevSlide}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold p-3 rounded-full transition duration-300 ease-in-out hidden sm:flex"
        aria-label="Anterior"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <div className="w-full max-w-md">
        {cards[currentIndex]}
      </div>

      <button
        type="button"
        onClick={nextSlide}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold p-3 rounded-full transition duration-300 ease-in-out hidden sm:flex"
        aria-label="Siguiente"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div className="absolute bottom-0 flex space-x-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
            } focus:outline-none hidden`}
            aria-label={`Página ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FriendsCarousel;
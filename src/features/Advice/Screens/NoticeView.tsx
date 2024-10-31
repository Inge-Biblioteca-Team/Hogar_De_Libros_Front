import { useQuery } from 'react-query';
import { useState } from 'react';
import { ApiAdvices, Advice } from '../Types/Advice';
import { GetNotice } from '../Service/SvAdvice';
import CardNoticeView from '../Components/CardNoticeView';

const NoticeView = () => {
  const {
    data: NoticesView,
    isLoading,
    error,
  } = useQuery<ApiAdvices, Error>('Notices', GetNotice);

  const [currentIndex, setCurrentIndex] = useState(0);

  const noticesPerPage = 4;

  const totalNotices = NoticesView?.data?.length || 0;
  const totalPages = Math.ceil(totalNotices / noticesPerPage);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalPages - 1 ? 0 : prevIndex + 1));
  };

  if (isLoading) return <p>Cargando noticias...</p>;
  if (error) return <p>Error al cargar las noticias: {error.message}</p>;

  const start = currentIndex * noticesPerPage;
  const end = start + noticesPerPage;
  const currentNotices = NoticesView?.data?.slice(start, end) || [];

  return (
    <section className="container mx-auto text-center py-8">
      <div className="flex items-center justify-center">
        {NoticesView?.data && NoticesView.data.length > 1 && (
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
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentNotices.map((notice: Advice) => (
            <CardNoticeView key={notice.id_Advice} notice={notice} />
          ))}
        </div>


        {NoticesView?.data && NoticesView.data.length > 1 && (
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
        )}
      </div>
    </section>
  );
};

export default NoticeView;
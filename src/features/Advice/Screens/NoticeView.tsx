import { useQuery } from 'react-query';
import { useState } from 'react';
import { Notice } from '../Types/Advice';
import { GetNotice } from '../Service/SvAdvice';
import CardNoticeView from '../Components/CardNoticeView';

const NoticeView = () => {
  const {
    data: NoticesView = [],
    isLoading,
    error,
  } = useQuery<Notice[], Error>('Notices', GetNotice);

  const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? NoticesView.length - 1 : prevIndex - 1
        );
      };
    
      const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === NoticesView.length - 1 ? 0 : prevIndex + 1
        );
      };

  if (isLoading) return <p>Cargando noticias...</p>;
  if (error) return <p>Error al cargar las noticias: {error.message}</p>;

  return (
    <div className="flex justify-center">
      {/* <div className="grid grid-cols-3 gap-10"> */}
      {NoticesView.length > 1 && (
          <button
            type="button"
            onClick={prevSlide}
            className="bg-gray-300 rounded-full p-2 max-sm:hidden"
          >
            &lt;
          </button>
        )}
      <div className="w-full overflow-hidden max-sm:overflow-x-scroll">
      <article
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
        {NoticesView?.map((notice, index) => (
          <CardNoticeView key={index} notice={notice} />
        ))}
        </article>
        </div>
        {NoticesView.length > 1 && (
          <button
            type="button"
            onClick={nextSlide}
            className="bg-gray-300 rounded-full p-2 max-sm:hidden"
          >
            &gt;
          </button>
        )}
      {/* </div> */}
    </div>

  );
};

export default NoticeView;
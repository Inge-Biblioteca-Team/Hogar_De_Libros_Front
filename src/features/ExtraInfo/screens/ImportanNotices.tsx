import { useQuery } from "react-query";
import { Notice } from "../types/Notices";
import { getExtraInfo } from "../services/SvNotices";
import { useState } from "react";
import NoticeCard from "../components/NoticeCard";

const ImportanNotices = () => {
    const {
        data: Notices = [],
        isLoading,
        error,
      } = useQuery<Notice[], Error>("Notices", getExtraInfo);
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? Notices.length - 1 : prevIndex - 1
        );
      };
    
      const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === Notices.length - 1 ? 0 : prevIndex + 1
        );
      };
    
      if (isLoading) return <span>Loading...</span>;
      if (error) return <span>Error: {error.message}</span>;
      if(Notices.length==0) return <span></span>;

      return (
        <section
          className="relative w-full max-w-4xl mx-auto max-sm:w-4/5"
          id="Activities"
        >
          <h2 className="text-center font-bold text-2xl mb-6">Avisos Importantes</h2>
          <div className="flex items-center justify-between">
          {Notices.length > 1 && (
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
                {Notices.map((notice, index) => (
                  <NoticeCard key={index} notice={notice} />
                ))}
              </article>
            </div>
            {Notices.length > 1 && (
          <button
            type="button"
            onClick={nextSlide}
            className="bg-gray-300 rounded-full p-2 max-sm:hidden"
          >
            &gt;
          </button>
        )}
          </div>
        </section>
  )
}

export default ImportanNotices

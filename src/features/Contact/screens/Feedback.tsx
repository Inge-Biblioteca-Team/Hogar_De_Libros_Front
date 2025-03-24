import FeedbackRating from "../components/FeedbackRating";
import InfoFeedback from "../components/InfoFeedback";

const Feedback = () => {
  return (
    <>
      <h2 className="font-bold text-4xl text-center 
          max-sm:text-xl">
        Recomendaciones sobre el servicio
      </h2>
      <div className="flex flex-col lg:flex-row w-full gap-5 items-start lg:justify-between">
        <InfoFeedback />
        <FeedbackRating />
      </div>
    </>
  );
};

export default Feedback;

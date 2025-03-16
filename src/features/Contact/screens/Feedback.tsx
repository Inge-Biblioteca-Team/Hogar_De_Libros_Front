import FeedbackRating from "../components/FeedbackRating";
import InfoFeedback from "../components/InfoFeedback";

const Feedback = () => {
  return (
    <section className="w-full  pr-16 pl-16 lg:w-full lg:pr-16 lg:pl-16 md:w-full md:pr-2 md:pl-2 max-sm:w-full max-sm:pl-4 max-sm:pr-4 flex flex-col items-center justify-center">
      <h2 className="text-2xl lg:text-3xl 2xl:text-3xl font-bold pb-4">
        Recomendaciones sobre el servicio
      </h2>
      <div className="flex flex-col lg:flex-row w-full gap-5 items-center lg:justify-between">
        <InfoFeedback />
        <FeedbackRating />
      </div>
    </section>
  );
};

export default Feedback;

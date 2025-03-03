import FeedbackRating from "../components/FeedbackRating"
import InfoFeedback from "../components/InfoFeedback"

const Feedback = () => {
  return (
    <section className="w-4/5 max-sm:w-full max-sm:pl-4 max-sm:pr-4 flex flex-col items-center justify-center">
    <h2 className="text-center font-bold 2xl:text-4xl text-2xl pb-8 lg:text-4xl ">Recomendaciones sobre el servicio</h2>
    <div className="flex flex-col lg:flex-row w-full gap-5 items-center justify-between">
      <InfoFeedback/>
    <FeedbackRating/>
    </div>
  </section>
  )
}

export default Feedback

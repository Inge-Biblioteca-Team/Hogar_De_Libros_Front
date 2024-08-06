import { Notice } from "../types/Notices"

const NoticeCard = ({notice}:{notice:Notice}) => {
  return (
    <figure className="flex-none w-full p-4 max-sm:p-0 ">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-sm:h-full max-sm:mr-2">
      <img
        src={notice.Image}
        alt={notice.reason}
        className="w-full h-72 max-sm:h-48"
      />
      <figcaption className="p-4">
        <h3 className="text-lg font-bold mb-2 ">{notice.reason}</h3>
        <p className="text-sm text-gray-600 ">
          <strong className="">Fecha:</strong> {notice.date}
          <br />
          <strong>{notice.considerations}</strong> 
        </p>
      </figcaption>
    </div>
  </figure>
  )
}

export default NoticeCard

import MostPopularBooks from "../features/Books/screens/MostPopularBooks"
import FreeBooksList from "../features/Books/screens/FreeBooksList"
import ComputerInfo from "../features/Computers/screens/ComputerInfo"
import RoomList from "../features/Rooms/Screens/RoomList"
import AmiguitosInfo from "../features/Amiguitos/screens/AmiguitosInfo"
import UpcomingCourses from "../features/Courses/screens/UpcomingCourses"
import UpcomingEvents from "../features/EventsSection/screens/UpcomingEvents"
import LocalArtistList from "../features/LocalArtist/screens/LocalArtistList"
import DirectContac from "../features/Contact/screens/DirectContac"
import Feedback from "../features/Contact/screens/Feedback"

const Landing = () => {
  return (
    <main className="flex items-center gap-20 justify-center flex-col mt-5 mb-10 max-sm:gap-10">
      <MostPopularBooks/>
      <FreeBooksList/>
      <RoomList/>
      <ComputerInfo/>
      <UpcomingCourses/>
      <UpcomingEvents/>
      <AmiguitosInfo/>
      <LocalArtistList/>
      <DirectContac/>
      <Feedback/>
    </main>
  )
}

export default Landing

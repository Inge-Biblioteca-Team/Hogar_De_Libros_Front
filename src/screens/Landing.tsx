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
    <main className="flex items-center justify-center flex-col">
      <DirectContac/>
      <Feedback/>
      <LocalArtistList/>
      <MostPopularBooks/>
      <FreeBooksList/>
      <RoomList/>
      <ComputerInfo/>
      <AmiguitosInfo/>
      <UpcomingCourses/>
      <UpcomingEvents/>
    </main>
  )
}

export default Landing

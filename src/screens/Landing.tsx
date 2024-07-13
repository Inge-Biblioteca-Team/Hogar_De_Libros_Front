import MostPopularBooks from "../features/Books/screens/MostPopularBooks"
import FreeBooksList from "../features/Books/screens/FreeBooksList"
import ComputerInfo from "../features/Computers/screens/ComputerInfo"
import RoomList from "../features/Rooms/Screens/RoomList"
import AmiguitosInfo from "../features/Amiguitos/screens/AmiguitosInfo"
import UpcomingCourses from "../features/Courses/screens/UpcomingCourses"
import UpcomingEvents from "../features/EventsSection/screens/UpcomingEvents"

const Landing = () => {
  return (
    <main className="flex items-center justify-center flex-col">
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

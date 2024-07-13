import MostPopularBooks from "../features/Books/screens/MostPopularBooks"
import FreeBooksList from "../features/Books/screens/FreeBooksList"
import ComputerInfo from "../features/Computers/screens/ComputerInfo"
import RoomList from "../features/Rooms/Screens/RoomList"
import AmiguitosInfo from "../features/Amiguitos/screens/AmiguitosInfo"

const Landing = () => {
  return (
    <main className="flex items-center justify-center flex-col">
      <RoomList/>
      <MostPopularBooks/>
      <FreeBooksList/>
      <AmiguitosInfo/>
      <ComputerInfo/>
    </main>
  )
}

export default Landing

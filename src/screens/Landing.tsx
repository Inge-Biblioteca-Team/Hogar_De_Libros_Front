import MostPopularBooks from "../features/Books/screens/MostPopularBooks"
import FreeBooksList from "../features/Books/screens/FreeBooksList"
import ComputerInfo from "../features/Computers/screens/ComputerInfo"

const Landing = () => {
  return (
    <main>
      <MostPopularBooks/>
      <FreeBooksList/>
      <ComputerInfo/>
    </main>
  )
}

export default Landing

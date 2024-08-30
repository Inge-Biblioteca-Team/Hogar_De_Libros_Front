import { RouterProvider } from "react-router-dom"
import Routes from "./navigators/Routes"
import ComputerNew from "./features/Computers/Pages/ComputerNew"
function App() {

  return (
    <>
    <RouterProvider router={Routes}/>
    </>
  )
}

export default App

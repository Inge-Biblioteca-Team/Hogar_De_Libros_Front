import { RouterProvider } from "react-router-dom"
import Routes from "./navigators/Routes"
import AutoLoginComponent from "./Services/Log"
function App() {

  return (
    <>
    <RouterProvider router={Routes}/>
    <AutoLoginComponent/>
    </>
  )
}

export default App

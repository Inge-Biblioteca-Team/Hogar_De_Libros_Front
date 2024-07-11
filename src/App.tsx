import { Route,Routes } from 'react-router-dom';
import Navbar from './componets/home/Navbar';

function App() {

  return (
    <>
    <Navbar/>
      <div>
    <Routes>        
      <Route path="/login"  element={<Login />} />
      <Route path="/books"  element={<Books />}/>
      <Route path="/rooms"  element={<Rooms/>}/>
      <Route path="/technoteams"  element={<Technoteams/>}/>
      <Route path="/courses"  element={<Courses/>}/>
      <Route path="/events"  element={<Events/>}/>
      <Route path="/libraryfriends"  element={<Libraryfriends/>}/>

    </Routes>
    </div>
    </>
  )
}

export default App

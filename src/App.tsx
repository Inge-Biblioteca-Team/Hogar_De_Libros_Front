import { Route,Routes } from 'react-router-dom';
import Navbar from './componets/Navbar';
import Login from './componets/Login';
import Books from './componets/Books';
import Rooms from './componets/Rooms';
import Technoteams from './componets/Technoteams';
import Courses from './componets/Courses';
import Events from './componets/Events';
import Libraryfriends from './componets/Libraryfriends';
import Footer from './componets/Footer';
import Info from './componets/Info';

function App() {

  return (
    <>
    <div className="min-h-screen flex flex-col">
    <Navbar/>
    <main className="flex-grow">
    <Routes>        
      <Route path="/login"  element={<Login />} />
      <Route path="/books"  element={<Books />}/>
      <Route path="/rooms"  element={<Rooms/>}/>
      <Route path="/technoteams"  element={<Technoteams/>}/>
      <Route path="/courses"  element={<Courses/>}/>
      <Route path="/events"  element={<Events/>}/>
      <Route path="/libraryfriends"  element={<Libraryfriends/>}/>
      <Route path="/info"  element={<Info/>}/>
    </Routes>
    </main>
    <Footer/>
    </div>
    </>
  )
}

export default App

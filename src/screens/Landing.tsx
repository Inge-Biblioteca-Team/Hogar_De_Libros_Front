import MostPopularBooks from "../Features/Books/screens/MostPopularBooks";
//import FreeBooksList from "../features/Books/screens/FreeBooksList"
import ComputerInfo from "../Features/Computers/screens/ComputerInfo";
import RoomList from "../Features/Rooms/Screens/RoomList";
import AmiguitosInfo from "../Features/Amiguitos/screens/AmiguitosInfo";
import UpcomingCourses from "../Features/Courses/screens/UpcomingCourses";
import UpcomingEvents from "../Features/EventsSection/screens/UpcomingEvents";
import LocalArtistList from "../Features/LocalArtist/screens/LocalArtistList";
import DirectContac from "../Features/Contact/screens/DirectContac";
import Feedback from "../Features/Contact/screens/Feedback";
import CurrentPrograms from "../Features/Programs/screens/CurrentsProgramns";
import ImportanNotices from "../Features/ExtraInfo/screens/ImportanNotices";
import LandingHome from "../components/LandingHome";
import LandingFooter from "../components/Layout/LandingFooter";

const Landing = () => {
  return (
    <>
      <LandingHome />
      <main className="flex items-center gap-20 justify-center flex-col mt-5 mb-10 max-sm:gap-10">
        <ImportanNotices />
        <MostPopularBooks />
        <RoomList />
        <ComputerInfo />
        <UpcomingCourses />
        <UpcomingEvents />
        <CurrentPrograms />
        <AmiguitosInfo />
        <LocalArtistList />
        <DirectContac />
        <Feedback />
      </main>
      <LandingFooter />
    </>
  );
};

export default Landing;
//  <FreeBooksList/>

//import FreeBooksList from "../features/Books/screens/FreeBooksList"
import ComputerInfo from "../features/Computers/screens/ComputerInfo";
import RoomList from "../features/Rooms/Screens/RoomList";
import AmiguitosInfo from "../features/Amiguitos/screens/AmiguitosInfo";
import UpcomingCourses from "../features/Courses/screens/UpcomingCourses";
import UpcomingEvents from "../features/EventsSection/screens/UpcomingEvents";
import LocalArtistList from "../features/LocalArtist/screens/LocalArtistList";
import DirectContac from "../features/Contact/screens/DirectContac";
import Feedback from "../features/Contact/screens/Feedback";
import CurrentPrograms from "../features/Programs/screens/CurrentsProgramns";
import ImportanNotices from "../features/Advice/Screens/ImportanNotices";
import LandingFooter from "../components/Layout/LandingFooter";
import LatestAddBooks from "../features/Books/Screens/LatestAddBooks";
import LandingHome from "../components/LandingHome";

const Landing = () => {
  return (
    <>
      <main className="dark:bg-neutral-900 flex items-center gap-16 justify-center flex-col mb-10 max-sm:gap-10">
        <LandingHome />
        <ImportanNotices />
        <LatestAddBooks />
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

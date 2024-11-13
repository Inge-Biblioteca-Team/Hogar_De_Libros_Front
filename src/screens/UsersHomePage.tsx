import LandingFooter from "../components/Layout/LandingFooter";
import ImportanNotices from "../features/Advice/Screens/ImportanNotices";
import AmiguitosInfo from "../features/Amiguitos/screens/AmiguitosInfo";
import BookAccessCard from "../features/Books/Components/BookAccessCard";
import LatestAddBooks from "../features/Books/Screens/LatestAddBooks";
import ComputerAccessCard from "../features/Computers/components/ComputerAccessCard";
import UpcomingCourses from "../features/Courses/screens/UpcomingCourses";
import EventAccessCard from "../features/EventsSection/components/EventAccessCard";
import UpcomingEvents from "../features/EventsSection/screens/UpcomingEvents";
import CurrentPrograms from "../features/Programs/screens/CurrentsProgramns";
import RoomAccessCard from "../features/Rooms/Components/Cards/RoomAccessCard";

const UsersHomePage = () => {
  return (
    <>
      <main className="w-full flex flex-col gap-5 pt-5 items-center justify-center">
        <LatestAddBooks />
        <UpcomingCourses home />
        <UpcomingEvents home />
        <CurrentPrograms home />
        <AmiguitosInfo home/>
        <ImportanNotices home />
        <section className="container mx-auto text-center max-sm:hidden">
          <h2 className="text-4xl font-bold mb-8">
            Servicios de la Biblioteca
          </h2>
          <p className="text-lg mb-12">
            Navega fácilmente a través de nuestros módulos del sistema.
          </p>
          <div className="flex justify-center mb-28 px-6">
            <div className="grid grid-cols-4 gap-6 justify-center">
              <RoomAccessCard />
              <BookAccessCard />
              <ComputerAccessCard />
              <EventAccessCard />
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </>
  );
};

export default UsersHomePage;

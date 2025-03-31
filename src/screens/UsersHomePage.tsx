import { useContext } from "react";
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
import UserContext from "../Context/UserContext/UserContext";

const UsersHomePage = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <>
      <main className="dark:bg-neutral-900 w-full flex flex-col gap-5 pt-5 items-center justify-center pb-36">
        <section className="space-y-4 mt-6 w-11/12 ">
          <LatestAddBooks />
        </section>

        <section className="space-y-4 mt-6 w-11/12 pl-2 pr-2 max-lg:pl-0 max-lg:pr-0">
          <UpcomingCourses home />
        </section>

        <section className="space-y-4 mt-6 max-sm:w-full max-sm:pl-4 max-sm:pr-4 w-11/12 pl-2 pr-2">
          <UpcomingEvents home />
        </section>

        <section className="space-y-4 max-sm:w-full mt-6 w-11/12">
          <CurrentPrograms home />
        </section>

        <section className="space-y-4 max-sm:w-full  mt-6 w-11/12">
          <AmiguitosInfo home />
        </section>

        <section className="space-y-4 mt-6 w-11/12 pr-2 pl-2">
          <ImportanNotices home />
        </section>

        <section className=" max-2xl:w-11/12  text-center w-full pt-20 max-sm:hidden">
          <h2 className="text-4xl font-bold mb-8">
            Servicios de la Biblioteca
          </h2>
          <p className="text-lg mb-12">
            Navega fácilmente a través de nuestros módulos del sistema.
          </p>
          <div className="flex justify-center  w-full">
            <>
              {currentUser?.role == "external_user" ? (
                <div className="grid max-lg:grid-cols-2 grid-cols-3 gap-10 w-full max-lg:pl-2 max-lg:pr-2">
                  <BookAccessCard />
                  <ComputerAccessCard />
                  <div className="max-lg:col-span-2 w-full">
                    <EventAccessCard />
                  </div>
                </div>
              ) : (
                <div className="grid max-lg:grid-cols-2 grid-cols-4 max-lg:w-full w-11/12 2xl:w-full max-2xl:w-full 2xl:pl-16 2xl:pr-16  gap-6 justify-center max-2xl:pl-2 max-2xl:pr-2">
                  <RoomAccessCard />
                  <BookAccessCard />
                  <ComputerAccessCard />
                  <EventAccessCard />
                </div>
              )}
            </>
          </div>
        </section>
      </main>
      <LandingFooter />
    </>
  );
};

export default UsersHomePage;

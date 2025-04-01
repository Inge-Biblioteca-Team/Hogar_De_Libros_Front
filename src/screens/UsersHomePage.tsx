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

        <section className="space-y-4 mt-6 w-11/12  ">
          <UpcomingCourses home />
        </section>

        <section className="space-y-4 mt-6 max-sm:w-full max-sm:pl-4 max-sm:pr-4 w-11/12 pl-2 pr-2">
          <UpcomingEvents home />
        </section>

        <section className="space-y-4  mt-6 w-11/12">
          <CurrentPrograms home />
        </section>

        <section
          className="space-y-4  max-sm:w-[102%] max-sm:pl-1 mt-6 w-[92.6%]
        max-lg:w-[93.5%]"
        >
          <AmiguitosInfo home />
        </section>

        <section
          className="space-y-4 mt-6 flex max-sm:w-full justify-center
        max-lg:w-full"
        >
          <ImportanNotices home />
        </section>

        <section className=" max-2xl:w-11/12  text-center w-full pt-20 max-sm:hidden">
          <h2 className="text-4xl font-bold mb-8">
            Servicios de la Biblioteca
          </h2>
          <p className="text-lg mb-12">
            Navega fácilmente a través de nuestros módulos del sistema.
          </p>
          <div className="flex justify-center w-full">
            <>
              {currentUser?.role == "external_user" ? (
                <div
                  className="grid  grid-cols-3 lg:gap-32 lg:p-3 max-lg:gap-10  max-lg:w-full max-xl:w-11/12 
                max-2xl:w-full 2xl:w-full 2xl:p-8"
                >
                  <BookAccessCard />
                  <ComputerAccessCard />

                  <EventAccessCard />
                </div>
              ) : (
                <div className="grid max-lg:grid-cols-2 grid-cols-4 gap-10 max-xl:w-11/12 w-full 2xl:w-[93.6%] max-lg:w-full ">
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

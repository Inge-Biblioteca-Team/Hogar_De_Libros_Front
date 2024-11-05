import LandingFooter from "../components/Layout/LandingFooter";
import NoticeView from "../features/Advice/Screens/NoticeView";
import FriendsCarousel from "../features/Amiguitos/screens/FriendsCarousel";
import BookAccessCard from "../features/Books/Components/BookAccessCard";
import ListMostPopularBooks from "../features/Books/Screens/ListMostPopularBooks";
import ComputerAccessCard from "../features/Computers/components/ComputerAccessCard";
import NextViewCourses from "../features/Courses/screens/NextViewCourses";
import EventAccessCard from "../features/EventsSection/components/EventAccessCard";
import ProgramsView from "../features/Programs/screens/ProgramsView";
import RoomAccessCard from "../features/Rooms/Components/Cards/RoomAccessCard";

const UsersHomePage = () => {
  return (
    <>
      <main className="w-full flex flex-col gap-20 py-10">
        <section className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Libros más Populares</h2>
          <ListMostPopularBooks />
        </section>

        <section className="container mx-auto text-center px-4">
          <NextViewCourses />
        </section>

        <section className="container mx-auto text-center px-4">
          <ProgramsView />
        </section>

        <section className="container mx-auto text-center py-8">
          <h2 className="text-4xl font-bold mb-8">Acceso a Amiguitos</h2>
          <p className="text-lg mb-4">
            Únete a nuestra comunidad y comparte con otros amantes de los
            libros.
          </p>
          <FriendsCarousel />
        </section>

        <section className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Avisos</h2>
          <p className="text-lg mb-4">
            Nuestros avisos más relevantes para mantenerte siempre al dia de nuestras actividades.
          </p>
          <div className="flex justify-center">
            <NoticeView />
          </div>
        </section>

        <section
          className="container mx-auto text-center"
        >
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

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
import LandingHome from "../components/LandingHome";
import { useInView } from "react-intersection-observer";
import LatestAddBooks from "../features/Books/Screens/LatestAddBooks";
import { motion } from "framer-motion";

const Landing = () => {
  const fadeInAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const { ref: refRoom, inView: inViewRooms } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: refBooks, inView: inViewBooks } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: refEvent, inView: inViewEvent } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: refCourses, inView: inViewCourses } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: refArtist, inView: inViewAsrtis } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: refPrograms, inView: inViewPrograms } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: refFroends, inView: inViewFriends } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: refContact, inView: inViewContact } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: refFeedback, inView: inViewFeedback } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <main className="flex items-center gap-16 justify-center flex-col mb-10 max-sm:gap-10">
        <LandingHome />
        <ImportanNotices />
        <motion.section
          ref={refBooks}
          className="space-y-4 mt-6 w-11/12"
          id="MostPopularBooks"
          initial="hidden"
          animate={inViewBooks ? "visible" : "hidden"}
          variants={fadeInAnimation}
        >
          {inViewBooks && <LatestAddBooks />}
        </motion.section>

        <motion.section
          ref={refRoom}
          className="space-y-4 mt-6 w-11/12"
          id="Rooms"
          initial="hidden"
          animate={inViewRooms ? "visible" : "hidden"}
          variants={fadeInAnimation}
        >
          {inViewRooms && <RoomList />}
        </motion.section>

        <motion.section
          ref={refRoom}
          className="space-y-4 mt-6 w-11/12"
          id="Computers"
          initial="hidden"
          animate={inViewRooms ? "visible" : "hidden"}
          variants={fadeInAnimation}
        >
          {inViewRooms && <ComputerInfo />}
        </motion.section>

        <motion.section
          ref={refCourses}
          className="space-y-4 w-11/12"
          id="Courses"
          initial="hidden"
          animate={inViewCourses ? "visible" : "hidden"}
          variants={fadeInAnimation}
        >
          {inViewCourses && <UpcomingCourses />}
        </motion.section>

        <motion.section
          ref={refEvent}
          className="space-y-4 w-11/12"
          id="Events"
          initial="hidden"
          animate={inViewEvent ? "visible" : "hidden"}
          variants={fadeInAnimation}
        >
          {inViewEvent && <UpcomingEvents />}
        </motion.section>

        <motion.section
          ref={refPrograms}
          className="space-y-4 w-11/12"
          id="Programs"
          initial="hidden"
          animate={inViewPrograms ? "visible" : "hidden"}
          variants={fadeInAnimation}
        >
          {inViewPrograms && <CurrentPrograms />}
        </motion.section>

        <motion.section
          ref={refArtist}
          className="space-y-4 w-11/12"
          id="LocalArtist"
          initial="hidden"
          animate={inViewAsrtis ? "visible" : "hidden"}
          variants={fadeInAnimation}
        >
          {inViewAsrtis && <LocalArtistList />}
        </motion.section>

        <motion.section
          ref={refFroends}
          className="space-y-4 w-11/12"
          id="Friends"
          initial="hidden"
          animate={inViewFriends ? "visible" : "hidden"}
          variants={fadeInAnimation}
        >
          {inViewFriends && <AmiguitosInfo />}
        </motion.section>

        <motion.section
          ref={refContact}
          className="space-y-4 w-11/12"
          id="ContacUs"
          initial="hidden"
          animate={inViewContact ? "visible" : "hidden"}
          variants={fadeInAnimation}
        >
          {inViewContact && <DirectContac />}
        </motion.section>
        <motion.section
          ref={refFeedback}
          className="space-y-4 w-11/12"
          initial="hidden"
          animate={inViewFeedback ? "visible" : "hidden"}
          variants={fadeInAnimation}
        >
          {inViewFeedback && <Feedback />}
        </motion.section>
      </main>
      <LandingFooter />
    </>
  );
};

export default Landing;

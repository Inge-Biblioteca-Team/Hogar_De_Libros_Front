import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "flowbite-react";
import LandingNavbar from "./LandingNavbar";
import HomeNavbar from "./HomeNavbar";
import { useNavigate } from "react-router-dom";
import UserData from "../../features/Users/Components/UserData";
import SidebarProvider from "../../Context/NavBarContext/NavProvider";
import { useContext } from "react";
import UserContext from "../../Context/UserContext/UserContext";
import Inboxpage from "../../features/Inbox/Components/Btn/Inboxpage";
import OPACNavBar from "../../features/OPAC/Components/OPACNavBar";

const Header = ({ NavBarType }: { NavBarType: string }) => {
  const navi = useNavigate();
  const Goto = () => {
    navi(`/`);
  };

  const { currentUser } = useContext(UserContext);
  const role = currentUser?.role || "";

  return (
    <SidebarProvider>
      <Navbar
        className="sticky top-0 z-50 h-28 text-white w-full bg-Body custom-navbar p-2 py-4 max-sm:py-0 max-sm:pt-2"
        fluid
      >
        <div
          className={` w-full ${
            NavBarType !== "HogarDeLibros"
              ? "flex flex-col gap-4"
              : " flex justify-between items-center max-sm:gap-4 max-sm:pb-2"
          }`}
        >
          {NavBarType === "HogarDeLibros" && <HomeNavbar />}
          <div className={`w-full flex items-center justify-center gap-3`}>
            {NavBarType == "Landing" && (
              <Navbar.Toggle className="custom-toogle" />
            )}
            <FontAwesomeIcon
              onClick={Goto}
              icon={faBookOpen}
              className="text-white h-10 w-10 md:hidden lg:table-cell max-sm:hidden cursor-pointer"
            />
            <span
              onClick={Goto}
              className="text-white text-4xl font-semibold break-words text-center
             max-sm:text-xl max-sm:text-left cursor-pointer"
            >
              Biblioteca Pública Municipal de Nicoya
            </span>
          </div>
          <div>{NavBarType === "Landing" && <LandingNavbar />}</div>
          <div>{NavBarType === "OPAC" && <OPACNavBar />} </div>
          <div className=" flex justify-center items-center max-sm:hidden">
            {NavBarType === "HogarDeLibros" && (
              <>
                {role === "admin" && <Inboxpage />}
                <UserData />
              </>
            )}
          </div>
        </div>
      </Navbar>
    </SidebarProvider>
  );
};

export default Header;

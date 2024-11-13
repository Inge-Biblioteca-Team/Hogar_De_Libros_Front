import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "flowbite-react";
import LandingNavbar from "./LandingNavbar";
import HomeNavbar from "./HomeNavbar";
import { useNavigate } from "react-router-dom";
import UserData from "../../features/Users/Components/UserData";
import LoginAcces from "../../features/Users/Components/LoginAcces";
import SidebarProvider from "../../Context/NavBarContext/NavProvider";
import { useContext } from "react";
import UserContext from "../../Context/UserContext/UserContext";
import Inboxpage from "../../features/Inbox/Components/Btn/Inboxpage";

const Header = ({ NavBarType }: { NavBarType: string }) => {
  const navi = useNavigate();
  const Goto = () => {
    navi(`/`);
  };

  const { isLogged, currentUser } = useContext(UserContext);
  const role = currentUser?.role || "";

  return (
    <SidebarProvider>
      <Navbar className="sticky top-0 z-50 text-white w-full bg-Body py-4 max-sm:py-2">
        {/* Contenedor principal para centrar en el medio */}
        <div className="flex flex-col items-center w-full">
          {/* Sección centrada para el icono del libro y el título */}
          <div className="flex items-center justify-center gap-3 cursor-pointer" onClick={Goto}>
            <FontAwesomeIcon
              icon={faBookOpen}
              className="text-white h-6 w-6 max-sm:h-5 max-sm:w-5"
            />
            <span className="text-white text-2xl font-semibold break-words max-sm:text-base max-sm:leading-tight text-center">
              Biblioteca Pública Municipal de Nicoya
            </span>
          </div>

          <div className="flex justify-end w-full mt-2 max-sm:justify-end">
            <div className="flex items-center gap-4 max-sm:gap-2">
              {isLogged ? (
                <>
                  {role === "admin" && <Inboxpage />}
                  <UserData />
                </>
              ) : (
                <LoginAcces />
              )}
            </div>
          </div>
        </div>

     
        {NavBarType === "Landing" ? <LandingNavbar /> : <HomeNavbar />}
      </Navbar>
    </SidebarProvider>
  );
};

export default Header;

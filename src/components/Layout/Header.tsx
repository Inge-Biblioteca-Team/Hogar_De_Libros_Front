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

const Header = ({ NavBarType }: { NavBarType: string }) => {
  const navi = useNavigate();
  const Goto = () => {
    navi(`/`);
  };

  const { isLogged } = useContext(UserContext);

  return (
    <SidebarProvider>
      <Navbar className="sticky top-0 z-50 text-white w-full bg-Body py-4">
        <Navbar.Brand
          className={`w-full flex items-center justify-between p-4  ${
            NavBarType === "Landing" ? "max-sm:p-0" : ""
          }`}
        >
          <div
            className={`flex items-center flex-grow justify-center space-x-2 max-sm:justify-between max-sm:relative`}
          >
            <div className="flex items-center justify-center gap-3 max-sm:pl-14 max-sm:flex-col-reverse">
              <FontAwesomeIcon
                onClick={Goto}
                icon={faBookOpen}
                className="text-white h-6 w-6 cursor-pointer max-sm:hidden"
              />
              <span
                className="text-white text-3xl font-semibold break-words max-sm:text-sm"
                onClick={Goto}
              >
                Biblioteca Pública Municipal de Nicoya
              </span>
            </div>
          </div>
          <div className=" absolute right-5 ">
            {isLogged ? <UserData /> : <LoginAcces />}
          </div>
        </Navbar.Brand>
        {NavBarType === "Landing" ? <LandingNavbar /> : <HomeNavbar />}
      </Navbar>
    </SidebarProvider>
  );
};

export default Header;

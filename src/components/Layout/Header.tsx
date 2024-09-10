import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "flowbite-react";
import LandingNavbar from "./LandingNavbar";
import HomeNavbar from "./HomeNavbar";
import { useNavigate } from "react-router-dom";
import UserData from "../../features/Loan/Components/UserLoans/UserData";

const Header = ({NavBarType}:{NavBarType: string }) => {
  
  const navi = useNavigate()
  const Goto=()=>{
    navi(`/`)
  }
  return (
    <Navbar className="sticky top-0 z-50 text-white w-full bg-Body py-4">
    <Navbar.Brand
      className="w-full flex items-center justify-between p-4 max-sm:w-4/5 max-sm:p-0"
    >
     <div className="flex items-center flex-grow justify-center space-x-2">
          <FontAwesomeIcon
            onClick={Goto}
            icon={faBookOpen}
            className="text-white h-6 w-6 cursor-pointer"
          />
        <span className="text-white text-3xl font-semibold break-words max-sm:text-xl">
          Biblioteca Pública Municipal de Nicoya
        </span>
      </div>
        <div className=" fixed right-8">
        <UserData/>
        </div>
    </Navbar.Brand>
    <Navbar.Toggle className="bg-white" />
    {NavBarType === "Landing" ? <LandingNavbar /> : <HomeNavbar />}
  </Navbar>
  
  );
};

export default Header;

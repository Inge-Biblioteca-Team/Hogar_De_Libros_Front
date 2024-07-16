import LandingNavbar from "./LandingNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

const LandingHeader = () => {
  return (
    <header className=" sticky top-0 z-50 w-full bg-Bottoms flex flex-col p-4 gap-3">
      <span className="self-center text-white text-2xl font-semibold whitespace-nowrap">
      <FontAwesomeIcon href="#Home" icon={faBookOpen} className="text-white h-6 w-6 cursor-pointer" />{" "}
        Biblioteca Pública Municipal de Nicoya
      </span>
      <LandingNavbar />
    </header>
  );
};

export default LandingHeader;

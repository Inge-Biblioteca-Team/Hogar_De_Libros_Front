import { createContext } from "react";
import { SidebarContextType } from "./NavBarType";

const SidebarContext = createContext<SidebarContextType>({
  visible: false,
  showSidebar: () => {},
  handleClose: () => {},
  handleNavigation:()=>{}
});

export default SidebarContext;

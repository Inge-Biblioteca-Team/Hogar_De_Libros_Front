import { useState } from "react";
import SidebarContext from "./NavbarContext";
import { useNavigate } from "react-router-dom";

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const showSidebar = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const handleNavigation = (path:string) => {
    handleClose(); 
    navigate(path); 
  };


  return (
    <SidebarContext.Provider value={{ visible, showSidebar, handleClose, handleNavigation }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider
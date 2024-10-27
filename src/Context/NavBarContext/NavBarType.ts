
export type SidebarContextType = {
  visible: boolean;
  showSidebar: () => void;
  handleClose: () => void;
  handleNavigation:(path:string)=>void;
};
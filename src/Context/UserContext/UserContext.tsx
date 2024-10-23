import { createContext } from "react";
import { UserContextType } from "./UserType";

const UserContext = createContext<UserContextType>({
  isLogged: false,
  setIsLogged: () => {},
  currentUser: null,
  setCurrentUser: () => {},
});

export default UserContext;

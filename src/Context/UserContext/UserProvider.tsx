import React, {  useEffect,useMemo, useState } from "react";
import { User } from "./UserType";
import UserContext from "./UserContext";
import UseGetProfile from "../../features/Users/Hooks/UseGetProfile";

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogged, setIsLogged] = useState<boolean>(() => {
    return localStorage.getItem("isLogged") === "true";
  });
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const user = localStorage.getItem("currentUser");
    return user ? JSON.parse(user) : null;
  });


  const getProfile = UseGetProfile();

  useEffect(() => {
    setTimeout(() => {
      if (isLogged) {
        getProfile.mutate();
      }
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const contextValue = useMemo(
    () => ({
      isLogged,
      setIsLogged,
      currentUser,
      setCurrentUser,
    }),
    [isLogged, currentUser]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserProvider;

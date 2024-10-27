import React, { useEffect, useMemo, useState } from "react";
import { User } from "./UserType";
import UserContext from "./UserContext";

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    console.log("rende");
    const loggedStatus = sessionStorage.getItem("isLogged");
    const user = sessionStorage.getItem("currentUser");
    console.log(loggedStatus, user);

    if (loggedStatus === "true" && user) {
      try {
        setIsLogged(true);
        setCurrentUser(JSON.parse(user));
      } catch (error) {
        console.error("Error al analizar el usuario:", error);
      }
    }
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

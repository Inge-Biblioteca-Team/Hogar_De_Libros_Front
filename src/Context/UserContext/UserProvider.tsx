import React, { useEffect, useState } from "react";
import { User } from "./UserType";
import UserContext from "./UserContext";

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  useEffect(() => {
    const loggedStatus = sessionStorage.getItem("isLogged");
    const user = sessionStorage.getItem("currentUser");

    if (loggedStatus === "true" && user) {
      setIsLogged(true);
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("isLogged", String(isLogged));
    if (currentUser) {
      sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
    } else {
      sessionStorage.removeItem("currentUser");
    }
  }, [isLogged, currentUser]);
  return (
    <UserContext.Provider
      value={{ isLogged, setIsLogged, currentUser, setCurrentUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

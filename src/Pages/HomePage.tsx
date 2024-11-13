import { useContext, useEffect } from "react";
import UserContext from "../Context/UserContext/UserContext";
import AdminHomePage from "../screens/AdminHomePage";
import UsersHomePage from "../screens/UsersHomePage";
import UseGetProfile from "../features/Users/Hooks/UseGetProfile";

const HomePage = () => {
  const { currentUser } = useContext(UserContext);

  const getProfile = UseGetProfile();

  useEffect(() => {
    getProfile.mutate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>{currentUser?.role == "admin" ? <AdminHomePage /> : <UsersHomePage />}</>
  );
};

export default HomePage;

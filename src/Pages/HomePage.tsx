import { useContext } from "react";
import UserContext from "../Context/UserContext/UserContext";
import AdminHomePage from "../screens/AdminHomePage";
import UsersHomePage from "../screens/UsersHomePage";

const HomePage = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>{currentUser?.role == "admin" ? <AdminHomePage /> : <UsersHomePage />}</>
  );
};

export default HomePage;

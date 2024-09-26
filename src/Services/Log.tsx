import { useEffect } from "react";
import { signIn } from "../features/Users/Services/SvUsuer";

const AutoLoginComponent = () => {
  useEffect(() => {
    const username = "serranorosales9@gmail.com";
    const password = "J16MSR02";
    const intervalTime = 30 * 60 * 1000;
    const autoLogin = () => {
      signIn(username, password);
    };
    autoLogin();
    const intervalId = setInterval(autoLogin, intervalTime);
    return () => clearInterval(intervalId);
  }, []);
  return <></>;
};

export default AutoLoginComponent;

import { useMutation } from "react-query";
import { PatchUserByAdmin } from "../Services/SvUsuer";
import { User } from "../Type/UserType";

const UseEditInfoUser = () => {
  return useMutation(
    ({ user, cedula }: { user: User; cedula: string }) =>
      PatchUserByAdmin(user, cedula)
  );
};
export default UseEditInfoUser;

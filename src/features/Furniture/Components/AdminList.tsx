import { useQuery } from "react-query";
import { User } from "../../Users/Type/UserType";
import { getAdmins } from "../services/SvFurniture";

const AdminList = () => {
  const { data: admins, isLoading } = useQuery<User[], Error>(
    ["Admins-List"],
    () => getAdmins(),
    {
      staleTime: 600,
    }
  );

  return (
    <>
      <option value={""} >Seleccione la persona a cargo</option>
      {isLoading && <option>Cargando....</option>}
      {!isLoading &&
        admins &&
        admins.map((admi) => (
          <option value={admi.name} key={admi.cedula + "ADC"}>
            {admi.name}
          </option>
        ))}
    </>
  );
};

export default AdminList;

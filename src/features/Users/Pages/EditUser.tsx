import { Button, Card } from "flowbite-react";
import { useQuery } from "react-query";
import { User } from "../Type/UserType";
import { GetUserInfo } from "../Services/SvUsuer";
import { format } from "@formkit/tempo";
import { useContext, useState } from "react";
import ContacE from "../Components/EditsModals/ContacE";
import GeneralInfoE from "../Components/EditsModals/GeneralInfoE";
import PlaceE from "../Components/EditsModals/PlaceE";
import { ProfileCrumbs } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import UserContext from "../../../Context/UserContext/UserContext";
import { getLoanPolicity } from "../../../components/Maps/LoanPolicity";
import Skeleton from "react-loading-skeleton";
import image from "../../../Assets/MyProfile.jpg";

const EditUser = () => {
  const { currentUser } = useContext(UserContext);
  const cedula = currentUser?.cedula || "";

  const { data: User, isLoading } = useQuery<User>(
    ["userInfo", cedula],
    () =>
      cedula ? GetUserInfo(cedula) : Promise.reject("Cedula no encontrada"),
    {
      enabled: !!cedula,
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );

  const RegDate = User?.registerDate
    ? format({
        date: User.registerDate,
        format: "DD/MM/YYYY",
        tz: "America/Costa_Rica",
      })
    : "Fecha no disponible";
  const BirthDate = User?.registerDate
    ? format({
        date: User.birthDate,
        format: "DD/MM/YYYY",
        tz: "America/Costa_Rica",
      })
    : "Fecha no disponible";

  const [openI, setOpneI] = useState<boolean>(false);
  const [openC, setOpneC] = useState<boolean>(false);
  const [openR, setOpneR] = useState<boolean>(false);

  return (
    <>
      <ProfileCrumbs text="Mi perfil" />
      {isLoading ? (
        <div className=" flex items-center w-full justify-center">
          <div className=" w-4/5">
            <span className=" font-bold text-2xl">Información general</span>
            <Skeleton className="mb-2" height={200} />
            <span className=" text-2xl font-bold">Información de contacto</span>
            <Skeleton className="mb-2" height={120} />
            <span className=" font-bold text-2xl">
              Información de residencia
            </span>
            <Skeleton className="mb-2" height={140} />
          </div>
        </div>
      ) : (
        <div className=" w-full flex items-center justify-center">
          <div className=" w-4/5 flex flex-col gap-6 justify-center ">
            <fieldset>
              <legend className=" font-bold text-2xl">
                Información general
              </legend>
              <Card className=" w-full">
                <div className=" w-full flex items-end justify-between max-sm:flex-col max-sm:items-start max-sm:gap-4">
                  <div className=" flex items-center gap-5">
                    <figure>
                      {User?.name == "ADRIAN" ? (
                        <img
                          className=" rounded-full w-40 h-40"
                          src={image}
                          alt={User?.imageUrl}
                        />
                      ) : (
                        <img
                          className=" rounded-full w-40 h-40"
                          src={User?.imageUrl}
                          alt={User?.name}
                        />
                      )}
                    </figure>
                    <div className=" flex flex-col">
                      <span>
                        <strong className=" font-bold">
                          Número de cédula:{" "}
                        </strong>
                        {User?.cedula}
                      </span>
                      <span>
                        <strong className=" font-bold">Nombre: </strong>
                        {User?.name}
                      </span>
                      <span>
                        <strong className=" font-bold">Apellidos: </strong>
                        {User?.lastName}
                      </span>
                      <span>
                        <strong className=" font-bold">
                          Fecha de nacimiento:{" "}
                        </strong>
                        {BirthDate}
                      </span>
                      <span>
                        <strong className=" font-bold">
                          Fecha de registro:{" "}
                        </strong>
                        {RegDate}
                      </span>
                      <span>
                        <strong className=" font-bold">
                          Máximo de libros a solicitar:{" "}
                        </strong>
                        {(User?.loanPolicy &&
                          getLoanPolicity(User.loanPolicy)) ||
                          "N/A"}
                      </span>
                    </div>
                  </div>
                  <div>
                    <Button className="dark:bg-[#2d2d2d]" color={"blue"} onClick={() => setOpneI(true)}>
                      Editar información
                    </Button>
                  </div>
                </div>
              </Card>
            </fieldset>
            <fieldset>
              <legend className=" text-2xl font-bold">
                Información de contacto
              </legend>
              <Card>
                <div className=" flex items-end justify-between max-sm:flex-col max-sm:items-start max-sm:gap-4">
                  <div>
                    <div>
                      <strong className=" font-bold">Teléfono: </strong>
                      {User?.phoneNumber}
                    </div>
                    <div>
                      <strong className=" font-bold">Correo: </strong>
                      {User?.email}
                    </div>
                  </div>
                  <div>
                    <Button className="dark:bg-[#2d2d2d]" color={"blue"} onClick={() => setOpneC(true)}>
                      Editar información de contacto
                    </Button>
                  </div>
                </div>
              </Card>
            </fieldset>

            <fieldset>
              <legend className=" font-bold text-2xl">
                Información de residencia
              </legend>
              <Card>
                <div className=" flex items-end justify-between max-sm:flex-col max-sm:items-start max-sm:gap-4">
                  <div>
                    <div>
                      <strong className=" font-bold">Provincia: </strong>
                      {User?.province}
                    </div>
                    <div>
                      <strong className=" font-bold">Cantón: </strong>
                      {User?.district}
                    </div>
                    <div>
                      <strong className=" font-bold">Dirección: </strong>
                      {User?.address}
                    </div>
                  </div>
                  <div>
                    <Button className="dark:bg-[#2d2d2d]" color={"blue"} onClick={() => setOpneR(true)}>
                      Editar información de residencia
                    </Button>
                  </div>
                </div>
              </Card>
            </fieldset>
          </div>
        </div>
      )}
      {User && (
        <>
          <ContacE open={openC} setOpen={setOpneC} User={User} />
          <GeneralInfoE open={openI} setOpen={setOpneI} User={User} />
          <PlaceE open={openR} setOpen={setOpneR} User={User} />
        </>
      )}
    </>
  );
};

export default EditUser;

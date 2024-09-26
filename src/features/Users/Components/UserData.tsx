import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Popover } from "flowbite-react";
import { FaUserFriends } from "react-icons/fa";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { GetUserInfo } from "../Services/SvUsuer";
import { User } from "../Type/UserType";

const UserData = () => {
  const Navi = useNavigate();

  const email = sessionStorage.getItem("email");
  const cedula = sessionStorage.getItem("cedula");

  const { data: User } = useQuery<User>(
    ["userInfo", cedula],
    () =>
      cedula ? GetUserInfo(cedula) : Promise.reject("Cedula no encontrada"),
    {
      enabled: !!cedula,
      staleTime: Infinity,
      cacheTime: Infinity, 
    }
  );

  const goToMyLoans = () =>{
    Navi("/HogarDeLibros/Perfil/MisPréstamos")
  }

  const goToEnrolmentCurses=()=>{
    Navi("/HogarDeLibros/Perfil/CursosMatriculados")
  }

  return (
    <Popover
      content={
        <div className="w-64 p-3">
          <div className="mb-2 flex items-center justify-between">
            <span>
              <img
                className="h-10 w-10 rounded-full"
                src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                alt="User Profile"
              />
            </span>
            <div>
              <button
                type="button"
                onClick={() => Navi(`/HogarDeLibros/Perfil/EditarPerfil/${cedula}`)}
                className="rounded-lg bg-blue-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Editar Perfil
              </button>
            </div>
          </div>
          <p
            id="profile-popover"
            className="text-base font-semibold leading-none text-gray-900 dark:text-gray-100"
          >
            <span className="text-gray-900 dark:text-gray-100">
              {User?.name}
            </span>
          </p>
          <p className="mb-3 text-sm font-normal text-gray-800 dark:text-gray-200">
            <span className="hover:underline text-gray-800 dark:text-gray-200">
              {email}
            </span>
          </p>
          <p className="mb-3 text-sm font-normal text-gray-800 dark:text-gray-200">
            <span
              className="hover:underline text-gray-800 dark:text-gray-200 cursor-pointer"
              onClick={goToMyLoans}
            >
              Mis Préstamos
            </span>
          </p>
          <p className="mb-3 text-sm font-normal text-gray-800 dark:text-gray-200">
            <span
              className="hover:underline text-gray-800 dark:text-gray-200 cursor-pointer"
              onClick={goToEnrolmentCurses}
            >
              Cursos Matriculados
            </span>
          </p>
          <div className="flex items-center mb-4">
            <FaUserFriends className="text-gray-800 dark:text-gray-200 mr-2" />
            <span className="text-sm text-gray-800 dark:text-gray-200">
              Amigo
            </span>
          </div>
          <Button
            onClick={() => Navi("/IniciarSesion")}
            type="button"
            color={"gray"}
            className="w-full hover:!text-red-800 hover:!border-red-400"
          >
            Cerrar Sesión
          </Button>
          <div></div>
        </div>
      }
    >
      <button
        title="Usuario"
        type="button"
        className="bg-Bottoms text-white text-2xl rounded-lg px-2 hover:bg-Bottoms-dark hover:scale-105 max-sm:hidden w-12"
      >
        <FontAwesomeIcon icon={faUserAlt} />
      </button>
    </Popover>
  );
};

export default UserData;

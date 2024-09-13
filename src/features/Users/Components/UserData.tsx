import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover } from "flowbite-react";
import { FaUserFriends } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const UserData = () => {
  const Navi = useNavigate();

  return (
    <Popover
      content={
        <div className="w-64 p-3">
          <div className="mb-2 flex items-center justify-between">
            <a href="#">
              <img
                className="h-10 w-10 rounded-full"
                src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                alt="User Profile"
              />
            </a>
            <div>
              <button
                type="button"
                onClick={() => Navi("/HogarDeLibros/Perfil/EditarPerfil")}
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
            <a href="#" className="text-gray-900 dark:text-gray-100">
              Nombre del Usuario
            </a>
          </p>
          <p className="mb-3 text-sm font-normal text-gray-800 dark:text-gray-200">
            <a
              href="mailto:user@example.com"
              className="hover:underline text-gray-800 dark:text-gray-200"
            >
              user@example.com
            </a>
          </p>
          <p className="mb-3 text-sm font-normal text-gray-800 dark:text-gray-200">
            <a
              href="/HogarDeLibros/Perfil/MisPrestamos"
              className="hover:underline text-gray-800 dark:text-gray-200"
            >
              Mis Prestamos
            </a>
          </p>
          <div className="flex items-center mb-4">
            <FaUserFriends className="text-gray-800 dark:text-gray-200 mr-2" />
            <span className="text-sm text-gray-800 dark:text-gray-200">
              Amigo
            </span>
          </div>
          <button
            type="button"
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            Cerrar Sesión
          </button>
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

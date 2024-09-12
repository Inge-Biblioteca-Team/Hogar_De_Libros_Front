import { faUserAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover } from "flowbite-react";
import { FaEdit } from "react-icons/fa";

const userData = () => {
  return (
    <Popover
      aria-labelledby="profile-popover"
      content={
        <div className="w-64 bg-gray-900 text-white rounded-lg">
          <div className="relative bg-[#004a77ff] flex flex-col items-center p-4 rounded-t-lg">
            <h2 className="text-sm font-semibold text-white mb-8">Usuario</h2>

            <div className="absolute -bottom-4 bg-[#6ab4d9] rounded-full p-2">
              <FontAwesomeIcon
                icon={faUserAlt}
                className="text-white h-10 w-10"
              />
            </div>

            <button
              type="button"
              onClick={() => (window.location.href = "/EditUser")}
              className="absolute top-2 right-2 text-white hover:text-gray-200"
            >
              {""} <FaEdit size={20} />
            </button>
          </div>

          <div className="flex flex-col items-center mt-6 p-3 rounded-b-lg">
            <p
              id="profile-popover"
              className="text-base font-semibold leading-none text-center"
            >
              Nazareth Gómez
            </p>
            <p className="mb-3 text-sm font-normal text-center">
              <a
                href="mailto:Nazasanchez@gmail.com"
                className="hover:underline"
              >
                Nazasanchez@gmail.com
              </a>
            </p>
            <div className="flex flex-col items-center">
              <button
                type="button"
                className="rounded-full bg-red-600 p-2 text-white hover:bg-red-800"
              >
                {""} <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
              </button>
              <p className="mt-1 text-sm">Cerrar Sesión</p>
            </div>
          </div>
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
                className="rounded-lg bg-blue-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Cerrar sesión
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
              href="/HogarDeLibros/Perfil"
              className="hover:underline text-gray-800 dark:text-gray-200"
            >
              user@example.com
            </a>
          </p>
          <div className="flex items-center mb-4">
          
            <span className="text-sm text-gray-800 dark:text-gray-200">
              Amigo
            </span>
          </div>
          <button
            type="button"
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            Editar perfil
          </button>
        </div>
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

export default userData;

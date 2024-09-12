import { faUserAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover } from "flowbite-react";
import { FaEdit } from 'react-icons/fa';

const userData = () => {
  return (
    <Popover
      aria-labelledby="profile-popover"
      content={
        <div className="w-64 bg-gray-900 text-white rounded-lg">
          <div className="relative bg-[#004a77ff] flex flex-col items-center p-4 rounded-t-lg">
            <h2 className="text-sm font-semibold text-white mb-8">Usuario</h2>

            <div className="absolute -bottom-4 bg-[#6ab4d9] rounded-full p-2">
              <FontAwesomeIcon icon={faUserAlt} className="text-white h-10 w-10" />
            </div>

            <button
              type="button"
              onClick={() => window.location.href = "/EditUser"}
              className="absolute top-2 right-2 text-white hover:text-gray-200"
            >
              <FaEdit size={20} />
            </button>
          </div>

          <div className="flex flex-col items-center mt-6 p-3 rounded-b-lg">
            <p id="profile-popover" className="text-base font-semibold leading-none text-center">
              Nazareth Gómez
            </p>
            <p className="mb-3 text-sm font-normal text-center">
              <a href="mailto:Nazasanchez@gmail.com" className="hover:underline">
                Nazasanchez@gmail.com
              </a>
            </p>
            <div className="flex flex-col items-center">
              <button
                className="rounded-full bg-red-600 p-2 text-white hover:bg-red-800"
              >
                <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
              </button>
              <p className="mt-1 text-sm">Cerrar Sesión</p>
            </div>
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
}

export default userData;
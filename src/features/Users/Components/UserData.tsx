import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover } from "flowbite-react";
import { RiFolderInfoFill } from "react-icons/ri";
import { GrDocumentConfig } from "react-icons/gr";
import { GrLogout } from "react-icons/gr";
import { GrHelpBook } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const UserData = () => {
  const Navi = useNavigate();

  return (
    <Popover
      content={
        <div className="w-72 bg-white text-black pb-2">
          <span className=" text-black">
            <div className=" p-2 flex items-center">
              <FontAwesomeIcon
                icon={faUserAlt}
                className="h-7 w-10"
              />
              <div>
                <span>
                  Adrian Aguilar Diaz <br />
                </span>
                <span>
                  Dian7875.a@gmail.com <br />
                </span>
              </div>
            </div>
          </span>
          <span>
            <div className=" p-2 flex items-center justify-center border-t-black border-t w-full ">
              <button
                type="button"
                className=" flex justify-start gap-3 w-full"
                onClick={() => Navi("/HogarDeLibros/Perfil")}
              >
                <figure className=" w-7 h-6">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1245/1245113.png"
                    alt=""
                  />
                </figure>
                Mis Solicitudes <br />
              </button>
            </div>
          </span>
          <span>
            <div className=" p-2 flex items-center justify-center flex-col gap-3 border-t-black border-t w-full ">
              <button type="button" className=" w-full">
                <span className=" flex justify-start gap-3 w-full">
                  <figure className=" w-7 h-6">
                    <RiFolderInfoFill size={28} />
                  </figure>
                  Informacion de la cuenta <br />
                </span>
              </button>
              <button type="button" className=" w-full">
                <span className=" flex justify-start gap-3 w-full">
                  <figure className=" w-7 h-6">
                    <GrDocumentConfig size={28} />
                  </figure>
                  Editar Información
                  <br />
                </span>
              </button>
              <button type="button" className=" w-full">
                <span className=" flex justify-start gap-3 w-full">
                  <figure className=" w-7 h-6 pl-1">
                    <GrLogout size={28} />
                  </figure>
                  Cerrar Sesion
                  <br />
                </span>
              </button>
            </div>
          </span>
          <span>
            <div className=" p-2 flex items-center justify-center border-t-black border-t w-full">
              <button
                type="button"
                className=" flex justify-start gap-3 w-full"
              >
                <figure className=" w-7 h-6">
                  <GrHelpBook size={28} />
                </figure>
                Ayuda <br />
              </button>
            </div>
          </span>
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

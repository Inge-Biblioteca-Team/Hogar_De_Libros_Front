import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, TextInput, Label, Modal } from "flowbite-react";
import RecoverPasswordModal from "./RecoverPasswordModal";
import { useForm } from "react-hook-form";
import { SingIng } from "../Type/UserType";
import UseAuth from "../Hooks/UseAuth";
import cover from "../../../Assets/LoginCover.png"
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";

const Login = () => {
  const navigate = useNavigate();
  const [showRecoverPasswordModal, setShowRecoverPasswordModal] =
    useState(false);

  const openRecoverPasswordModal = () => {
    setShowRecoverPasswordModal(true);
  };

  const { register, handleSubmit } = useForm<SingIng>();

  const { mutate: LogIn } = UseAuth();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const onSubmit = (data: SingIng) => {
    LogIn(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="flex flex-col md:flex-row items-center max-w-4xl w-full bg-white shadow-lg rounded-lg max-sm:bg-transparent">
        <div className="w-full md:w-1/2 p-8 max-sm:p-3">
          <Card className="max-w-lg w-full">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              Iniciar Sesión
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              ¿No posees una cuenta?{" "}
              <Link to="/Registro" className="text-blue-500 hover:underline">
                Regístrate aquí.
              </Link>
            </p>

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Label htmlFor="email" value="Correo Electrónico" />
                <TextInput
                  id="email"
                  type="email"
                  placeholder="Tucorreo@ejemplo.com"
                  required
                  {...register("username")}
                />
              </div>

              <div className="relative">
                <Label htmlFor="password" value="Contraseña" />
                <TextInput
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  required
                  {...register("password")}
                />
                <button
                type="button"
                className=" absolute right-4 top-9"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <IoEyeOffSharp size={20} className=" hover:text-stone-500" />
                ) : (
                  <IoEyeSharp size={20} className=" hover:text-stone-500" />
                )}
              </button>
              </div>

              <Button type="submit" gradientMonochrome="info" fullSized>
                Iniciar Sesión
              </Button>

              <div className="flex justify-between items-center mt-4">
                <Button
                  color="light"
                  onClick={() => navigate("/")}
                >
                  Regresar
                </Button>
                <Button color="light" onClick={openRecoverPasswordModal}>
                  ¿Olvidó su contraseña?
                </Button>
              </div>
            </form>

            {showRecoverPasswordModal && (
              <Modal
                show={showRecoverPasswordModal}
                onClose={() => setShowRecoverPasswordModal(false)}
              >
                <RecoverPasswordModal
                  openModal={showRecoverPasswordModal}
                  setOpenModal={setShowRecoverPasswordModal}
                />
              </Modal>
            )}
          </Card>
        </div>
        <div className="w-full md:w-1/2 p-4 flex flex-col items-center max-sm:hidden">
          <h6 className="text-blue-600 text-lg font-semibold mb-2">
            Biblioteca Pública Municipal de Nicoya
          </h6>
          <img
            src={cover}
            alt="Mujer leyendo"
            className="rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
